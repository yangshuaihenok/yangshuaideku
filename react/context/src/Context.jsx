// import React, { Component } from 'react'
// import propTypes from 'prop-types'

// export default class Context extends Component {
//     state = {
//         theme: 'red'
//     }
//     // 后代组件直接拿信息
//     getChildContext() {
//         return {
//             theme: this.state.theme
//         }
//     }
//     // 1
//     handleToggleTheme = (e) => {
//         const theme = e.target.dataset.theme;
//         this.setState({
//             theme
//         })
//     }
//     // 2

//     // 3
//     // handleToggleTheme=(theme)=>{
//     //     this.setState({
//     //         theme
//     //     })
//     // }
//     render() {
//         const msg = ['str1', 'str2', 'str3'];
//         return (
//             <div>
//                 {
//                     msg.map((item, i) => {
//                         return (
//                             <div>
//                                 <Message key={i} text={item} />
//                             </div>
//                         )
//                     });   
//                 }
//                 <button onClick={ ()=>{this.handleToggleTheme} } data-theme="purple">purple</button>
//                 <button onClick={ ()=>{this.handleToggleTheme} } data-theme="yellow">yellow</button>
//             <div>     
//         )
//     }
// }
// Context.childContextTypes = {
//     theme:propTypes.string
     
// class Message extends Component{
//     render(){  
//         cons t {text} = this.props;
//         return(  
//             <l i>
//                 { text }
//                 <ybuton />
//             </li>
//         )
//     }
// }
// class Mybutton extends Component{
//     static contextTypes = { 
//         theme: propTypes.string;
//     }
//     render(){
//         cons t { theme } = this.context
//         return (
//             <button style={{color:theme}}>
//                 delete    
//             </button>
//         )
//     }
// }