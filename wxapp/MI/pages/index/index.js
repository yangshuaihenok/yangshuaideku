//index.js
Page({
  data: {
    imgUrls: [
      'https://i1.mifile.cn/a4/xmad_15586260230135_fKdxm.jpg',
      'https://i1.mifile.cn/a4/xmad_15553962519926_fcMZl.jpg',
      'https://i1.mifile.cn/a4/xmad_15410599445473_Ivjsb.jpg'
    ],
    lists:[
      { src: '/images/shouji.png', name:'手机', url:''},
      { src: '/images/dianshi.png', name:'电视', url:''},
      { src: '/images/diannao.png', name:'电脑', url:''},
      { src: '/images/zhineng.png', name:'智能', url:''},
      { src: '/images/shengtailian.png', name:'生态链', url:''},
      { src: '/images/xinpin.png', name:'新品', url:'/'},
      { src: '/images/zhongchou.png', name:'小米众筹', url:'/'},
      { src: '/images/huanxin.png', name:'以旧换新', url:'/'},
      { src: '/images/pintuan.png', name:'一分拼团', url:'/'},
      { src: '/images/zhenxuan.png', name:'每日甄选', url:'/'},
    ],
    indicatorDots: true,//显示指示点
    autoplay: true,//自动切换
    circular:true,//衔接滑动
    interval: 5000,//切换时间
    duration: 1000 //动画滑动时间
  }
})