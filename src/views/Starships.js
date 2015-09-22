import React from 'react';
import Starship from './Starship';

export default class Starships extends React.Component {

  render() {
    const starships = this.props.ships.map(ship => {
      return <Starship key={ship.url} ship={ship} addToCart={this.props.addToCart}/>;
    });

    return (
      <div>
        <h1>hello</h1>
        <ul>
          {starships}
        </ul>
      </div>
    );
  }
}

Starships.propTypes = {
  ships: React.PropTypes.array,
  addToCart: React.PropTypes.func
};
