'use strict';

var React = require("react");

function HelloWorld(Props) {
  return React.createElement("p", undefined, "Hello World");
}

var make = HelloWorld;

exports.make = make;
/* react Not a pure module */
