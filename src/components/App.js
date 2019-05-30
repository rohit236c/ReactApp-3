import React from 'react';
import axios from 'axios' ;
import SearchBar from './SearchBar'

class App extends  React.Component{
    //we can use async await also 
    onSearchSubmit = (term) =>{
       axios.get('https://api.unsplash.com/search/photos',{
           params : {query :term},
           headers :{
            Authorization: 'Client-ID 036cf51ed50ae1103f355c5274d043f6bf6dac7d4c89451a2e3b02a3a7d06144'
           }
       }).then((data)=>{
           console.log(data.data.results)
       })
    }

    render(){
    return (
        <div className="ui container" style ={{marginTop:'10px'}}>

            <SearchBar onSubmit = {this.onSearchSubmit} />
        </div>

    )
    }
}
export default App ;