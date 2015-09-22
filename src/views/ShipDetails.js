import React from 'react';

export default class ShipDetails extends React.Component {
  addToCart() {
    this.props.addToCart(this.props.ship);
  }

  render() {
    const {ship} = this.props;

    return (
      <div>
        <p>{ship.name}</p>
        <p>{ship.crew}</p>
        <button onClick={this.addToCart.bind(this)}>Add to Cart</button>
      </div>
    );
  }
}

ShipDetails.propTypes = {
  ship: React.PropTypes.object,
  addToCart: React.PropTypes.func
};
