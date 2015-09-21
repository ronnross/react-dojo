import React from 'react';
import ShipDetails from './ShipDetails';

class Starship extends React.Component {
  constructor(){
    super();
    this.state = {
      showDetails: false
    };
  }

  render(){
    let {ship} = this.props;
    return (
      <li>
        <p><a href="#" onClick={this.showDetails.bind(this)}>{ship.name}</a></p>
        {this.state.showDetails && <ShipDetails ship={ship} addToCart={this.props.addToCart} />}
       </li>
    );
  }

  showDetails() {
    this.setState({showDetails: !this.state.showDetails});
    console.log("showDetails: " + this.state.showDetails);
  }

}

export default Starship;
