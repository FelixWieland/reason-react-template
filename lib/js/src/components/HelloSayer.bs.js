'use strict';

var React = require("react");

function HelloSayer(Props) {
  var what = Props.what;
  return React.createElement("p", undefined, "Hello " + what);
}

var make = HelloSayer;

exports.make = make;
/* react Not a pure module */
