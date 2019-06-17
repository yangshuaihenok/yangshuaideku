//index.js
//获取应用实例
const app = getApp()
const GameManager = require("./game_manager.js")
Page({
  data:{
    grids:[]
  },
  gameManager:null,
  onLoad(){
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(){
    console.log('111')
  },
  touchMove(){
    console.log('222')
  },
  touchEnd(){
    console.log('333')
  }
})
