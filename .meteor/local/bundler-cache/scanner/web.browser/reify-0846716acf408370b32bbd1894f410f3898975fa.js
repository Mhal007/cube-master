let _objectWithoutProperties;module.link("@babel/runtime/helpers/objectWithoutProperties",{default(v){_objectWithoutProperties=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _map;module.link("lodash/map",{default(v){_map=v}},9);let _get;module.link("lodash/get",{default(v){_get=v}},10);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},11);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},12);let React;module.link('react',{default(v){React=v}},13);let Component,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{AutoControlledComponent(v){Component=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},14);let Grid;module.link('../../collections/Grid/Grid',{default(v){Grid=v}},15);let GridColumn;module.link('../../collections/Grid/GridColumn',{default(v){GridColumn=v}},16);let Menu;module.link('../../collections/Menu/Menu',{default(v){Menu=v}},17);let TabPane;module.link('./TabPane',{default(v){TabPane=v}},18);


















/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */

var Tab =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (e, _ref) {
      var index = _ref.index;

      _invoke(_this.props, 'onTabChange', e, _objectSpread({}, _this.props, {
        activeIndex: index
      }));

      _this.trySetState({
        activeIndex: index
      });
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState() {
      return {
        activeIndex: 0
      };
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this$props = this.props,
          panes = _this$props.panes,
          renderActiveOnly = _this$props.renderActiveOnly;
      var activeIndex = this.state.activeIndex;
      if (renderActiveOnly) return _invoke(_get(panes, "[".concat(activeIndex, "]")), 'render', this.props);
      return _map(panes, function (_ref2, index) {
        var pane = _ref2.pane;
        return TabPane.create(pane, {
          overrideProps: {
            active: index === activeIndex
          }
        });
      });
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props2 = this.props,
          menu = _this$props2.menu,
          panes = _this$props2.panes,
          menuPosition = _this$props2.menuPosition;
      var activeIndex = this.state.activeIndex;

      if (menu.tabular === true && menuPosition === 'right') {
        menu.tabular = 'right';
      }

      return Menu.create(menu, {
        autoGenerateKey: false,
        overrideProps: {
          items: _map(panes, 'menuItem'),
          onItemClick: this.handleItemClick,
          activeIndex: activeIndex
        }
      });
    }
  }, {
    key: "renderVertical",
    value: function renderVertical(menu) {
      var _this$props3 = this.props,
          grid = _this$props3.grid,
          menuPosition = _this$props3.menuPosition;

      var paneWidth = grid.paneWidth,
          tabWidth = grid.tabWidth,
          gridProps = _objectWithoutProperties(grid, ["paneWidth", "tabWidth"]);

      var position = menuPosition || menu.props.tabular === 'right' && 'right' || 'left';
      return React.createElement(Grid, gridProps, position === 'left' && GridColumn.create({
        width: tabWidth,
        children: menu
      }, {
        autoGenerateKey: false
      }), GridColumn.create({
        width: paneWidth,
        children: this.renderItems(),
        stretched: true
      }, {
        autoGenerateKey: false
      }), position === 'right' && GridColumn.create({
        width: tabWidth,
        children: menu
      }, {
        autoGenerateKey: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var menu = this.renderMenu();
      var rest = getUnhandledProps(Tab, this.props);
      var ElementType = getElementType(Tab, this.props);

      if (menu.props.vertical) {
        return React.createElement(ElementType, rest, this.renderVertical(menu));
      }

      return React.createElement(ElementType, rest, menu.props.attached !== 'bottom' && menu, this.renderItems(), menu.props.attached === 'bottom' && menu);
    }
  }]);

  return Tab;
}(Component);

_defineProperty(Tab, "autoControlledProps", ['activeIndex']);

_defineProperty(Tab, "defaultProps", {
  grid: {
    paneWidth: 12,
    tabWidth: 4
  },
  menu: {
    attached: true,
    tabular: true
  },
  renderActiveOnly: true
});

_defineProperty(Tab, "Pane", TabPane);

_defineProperty(Tab, "handledProps", ["activeIndex", "as", "defaultActiveIndex", "grid", "menu", "menuPosition", "onTabChange", "panes", "renderActiveOnly"]);

Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The initial activeIndex. */
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active tab. */
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Shorthand props for the Menu.
   * tabular, if true, will derive final value from `menuPosition`, otherwise set 'left' or 'right' explicitly.
   */
  menu: PropTypes.object,

  /** Align vertical menu */
  menuPosition: PropTypes.oneOf(['left', 'right']),

  /** Shorthand props for the Grid. */
  grid: PropTypes.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: PropTypes.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * { menuItem: 'Home', render: () => <Tab.Pane /> }
   * or
   * { menuItem: 'Home', pane: 'Welcome' }
   */
  panes: PropTypes.arrayOf(PropTypes.shape({
    menuItem: customPropTypes.itemShorthand,
    pane: customPropTypes.itemShorthand,
    render: PropTypes.func
  })),

  /** A Tab can render only active pane. */
  renderActiveOnly: PropTypes.bool
} : {};
module.exportDefault(Tab);