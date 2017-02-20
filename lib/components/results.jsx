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

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.items.map((recipe, idx) => (
          <li key={`result${idx}`}>{recipe.title}</li>
        ))}
      </div>
    );
  }
}

export default Results;
