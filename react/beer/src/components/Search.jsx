import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    // console.log(this.props.history);
    this.searchRef = React.createRef();
  }
  // es6 class 
  render () {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" 
          ref={this.searchRef}
          placeholder="--------" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
  handleSubmit (e) {
    e.preventDefault();
    // console.log(this.searchRef);
    const search = this.searchRef.current.value;
    // console.log(search);
    // / => /search/:val
    // console.log(this.context.router);
    // this.context.router.history.push(`/search/${search}`)
    this.props.history.push(`/search/${search}`);
  }
}

export default withRouter(Search);
