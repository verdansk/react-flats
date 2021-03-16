import React from 'react';

class Flat extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(longitude, latitude) {
    const { selectedFlat } = this.props;
    selectedFlat(longitude, latitude);
  }

  render() {
    const {
      img, price, description, longitude, latitude
    } = this.props;

    return (
      <div
        className="card"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${img}")` }}
        onClick={() => this.handleClick(longitude, latitude)}
      >
        <div className="card-category">
          €
          { price }
          ,-
        </div>
        <div className="card-description">
          <h2>{ description }</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
