'use strict';

var React = require("react");
var HelloSayer$ReasonReactExamples = require("./components/HelloSayer.bs.js");

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(HelloSayer$ReasonReactExamples.make, {
                  what: "World"
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
