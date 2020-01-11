'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function App(Props) {
  var channel = Props.channel;
  var match = React.useReducer((function (state, action) {
          console.log(state);
          console.log(action);
          return /* :: */[
                  action[0],
                  state
                ];
        }), /* [] */0);
  var dispatch = match[1];
  var current = React.useRef("");
  React.useEffect((function () {
          var callback = function (data) {
            console.log(data);
            var value = data.data;
            return Curry._1(dispatch, /* Add */[value]);
          };
          channel.addEventListener("message", callback);
          return (function (param) {
                    channel.removeEventListener("message", callback);
                    return /* () */0;
                  });
        }), /* array */[channel]);
  var submit = React.useCallback((function (param) {
          var value = current.current;
          channel.postMessage(value);
          console.log(value);
          return Curry._1(dispatch, /* Add */[value]);
        }), ([]));
  var onChange = React.useCallback((function ($$event) {
          var value = $$event.target.value;
          console.log(value);
          current.current = value;
          return /* () */0;
        }), ([]));
  return React.createElement("div", undefined, React.createElement("input", {
                  type: "text",
                  onChange: onChange
                }), React.createElement("button", {
                  type: "button",
                  onClick: submit
                }, "Send"), React.createElement("ul", undefined, $$Array.of_list(List.map((function (value) {
                            return React.createElement("li", undefined, value);
                          }), match[0]))));
}

var make = App;

exports.make = make;
/* react Not a pure module */
