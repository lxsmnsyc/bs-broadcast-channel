'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactExamples = require("./App.bs.js");
var BroadcastChannel$BsBroadcastChannel = require("bs-broadcast-channel/src/BroadcastChannel.bs.js");

var channel = BroadcastChannel$BsBroadcastChannel.make("My App");

ReactDom.render(React.createElement(App$ReasonReactExamples.make, {
          channel: channel
        }), document.body);

exports.channel = channel;
/* channel Not a pure module */
