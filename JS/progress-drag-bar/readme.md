### 播放进度条

- 三个容器 总长度 已播放长度 拖动按钮
- 移动端 touchStart touchMove touchEnd
- 改变 width left的值改变已播放长度

```js
new Progress('selector',{ // selector是一个容器 选择器
    onDrag:()=>{},
    onDragStart:()=>{},
    onDragEnd:()=>{},
    progress:0.5,
    disableGrag:false
})
```