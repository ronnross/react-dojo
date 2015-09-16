import React from 'react';
import axios from 'axios';
import './app.less';
import Starships from './Starships';
import Cart from './Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
    };
  }

  componentDidMount() {
    axios.get('http://swapi.co/api/starships')
      .then(res => {
        console.log(res.data);
        this.setState({products: res.data.results});
      });
  }
  addToCart(item) {
    let cartItems = this.state.cart;
    cartItems.push(item);
    this.setState({cart:cartItems});
  }
  render(){
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

React.render(<App />, document.getElementById('main'));
