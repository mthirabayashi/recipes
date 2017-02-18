import React from 'react';
import Header from './header';
import Search from './search';
import Results from './results';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <Search/>
        <Results/>
      </div>
    );
  }
}

export default Main;
