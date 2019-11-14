let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},1);let _memoize;module.link("lodash/memoize",{default(v){_memoize=v}},2);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},3);let isRefObject,toRefObject;module.link('@stardust-ui/react-component-ref',{isRefObject(v){isRefObject=v},toRefObject(v){toRefObject=v}},4);





var ReferenceProxy =
/*#__PURE__*/
function () {
  function ReferenceProxy(refObject) {
    _classCallCheck(this, ReferenceProxy);

    this.ref = refObject;
  }

  _createClass(ReferenceProxy, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return _invoke(this.ref.current, 'getBoundingClientRect', {});
    }
  }, {
    key: "clientWidth",
    get: function get() {
      return this.getBoundingClientRect().width;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      return this.getBoundingClientRect().height;
    }
  }, {
    key: "parentNode",
    get: function get() {
      return this.ref.current ? this.ref.current.parentNode : undefined;
    }
  }]);

  return ReferenceProxy;
}();
/**
 * Popper.js does not support ref objects from `createRef()` as referenceElement. If we will pass
 * directly `ref`, `ref.current` will be `null` at the render process. We use memoize to keep the
 * same reference between renders.
 *
 * @see https://popper.js.org/popper-documentation.html#referenceObject
 */


var createReferenceProxy = _memoize(function (reference) {
  return new ReferenceProxy(isRefObject(reference) ? reference : toRefObject(reference));
});

module.exportDefault(createReferenceProxy);