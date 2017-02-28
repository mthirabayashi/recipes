import React from 'react';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.markVisited = this.markVisited.bind(this);
    this.state = {
      opened: false
    };
  }

  markVisited() {
    this.setState({opened: true});
  }

  render() {
    let style = 'not-visited';
    if (this.state.opened) {
      style = 'visited';
    }
    return (
      <a href={this.props.url} target="_blank" className={style + " result-item"} onClick={this.markVisited}>
        <h4 className='result-item-title'>{this.props.title}</h4>
        <div className='result-item-img-ing'>
          <img src={this.props.thumbnail} alt="no pic" height="42" width="42"/>
          <div className='result-ingredients'>
            <h4>Ingredients</h4>
            <p>{this.props.ingredients}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default ResultItem;
