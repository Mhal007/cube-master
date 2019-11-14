var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},0);var _createClass;module.link('babel-runtime/helpers/createClass',{default:function(v){_createClass=v}},1);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},2);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var ReactDOM;module.link('react-dom',{default:function(v){ReactDOM=v}},5);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},6);var cssAnimate,isCssAnimationSupported;module.link('css-animation',{default:function(v){cssAnimate=v},isCssAnimationSupported:function(v){isCssAnimationSupported=v}},7);var animUtil;module.link('./util/animate',{default:function(v){animUtil=v}},8);









var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (animUtil.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (animUtil.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (animUtil.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = ReactDOM.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = cssAnimate(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(React.Component);

AnimateChild.propTypes = {
  children: PropTypes.any,
  animation: PropTypes.any,
  transitionName: PropTypes.any
};
module.exportDefault(AnimateChild);