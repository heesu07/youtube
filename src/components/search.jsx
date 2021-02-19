import React, { Component } from 'react';

class Search extends Component {

  searchRef = React.createRef();
  handleSearch = (event) =>{
    event.preventDefault();
    const name = this.searchRef.current.value;
    console.log(`Search : ${name}`);
  };
  render() {
    return (
      <nav className="searchBar">
        
        <form action="" 
          className="search-form" 
          onSubmit = {this.handleSearch}>
          <i className="searchBar-logo fas fa-search"></i>
          <input ref={this.searchRef} type="text" className="search-input"/>
          <button className="search-button">Search</button>
        </form>
      </nav>
    );
  }
}

export default Search;