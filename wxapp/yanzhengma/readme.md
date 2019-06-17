- start 从页面到组件？
  页面是老板 组件是员工，页面是组件构成
  start 要让页面知道状态，由Page data中存取
  <countdown start="{{start}}"></countdown>

- 组件的数据 data(组件内部数据)+properties(外部数据)

- properties 里的 observer 接收到值改变时执行 观察者

- 从内向外出发事件 
  内：this.triggerEvent({
        "event_name",
        data
      })
  外：（绑定自定义事件）bind:event_name="真正执行接收消息的函数"

- 页面由组件构成，先去独立的开发组件，再拼接起来

- 由外传入的properties 由内传出的事件Page和Component不可分割

- 