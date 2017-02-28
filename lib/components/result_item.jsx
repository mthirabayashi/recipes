import React from 'react';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  render() {
    if (this.props.thumbnail.length > 0) {
      return (
        <div className='result-item'>
          <h4 className='result-item-title'>{this.props.title}</h4>
          <div className='result-item-img-ing'>
            <img src={this.props.thumbnail} alt="no pic" height="42" width="42"/>
            <div className='result-ingredients'>
              <h4>ingredients</h4>
              <p>{this.props.ingredients}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='result-item'>
          <h4>{this.props.title}</h4>
          <li>{this.props.ingredients}</li>
        </div>
      );
    }
  }
}

export default ResultItem;
