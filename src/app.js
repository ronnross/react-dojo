import React from 'react';
import axios from 'axios';
import './app.less';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      cart: []
    };
  }
  componentDidMount(){
    axios.get('http://swapi.co/api/starships')
    .then(res => {
      console.log(res.data);
      this.setState({products: res.data.results});
    });
  }
  render(){
    return (
      <div className="container">
        <main>
          {this.state.products}
        </main>
      </div>
    );
  }

}

React.render(<App />, document.getElementById("main"));
