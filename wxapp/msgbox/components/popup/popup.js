// components/popup/popup.js
Component({
  //page传来的参数
  properties:{
    //声明向page要什么
    title:{
      type:String,
      value:'标题',
    },
    content:{
      type:String,
      value:'内容'
    },
    btn_ok:{
      type: String,
      value: '确定'
    },
    btn_no: {
      type: String,
      value: '取消'
    }
  },
  data:{
    flag:true  /*弹窗显示还是隐藏 */
  },
  //页面中被调用
  methods:{
    hidePopup:function(){
      this.setData({
        flag:!this.data.flag
      })
    },
    showPopup () {
      this.setData({
        flag: !this.data.flag
      })
    },
    _error(){
      this.triggerEvent("error");
    },
    _success(){
      this.triggerEvent("success");
    }
  }
})