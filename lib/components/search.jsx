import React from 'react';
import Results from './results';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
    this.displayAllResults = this.displayAllResults.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.state = {
      ingredients: '',
      keywords: '',
      results: []
    };
  }

  updateField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  getRecipes(e) {
    e.preventDefault();
    console.log('searching for recipes');
    console.log(`ingredients: ${this.state.ingredients}`);
    console.log(`keywords: ${this.state.keywords}`);
    $.ajax({
      url:  `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`,
      dataType: 'jsonp',
      jsonpCallback: 'callback',
      success: this.updateResults
    });
  }

  updateResults(data) {
    let results = this.state.results.concat(data.results);
    this.setState({
      results
    });
  }

  displayAllResults() {
    console.log(this.state.results);
    return (
      <Results items={this.state.results}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input placeholder='Recipe Name' onChange={this.updateField('keywords')}></input>
          <input placeholder='Ingredients' onChange={this.updateField('ingredients')}></input>
          <button onClick={this.getRecipes}>Search</button>
        </form>
        {this.displayAllResults()}
      </div>
    );
  }
}

export default Search;
