const express = require('express')
var request = require('request');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var config = require('./api/config');
const email = require('./api/email.js')
const app = express();
app.use(express.static('dist'))
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function (req, res, next) {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header('Access-Control-Allow-Credentials', true)
    // 这里获取 origin 请求头 而不是用 *
    res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
    res.header("Access-Control-Allow-Headers", "x-access-token,x-access-type, Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
  }
  next()
});

app.get('/sendemail', function (req, res) {
  var qq = req.query.qq;
  email.send({ 'address': qq, type: true });
  const response = {
    message: 'Email send successfully',
    filename: qq
  };
  res.end(JSON.stringify(response));
})
app.post('/sendmsg', function (req, res) {
  var qq = req.body.qq;
  var version = req.body.version;
  var orderid = req.body.orderid;
  var type = req.body.type;
  var tenant = req.body.tenant || 0;
  var tenantObj = config[tenant];
  const url = 'https://oapi.dingtalk.com/robot/send?access_token=' + tenantObj.access_token
  request({
    url: url,
    method: 'post',
    json: true,
    body: {
      "msgtype": "markdown",
      "markdown": {
        title: version + '有新的订单哦',
        "text": '### ' + orderid + ' \n' +
          "- 用户QQ:" + qq + ' \n' +
          "- 套餐类型:" + version + ' \n' +
          "- 支付方式:" + type + ' \n' +
          "- [订单链接](" + tenantObj.payList + ")"
      },
      "at": {
        "isAtAll": true
      }
    }
  }, async function (error, response, ) {
    if (!error && response.statusCode == 200) {
      const response = {
        message: 'Email send successfully',
      };
      res.end(JSON.stringify(response));
    }
  });

})


app.post('/upload', multer({ dest: './file/' }).any(), function (req, res) {
  const path = "./file/"
  var des_file = path + req.files[0].originalname + '.jpg';
  var qq = req.body.qq;
  fs.readFile(req.files[0].path, function (err, data) {
    fs.writeFile(des_file, data, function (err) {
      if (!err) {
        const response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        };
        email.send({ 'address': qq, 'name': req.files[0].originalname });
        res.end(JSON.stringify(response));
      }
    });
  });
})
// 访问单页
app.get('/**', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(html);
  res.end();
});
app.listen(10001, () => console.log('Example app listening on port 10001!'))