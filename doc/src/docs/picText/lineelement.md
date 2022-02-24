# Lineelement 画线条

## 设计思路
1. 通过svg的形式展现出线条,通过以下格式进行定义
```json
{
style: 'solid', // 线条样式
color: '#000', // 线条颜色
width: 2, // 线条宽度
points: ['', 'arrow'],
start: [0, 0],
end: [549, 0],
}

```
2. 想通过画的方式给呈现出来,但是我们的框架不支持draggel内部再有任何编辑,所以放弃,只能做简单的线条呈现