import React from 'react';
import axios from 'axios';
import Starships from 'views/Starships';
import Cart from 'views/Cart';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    };
  }

  componentDidMount() {
    axios.get('http://swapi.co/api/starships')
      .then(res => {
        this.setState({products: res.data.results});
      });
  }
  addToCart(item) {
    const cartItems = this.state.cart;
    cartItems.push(item);
    this.setState({cart:cartItems});
  }
  render() {
    return (
      <div className="container">
        <div>
          <Starships ships={this.state.products} addToCart={this.addToCart.bind(this)}/>
        </div>
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
