import React from 'react';

class RightArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this.props.onSlide);
  }
  render() {
    return (
      <div><a className="right-arrow" onClick={this.handleClick}>&rsaquo;</a></div>
    )
  }
}

export default RightArrow;
