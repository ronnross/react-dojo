import React from 'react';

class ShipDetails extends React.Component {

  render(){
    let {ship, addToCart} = this.props;
    return (
        <div>
          <p>{ship.name}</p>
          <p>{ship.crew}</p>
          <button onClick={this.addToCart.bind(this)}>Add to Cart</button>
        </div>
    )
  }

  addToCart() {
    this.props.addToCart(this.props.ship);
  }
}

export default ShipDetails;