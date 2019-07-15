import React, { Component } from 'react'
import Header from './Header.jsx'
import Search from './Search.jsx'
import Result from './Result.jsx'
export default class Main extends Component {
    constructor(){
        super();
        this.state={
            beers:[],
            loading:true,

        }
    }
    componentDidMount(){
        const params = this.props.match.params||{};
        const searchTerm = params.searchTerm || undefined;
        this.loadBeers(searchTerm);
    }
    loadBeers(searchTerm = 'hops'){
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
        })
    }
    render() {
        return (
            <div className='warpper'>
                <Header siteName='Beer me!'/>
                <Search/>
                <Result beers={this.state.beers} loading={this.state.loading}/>
            </div>
        )
    }
}
