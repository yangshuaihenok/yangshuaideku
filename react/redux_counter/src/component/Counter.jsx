import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    Clicked:{this.props.count}
                    times
                </p>
            </div>
        )
    }
}
// 1. map共享状态
// 2. 作为参数传给组件
const mapStateToProps = (state)=>{
    // connect找到这个参数，把state交给connect
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter)
