# bs-broadcast-channel
> ReasonML bindings for Broadcast Channel

[![NPM](https://img.shields.io/npm/v/bs-broadcast-channel.svg)](https://www.npmjs.com/package/bs-broadcast-channel)

## Install

npm
```bash
npm i --save bs-broadcast-channel
```

yarn
```bash
yarn add bs-broadcast-channel
```

After installing, add it to the dependencies

bsconfig.json
```json
{
  "bs-dependencies": [
    "bs-abort-controller",
  ],
}

## Usage

```reason
open BsAbortController;

/**
 * Create an AbortController
 */
let controller = AbortController.make();

/**
 * Get the AbortSignal from the controller
 */
let signal = AbortController.signal(controller);

/**
 * Register a listener to the AbortSignal
 */
signal->AbortSignal.addEventListener("abort", () => {
  Js.log("Aborted");
});

signal->AbortSignal.addEventListener("abort", () => {
  Js.log("Aborted as well");
});

/**
 * Abort the controller
 */
AbortController.abort(controller);
```

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)