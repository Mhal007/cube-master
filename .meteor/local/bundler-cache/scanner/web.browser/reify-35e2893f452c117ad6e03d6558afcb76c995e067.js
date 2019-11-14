module.export({default:()=>NodeRegistry});let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},1);


var NodeRegistry = function NodeRegistry() {
  var _this = this;

  _classCallCheck(this, NodeRegistry);

  _defineProperty(this, "add", function (nodeRef, component) {
    if (_this.nodes.has(nodeRef)) {
      var set = _this.nodes.get(nodeRef);

      set.add(component);
      return;
    }

    _this.nodes.set(nodeRef, new Set([component]));
  });

  _defineProperty(this, "del", function (nodeRef, component) {
    if (!_this.nodes.has(nodeRef)) return;

    var set = _this.nodes.get(nodeRef);

    if (set.size === 1) {
      _this.nodes["delete"](nodeRef);

      return;
    }

    set["delete"](component);
  });

  _defineProperty(this, "emit", function (nodeRef, callback) {
    callback(nodeRef, _this.nodes.get(nodeRef));
  });

  this.nodes = new Map();
};

