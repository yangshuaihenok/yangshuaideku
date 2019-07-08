import React,{Component} from 'react';
import './App.css';
import List from './List'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
let genId = 1;
class App extends Component{
  
  state={
    lists:[
      {name:'cai',age:19,school:'美国',id:0},
      {name:'xu',age:25,school:'校队',id:1},
    ],
    commentList:[]
  }
  handleAddInfo=()=>{
    const lists = this.state.lists.slice(0);
    this.genId++
    lists.push({name:'xu',age:25,school:'校队',id:genId})
    this.setState({
      lists
    })
  }
  handleListDelete=(id)=>{
    console.log('父组件收到的',id)
    const lists = this.state.lists.slice(0);
    const index = lists.findIndex(list=>list.id === id)
    lists.splice(index,1)
    this.setState({
      lists
    })
  }
  handlePublish=(userName,commentContent)=>{
    const commentList = this.state.commentList.slice(0);
    commentList.push({
      userName,
      commentContent
    })
    this.setState({
      commentList
    })
  }
  render(){
    const {lists} = this.state;
    const {commentList} = this.state;
    return(
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list,i)=>{
            return (
              <List key={list.id} list={list} onDelete={this.handleListDelete}/>
            )
          })
        }
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}/>
        <CommentList commentList={commentList}/>
      </div>
      </>
    )
  }
}
export default App;
