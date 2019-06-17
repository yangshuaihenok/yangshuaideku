//index.js
Page({
  data: {
    imgUrls: [
      'https://i1.mifile.cn/a4/xmad_15586260230135_fKdxm.jpg',
      'https://i1.mifile.cn/a4/xmad_15553962519926_fcMZl.jpg',
      'https://i1.mifile.cn/a4/xmad_15410599445473_Ivjsb.jpg'
    ],
    indicatorDots: true,//显示指示点
    autoplay: true,//自动切换
    circular:true,//衔接滑动
    interval: 3000,//切换时间
    duration: 1000 //动画滑动时间
  }
})