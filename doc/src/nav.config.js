import navConfig from './doc.config'
let children = [];
navConfig.forEach(ele => {
    children.push({
        title: ele.label,
        count: ele.count,
        path: `/doc${ele.default}`,
    })
})
let result = [{
    title: '首页',
    path: '/',
}, {
    title: '文档',
    path: '/support',
    children: children
}
    // , {
    //   title: '获取升级版',
    //   path: '/vip',
    // }, {
    //   title: '授权查询',
    //   path: '/license',
    // }, {
    //   title: '团队',
    //   path: '/team',
    // }, {
    //   title: '赞助支持',
    //   path: '/support',
    // }, {
    //   title: '服务器1折起',
    //   href: 'https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=vqed4m0j',
    // }
]
export default result;
