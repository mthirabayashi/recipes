import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input placeholder='Recipe Name'></input>
        <input placeholder='Ingredients'></input>
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Search;
