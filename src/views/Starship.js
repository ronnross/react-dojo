import React from 'react';
import ShipDetails from './ShipDetails';

export default class Starship extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  showDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    const {ship} = this.props;
    return (
      <li>
        <p><a href="#" onClick={this.showDetails.bind(this)}>{ship.name}</a></p>
        {this.state.showDetails && <ShipDetails ship={ship} addToCart={this.props.addToCart} />}
      </li>
    );
  }
}

Starship.propTypes = {
  ship: React.PropTypes.object,
  addToCart: React.PropTypes.func
};
