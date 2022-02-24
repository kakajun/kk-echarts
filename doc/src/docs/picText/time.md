


## time时间

:::demo 
```html
<el-row :span="24">
  <el-col :span="6">
   值:{{form}}<br/>
   <avue-time v-model="form" format="hh时mm分ss秒" value-format="hh:mm:ss" placeholder="请选择时间"></avue-time>
  </el-col>
</el-row>
<script>
export default {
    data() {
      return {
        form:'12:00:00'
      }
    }
}
</script>

```
:::

<script>
export default {
    data() {
      return {
        form:'12:00:00'
      }
    }
}
</script>

