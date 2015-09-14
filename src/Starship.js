import React from 'react';

class Starship extends React.Component {
  constructor(){
    super();
    this.state = {
      showDetails: false
    };
  }

  render(){
    let ship = this.props.ship;
    return (
      <li>
        <p><a href="#" onClick={this.showDetails.bind(this)}>{ship.name}</a></p>
        {this.state.showDetails && <ShipDetails ship={ship} />}
       </li>
    );
  }

  showDetails() {
    this.setState({showDetails: !this.state.showDetails});
    console.log("showDetails: " + this.state.showDetails);
  }
}

class ShipDetails extends React.Component {

  render(){
    let ship = this.props.ship;
    return (
      <div>
      <p>{ship.name}</p>
      <p>{ship.crew}</p>
      </div>
    )
  }
}
export default Starship;
