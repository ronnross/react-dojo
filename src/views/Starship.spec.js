import React from 'react/addons';
import test from 'tape';
import Starship from './Starship';

const TestUtils = React.addons.TestUtils;
const Renderer  = TestUtils.createRenderer();

const shipProps = {
  name: "Sentinel-class landing craft",
  model:"Sentinel-class landing craft",
  manufacturer:"Sienar Fleet Systems, Cyngus Spaceworks",
  cost_in_credits:"240000",
  length:"38",
  max_atmosphering_speed:"1000",
  crew:"5",
  passengers:"75",
  cargo_capacity:"180000",
  consumables:"1 month",
  hyperdrive_rating:"1.0",
  MGLT:"70",
  starship_class:"landing craft",
  pilots:[],
  created:"2014-12-10T15:48:00.586000Z",
  edited:"2014-12-22T17:35:44.431407Z",
  url:"http://swapi.co/api/starships/5/"
};

Renderer.render(<Starship ship={shipProps} />);
const renderTree = Renderer.getRenderOutput();

test('Component should render as a li', (assert) => {
  const actual = renderTree.type;
  const expected = 'li';

  assert.equal(actual, expected, 'Expected renderTree.type to be an \'li\'');

  assert.end();
});

test('Component props are rendered', (assert) => {
  const actual = renderTree.props.children[0].props.children.props.children;
  const expected = 'Sentinel-class landing craft';

  assert.equal(actual, expected, 'Expected property to be Sentinel-class landing craft');

  assert.end();
});
