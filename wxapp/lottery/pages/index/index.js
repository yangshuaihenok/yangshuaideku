//index.js
//获取应用实例
const app = getApp()
var intime = 50
var interval = null

Page({
  data:{
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck:'clickLuck',
    luckPosition:0
  },
  onLoad(){
    this.loadAnimation();
  },
  loadAnimation(){
    let that = this;
    let index = 0;
    interval = setInterval(()=>{
      if(index>7){
        index = 0;
        that.data.color[7] = 0.5;
      }else if(index != 0){
        that.data.color[index-1] = 0.5
      }
      that.data.color[index] = 1;
      that.setData({
        color:that.data.color
      })
      index++
    },1000)
  },
  clickLuck(){
    let that = this;
    //判断中奖的位置格式
    if(that.data.luckPosition == 'null' ||isNaN(that.data.luckPosition)||that.data.luckPosition>7){
      wx.showModal({
        title: '提示',
        content: '请填写正确值',
        showCancel:false
      })
      return
    }
    //设置按钮不可点击
    that.setData({
      btnconfirm: '/images/dianjichoujiangd.png',
      clickLuck:''
    })
    clearInterval(interval)
    let index = 0
    //循环每一项的透明度
    interval = setInterval(() => {
      if (index > 7) {
        index = 0;
        that.data.color[7] = 0.5;
      } else if (index != 0) {
        that.data.color[index - 1] = 0.5
      }
      that.data.color[index] = 1;
      that.setData({
        color: that.data.color
      })
      index++
    }, intime)

    let stoptime = 2000;
    setTimeout(()=>{
      that.stop(that.data.luckPosition)
    },stoptime)
  },
  stop(e){
    let that = this;
    clearInterval(interval)
    let current = -1;
    let color = that.data.color;
    for(let i = 0;i<color.length;i++){
      if(color[i]==1){
        current = i;
      }
    }
    let index = current + 1;
    that.stopLuck(e,index,intime,10)
  },
  stopLuck(e,index,time,splittime){
    let that = this;
    let color = that.data.color;
    setTimeout(()=>{
      //重置前一个位置
      if(index>7){
        index=0;
        color[7]=0.5;

      }else if(index !=0){
        color[index-1]=0.5
      }
      //当前位置为选中位置
      color[index]=1
      that.setData({
        color
      })
      //如果当前旋转时间过短，或者不等于中奖位置
      if(time<400||index!=e){
        //越来越慢
        splittime++;
        time += splittime;
        index++;
        that.stopLuck(e, index, time, splittime)
      }else{
        setTimeout(()=>{
          if(e == 1||e == 3||e == 5||e == 7){
            wx.showModal({
              title: '提示',
              content: '恭喜中奖',
              showCancel:false,
              success(res){
                //设置按钮可点击
                that.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                that.loadAnimation()
              }
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '很遗憾',
              showCancel:false,
              success(res) {
                //设置按钮可点击
                that.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                that.loadAnimation();
              }
            })
          }
        },1000)
      }
    },time)
  },
  input(e){
    console.log(e)
    let data = e.detail.value
    this.setData({
      luckPosition:data
    })
  }
})