import React, { Component } from 'react';
class CommentInput extends Component {
  state = {  }
  handlePublish=()=>{
      const userName = this.refs.userName.value
      const commentContent = this.refs.commentContent.value
    
      console.log({userName,commentContent})
      const {onPublish}=this.props;
      onPublish(userName,commentContent)
  }
  render() { 
    return ( 
        <>
        <div>
            用户名：<input type="text" ref="userName"/>
            评论内容：<textarea name="" id="" cols="30" rows="10" ref="commentContent"></textarea>
        </div>
        <button onClick={this.handlePublish}>发布</button>
        </>
     );
  }
}
 
export default CommentInput;