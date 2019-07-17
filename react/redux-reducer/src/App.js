// import React from 'react';
import { connect,  } from 'react-redux'
import React, { Component } from 'react';
class Count extends Component {
  state = {  }
  handleIn = () => {
    // store.dispatch({ type: 'INCREMENT' })
  }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT' })
  }
  handleAddFilm = () => {
    // store.dispatch({ type: 'ADD_FILM',film: { name: '蜘蛛侠：英雄远征' } })
  }
  render() {
    console.log(this.props)
    const { count,films } = this.props
    return ( 
      <div>
        conut: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          // .map((film,i) => (<li></li>) )
          films.map((film,i) => {
            return (
              <li key={i}>{ film.name }</li>
            )
          })
        }
      </div>
     );
  }
}
const mapStateToProps = (state) => {
  return {
    conut: state.count,
    films: state.films
  }
}
const mapDispatchToPros = (dispatch) => {
  return {}
}
export default connect(mapStateToProps,mapDispatchToPros)(Count);
