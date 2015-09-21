var util = require('util');
import React        from 'react/addons';
import test from 'tape';
import Starship from './Starship';

const TestUtils = React.addons.TestUtils;
const shallowRenderer = TestUtils.createRenderer();

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

shallowRenderer.render(<Starship ship={shipProps} />);
const renderTree = shallowRenderer.getRenderOutput();

//console.log(util.inspect(component.props.children[0].props.children.props.children, false, null));

test('Component should render as div', (t) => {
  t.plan(1);
  t.equal(renderTree.type, "li");
});

test('Component props are rendered', (t) => {
  t.plan(1);
  t.equal(renderTree.props.children[0].props.children.props.children, "Sentinel-class landing craft");
});

// function shallowRender(component) {
//   const renderer = TestUtils.createRenderer();
//
//   renderer.render(component);
//   return renderer.getRenderOutput();
// }
//
// function renderWithProps(props = {}) {
//   return TestUtils.renderIntoDocument(<Starship {...props} />);
// }
//
// function shallowRenderWithProps(props = {}) {
//   return shallowRender(<App {...props} />);
// }


// let component = shallowRenderWithProps();
// let rendered = renderWithProps();

test('(Meta) Should have a test that works', function(t) {
  t.plan(1);

  t.equal(true, true);
});

// test('Should render as a <div>', function(t) {
//   t.plan(1);

//   t.equal(component.type, 'div');
// });

// test('Should include an <h1> with welcome text', function(t) {
//   t.plan(1);

//   const h1 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h1');

//   t.equal(h1.textContent, 'Welcome to the React Redux Starter Kit');
// });

// test('Should render an <h2> that includes Sample Counter Text', function(t) {
//   t.plan(1);

//   const h2 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h2');

//   t.equal(h2.textContent, 'Sample Counter: ');
// });

// test('Should render props.counter at the end of the sample counter <h2>', function(t) {
//   t.plan(1);

//   const h2 = TestUtils.findRenderedDOMComponentWithTag(
//     renderWithProps({ counter : 5 }), 'h2'
//   );

//   t.equal(h2.textContent, 'Sample Counter: 5')
// });


// test('Should render an "Increment" button', function(t) {
//   t.plan(1);

//   const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');

//   t.equal(btn.textContent, 'Increment');
// });

// test('Should call props.dispatch when "Increment" is clicked', function(t) {
//   t.plan(2);

//     const dispatch = sinon.spy();
//     const btn = TestUtils.findRenderedDOMComponentWithTag(
//       renderWithProps({ dispatch }), 'button'
//     );

//     t.equal(dispatch.callCount, 0);
//     TestUtils.Simulate.click(btn);
//     t.equal(dispatch.callCount, 1);
// });

// test('Should dispatch an action with type "COUNTER_INCREMENT" when "Increment" button is clicked.', function(t) {
//   t.plan(4);

//   const dispatch = sinon.spy();
//   const btn = TestUtils.findRenderedDOMComponentWithTag(
//     renderWithProps({ dispatch }), 'button'
//   );

//   t.equal(dispatch.callCount, 0);
//   TestUtils.Simulate.click(btn);

//   t.notEqual(dispatch.firstCall.args[0], null);
//   t.equal(typeof dispatch.firstCall.args[0], 'object');
//   t.equal(dispatch.firstCall.args[0].type, 'OUNTER_INCREMENT');
// });
