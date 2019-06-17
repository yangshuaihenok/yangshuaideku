Page({
  data:{
    hasUserInfo:false,
    userInfo:{},
    todos:[],
    addShow:false,
    addText:'',
    focus:false,
    status:1
  },
  addTodo:function(){
    // 检测有没有输入
    if(!this.data.addText.trim()){
      wx.showToast({      //弹出提示框
        title:'请输入todo',
        duration:1000,
        icon:'none'
      })
      return;
    }
    // todos push
    //let todos = this.data.todos;
    // todo.push({
    //   title: this.data.addText,
    //   id: new Date().getTime(),
    //   stasus:0
    // })
    this.setData({
      todos: [{
        title: this.data.addText,
        id: new Date().getTime(),
        stasus: 0
      },
      ...this.data.todos],
      addShow:false,
      addText:'',
      focus:false

    })
    // 关闭表单
  },
  addTodoShow:function(){
    this.setData({
      addShow:true,
      focus:true
    })
  },
  addTodoHide:function(){
    this.setData({
      addShow: false,
      focus:false
    });
  },
  setInput:function(e){
    console.log(e);
    this.setData({
      addText:e.detail.value
    })
  },
  showStatus:function(e){
    var status = e.currentTarget.dataset.status;
    if(status === this.data.status){
      return;
    }
    this.setData({
      status
    })

  },
  getUserInfo:function(e){
    console.log(e);
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo: true
    })
  }
})