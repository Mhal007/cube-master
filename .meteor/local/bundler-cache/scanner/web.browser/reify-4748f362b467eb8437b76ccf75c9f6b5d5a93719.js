let _typeof;module.link("@babel/runtime/helpers/typeof",{default(v){_typeof=v}},0);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},1);

var hasDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document !== null;
var hasWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window !== null && window.self === window; // eslint-disable-next-line no-confusing-arrow

var isBrowser = function isBrowser() {
  return !_isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
};

module.exportDefault(isBrowser);