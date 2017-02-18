import React from 'react';
import ResultItem from './result_item';

class Results extends React.Component {
  constructor(props) {
    super(props);
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
