var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},0);var _createClass;module.link('babel-runtime/helpers/createClass',{default:function(v){_createClass=v}},1);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},2);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},3);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},4);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},5);var ReactDOM;module.link('react-dom',{default:function(v){ReactDOM=v}},6);var alignElement,alignPoint;module.link('dom-align',{alignElement:function(v){alignElement=v},alignPoint:function(v){alignPoint=v}},7);var addEventListener;module.link('rc-util/es/Dom/addEventListener',{default:function(v){addEventListener=v}},8);var isWindow,buffer,isSamePoint,isSimilarValue,restoreFocus;module.link('./util',{isWindow:function(v){isWindow=v},buffer:function(v){buffer=v},isSamePoint:function(v){isSamePoint=v},isSimilarValue:function(v){isSimilarValue=v},restoreFocus:function(v){restoreFocus=v}},9);











function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  _inherits(Align, _Component);

  function Align() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = ReactDOM.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var activeElement = document.activeElement;

        if (element) {
          result = alignElement(source, element, align);
        } else if (point) {
          result = alignPoint(source, point, align);
        }

        restoreFocus(activeElement, source);

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Align, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;
      // if parent ref not attached .... use document.getElementById
      this.forceAlign();
      if (!props.disabled && props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var reAlign = false;
      var props = this.props;

      if (!props.disabled) {
        var source = ReactDOM.findDOMNode(this);
        var sourceRect = source ? source.getBoundingClientRect() : null;

        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);

          if (isWindow(lastElement) && isWindow(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement || // Element change
          lastElement && !currentElement && currentPoint || // Change from element to point
          lastPoint && currentPoint && currentElement || // Change from point to element
          currentPoint && !isSamePoint(lastPoint, currentPoint)) {
            reAlign = true;
          }

          // If source element size changed
          var preRect = this.sourceRect || {};
          if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
            reAlign = true;
          }
        }

        this.sourceRect = sourceRect;
      }

      if (reAlign) {
        this.forceAlign();
      }

      if (props.monitorWindowResize && !props.disabled) {
        this.startMonitorWindowResize();
      } else {
        this.stopMonitorWindowResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: 'startMonitorWindowResize',
    value: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
        this.resizeHandler = addEventListener(window, 'resize', this.bufferMonitor);
      }
    }
  }, {
    key: 'stopMonitorWindowResize',
    value: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          childrenProps = _props.childrenProps,
          children = _props.children;

      var child = React.Children.only(children);
      if (childrenProps) {
        var newProps = {};
        var propList = Object.keys(childrenProps);
        propList.forEach(function (prop) {
          newProps[prop] = _this2.props[childrenProps[prop]];
        });

        return React.cloneElement(child, newProps);
      }
      return child;
    }
  }]);

  return Align;
}(Component);

Align.propTypes = {
  childrenProps: PropTypes.object,
  align: PropTypes.object.isRequired,
  target: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    clientX: PropTypes.number,
    clientY: PropTypes.number,
    pageX: PropTypes.number,
    pageY: PropTypes.number
  })]),
  onAlign: PropTypes.func,
  monitorBufferTime: PropTypes.number,
  monitorWindowResize: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


module.exportDefault(Align);