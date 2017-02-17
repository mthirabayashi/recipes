import React from 'react';
import Header from './header';
import Search from './search';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <Search/>
      </div>
    );
  }
}

export default Main;
