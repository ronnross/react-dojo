import React from 'react';

export default class Cart extends React.Component {

  render() {
    const {cart} = this.props;
    return (
      <div>
        <div>List of Ships</div>
        {cart.forEach((wholeShipAndShebang) => {
          <div>{wholeShipAndShebang.name}</div>;
        })}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: React.PropTypes.array
};
