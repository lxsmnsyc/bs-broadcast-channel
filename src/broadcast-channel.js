'use strict';

var bc = require('broadcast-channel');


const g =
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window :
  typeof global !== "undefined" ? global :
  /* otherwise */ undefined

if (g) {
  if (typeof g.BroadcastChannel === "undefined") {
    g.BroadcastChannel = bc.BroadcastChannel
  }
}

exports.BroadcastChannel = BroadcastChannel;