"use strict";

exports.__esModule = true;
exports.default = useDebouncedCallback;
var _react = require("react");
var _useTimeout = _interopRequireDefault(require("./useTimeout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a debounced function that will invoke the input function after the
 * specified delay.
 *
 * @param fn a function that will be debounced
 * @param delay The milliseconds delay before invoking the function
 */
function useDebouncedCallback(fn, delay) {
  const timeout = (0, _useTimeout.default)();
  return (0, _react.useCallback)((...args) => {
    timeout.set(() => {
      fn(...args);
    }, delay);
  }, [fn, delay]);
}