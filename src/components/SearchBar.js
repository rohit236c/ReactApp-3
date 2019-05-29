import React from 'react';


class SearchBar extends React.Component{
    //initialised  in constructor
    state = {term : ''}
    
    // a event handler...
    // onInputChange (event){
    //   console.log(event.target.value) 
    // }
    onFormSubmit=(event)=>{

        event.preventDefault();
        console.log(this.state.term)

    }
    
    
    render (){
        return (
            <div className="ui segment">
            <form  onSubmit={this.onFormSubmit}  className="ui form">
            <div className="field">
            <label>Image Search</label>
            <input 
            type ="text"
            placeholder="search" 
            onChange = {ev => this.setState({term : ev.target.value.toUpperCase()}) }
            value={ this.state.term } 
            />
            </div>
            </form>
            </div>
            ) 
        }
    }
    
    export default SearchBar ;
    