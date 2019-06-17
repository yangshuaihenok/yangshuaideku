const WXAPI = require('../../wxapi/main');

Page({
  data: {
    goods: [], //商口列表
    categories: [], //分类 
    activeCategoryId: 0, //当前分类 
    noticeList:[]//通知列表
  },
  onLoad() {
    this.getNotice();  //通知
    this.getBanners();  //请求Banner位
    this.loadGoods(); //商品
  },
  getNotice(){
    WXAPI.noticeLists({
      pageSize:5
    })
    .then(res=>{
      console.log(res);
      this.setData({
        noticeList:res.data
      })
    })
  },
  getBanners() {
    WXAPI.banners({
      type: 'new'
    })
      .then(res => {
        console.log(res);
      })
  },
  loadGoods() {
    WXAPI.goods({
      recommendStatus: 1
    })
      .then(res => {
        console.log(res);
      })
  }
})
