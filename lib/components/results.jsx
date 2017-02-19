import React from 'react';
import ResultItem from './result_item';
import axios from 'axios';
import $ from 'jquery';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    window.$ = $;
    console.log('results component mounted');
    // axios.get('https://api.github.com/users/' + 'mthirabayashi')
    //   .then(function(response){
    //     console.log(response.data); // ex.: { user: 'Your User'}
    //     console.log(response.status); // ex.: 200
    //   });
    // axios.get('http://www.shareagram.us/api/users/2')
    //   .then(function(response){
    //     console.log(response.data); // ex.: { user: 'Your User'}
    //     console.log(response.status); // ex.: 200
    //   });
      const success = function(data) {
        console.log(data);
      };
      const error = function(data) {
        console.log(data);
      };
      // const getRecipes = $.ajax({
      //   method: 'get',
      //   url: 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3',
      //   success
      // });
      // url: 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3',

      function logResults(json){
        console.log(json);
      }

       $.ajax({
        url: `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`,
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        success
      });

  }

  displayAllResults() {
    return(
      <div>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.displayAllResults()}
      </div>
    );
  }
}

export default Results;
