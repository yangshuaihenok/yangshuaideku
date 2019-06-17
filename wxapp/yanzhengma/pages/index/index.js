//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    start:false
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  _getCountdownEvent(e){
    this.setData({
      start:true
    })
  },
  _setStartDataEvent(e){
    console.log(e);
    if(e.detail.start === false){
      this.setData({
        start:false
      })
    }
  },
  onLoad: function () {
    setTimeout(()=>{
      this.setData({
        start:true
      })
    },2000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
