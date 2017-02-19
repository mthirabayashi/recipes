import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
    this.state = {
      ingredients: '',
      keywords: ''
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
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <input placeholder='Recipe Name' onChange={this.updateField('keywords')}></input>
        <input placeholder='Ingredients' onChange={this.updateField('ingredients')}></input>
        <button onClick={this.getRecipes}>Search</button>
      </form>
    );
  }
}

export default Search;
