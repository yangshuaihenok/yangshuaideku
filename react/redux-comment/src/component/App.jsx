import React, { Component } from 'react'

export default class App extends React.Component{
    componentDidMount(){
      const { addComment } = this.props;
      setTimeout(() => {
        addComment('username111','content111')
        addComment('username222','content222')
      }, 2000);
    }
    render() {
      const { commentList } = this.props;
      return (
        <div>
          {
            commentList.length === 0?'暂无评论': 
            <ul>
            {
               commentList.map((comment, i) => {
                return <li>
                  userName: {comment.userName}
                  content: {comment.content}
                </li>
              })
            }
            </ul>
          }
        </div>
      )
    }
  }
