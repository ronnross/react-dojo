import React from 'react';
import Starship from './Starship';

class Starships extends React.Component {

  render() {
    let starships = this.props.ships.map(ship => {
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

export default Starships;
