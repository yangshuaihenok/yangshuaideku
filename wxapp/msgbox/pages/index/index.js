//index.js
Page({
  onLoad:function(){
    this.popup=this.selectComponent('#popup');
  },
  showPopup:function(){
    // 弹窗
    this.popup.showPopup(); 
  },
  _error(){
    this.popup.hidePopup();
  },
  _success() {
    this.popup.hidePopup();
  }
})
