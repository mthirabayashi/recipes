import React from 'react';
import ResultItem from './result_item';
import $ from 'jquery';

class Results extends React.Component {
  constructor(props) {
    super(props);
    // this.updateResults = this.updateResults.bind(this);
    // this.state = {
    //   results: []
    // };
  }

  componentDidMount() {
    // window.$ = $;
    // console.log('results component mounted');
    // const success = function(data) {
    //   console.log(data);
    //   console.log(data.results);
    //   data.results.forEach(recipe => {
    //     console.log(recipe.title);
    //   });
    // };
    // const error = function(data) {
    //   console.log(data);
    // };
    //
    //  $.ajax({
    //   url: `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`,
    //   dataType: 'jsonp',
    //   jsonpCallback: 'callback',
    //   success: this.updateResults
    // });

  }

  // updateResults(data) {
  //   let results = this.state.results.concat(data.results);
  //   this.setState({
  //     results
  //   });
  // }

  // displayAllResults() {
  //   console.log(this.state.results);
  //   return(
  //     <div>
  //       {this.state.results.map((recipe, idx) => (
  //         <li key={`result${idx}`}>{recipe.title}</li>
  //       ))}
  //     </div>
  //   );
  // }

  displayItem(recipe, idx) {
    if (recipe.thumbnail.length > 0) {
      return (
        <div key={`result${idx}`}>
          <h4>{recipe.title}</h4>
          <img src={recipe.thumbnail} alt="no pic" height="42" width="42"/>
          <li>{recipe.ingredients}</li>
        </div>
      );
    } else {
      return (
        <div key={`result${idx}`}>
          <h4>{recipe.title}</h4>
          <li>{recipe.ingredients}</li>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.items.map((recipe, idx) => (
          this.displayItem(recipe, idx)
        ))}
      </div>
    );
  }
}

export default Results;
