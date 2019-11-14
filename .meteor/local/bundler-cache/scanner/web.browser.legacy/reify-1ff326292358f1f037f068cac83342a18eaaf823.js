module.export({default:function(){return Dropdown}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},6);var _get2;module.link("@babel/runtime/helpers/get",{default:function(v){_get2=v}},7);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},8);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},9);var _compact;module.link("lodash/compact",{default:function(v){_compact=v}},10);var _map;module.link("lodash/map",{default:function(v){_map=v}},11);var _every;module.link("lodash/every",{default:function(v){_every=v}},12);var _without;module.link("lodash/without",{default:function(v){_without=v}},13);var _findIndex;module.link("lodash/findIndex",{default:function(v){_findIndex=v}},14);var _find;module.link("lodash/find",{default:function(v){_find=v}},15);var _reduce;module.link("lodash/reduce",{default:function(v){_reduce=v}},16);var _some;module.link("lodash/some",{default:function(v){_some=v}},17);var _escapeRegExp;module.link("lodash/escapeRegExp",{default:function(v){_escapeRegExp=v}},18);var _deburr;module.link("lodash/deburr",{default:function(v){_deburr=v}},19);var _isFunction;module.link("lodash/isFunction",{default:function(v){_isFunction=v}},20);var _filter;module.link("lodash/filter",{default:function(v){_filter=v}},21);var _pick;module.link("lodash/pick",{default:function(v){_pick=v}},22);var _dropRight;module.link("lodash/dropRight",{default:function(v){_dropRight=v}},23);var _isEmpty;module.link("lodash/isEmpty",{default:function(v){_isEmpty=v}},24);var _size;module.link("lodash/size",{default:function(v){_size=v}},25);var _difference;module.link("lodash/difference",{default:function(v){_difference=v}},26);var _union;module.link("lodash/union",{default:function(v){_union=v}},27);var _get;module.link("lodash/get",{default:function(v){_get=v}},28);var _includes;module.link("lodash/includes",{default:function(v){_includes=v}},29);var _noop;module.link("lodash/noop",{default:function(v){_noop=v}},30);var _isUndefined;module.link("lodash/isUndefined",{default:function(v){_isUndefined=v}},31);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},32);var _isEqual;module.link("lodash/isEqual",{default:function(v){_isEqual=v}},33);var _has;module.link("lodash/has",{default:function(v){_has=v}},34);var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},35);var EventStack;module.link('@semantic-ui-react/event-stack',{default:function(v){EventStack=v}},36);var Ref;module.link('@stardust-ui/react-component-ref',{Ref:function(v){Ref=v}},37);var cx;module.link('classnames',{default:function(v){cx=v}},38);var keyboardKey;module.link('keyboard-key',{default:function(v){keyboardKey=v}},39);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},40);var React,Children,cloneElement,createRef;module.link('react',{default:function(v){React=v},Children:function(v){Children=v},cloneElement:function(v){cloneElement=v},createRef:function(v){createRef=v}},41);var shallowEqual;module.link('shallowequal',{default:function(v){shallowEqual=v}},42);var Component,childrenUtils,customPropTypes,doesNodeContainClick,getElementType,getUnhandledProps,objectDiff,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{AutoControlledComponent:function(v){Component=v},childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},doesNodeContainClick:function(v){doesNodeContainClick=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},objectDiff:function(v){objectDiff=v},useKeyOnly:function(v){useKeyOnly=v},useKeyOrValueAndKey:function(v){useKeyOrValueAndKey=v}},43);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},44);var Label;module.link('../../elements/Label',{default:function(v){Label=v}},45);var DropdownDivider;module.link('./DropdownDivider',{default:function(v){DropdownDivider=v}},46);var DropdownItem;module.link('./DropdownItem',{default:function(v){DropdownItem=v}},47);var DropdownHeader;module.link('./DropdownHeader',{default:function(v){DropdownHeader=v}},48);var DropdownMenu;module.link('./DropdownMenu',{default:function(v){DropdownMenu=v}},49);var DropdownSearchInput;module.link('./DropdownSearchInput',{default:function(v){DropdownSearchInput=v}},50);



















































var getKeyOrValue = function getKeyOrValue(key, value) {
  return _isNil(key) ? value : key;
};
/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */


var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "searchRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "sizerRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "ref", createRef());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e, value) {
      _invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "closeOnChange", function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;
      var shouldClose = _isUndefined(closeOnChange) ? !multiple : closeOnChange;
      if (shouldClose) _this.close(e, _noop);
    });

    _defineProperty(_assertThisInitialized(_this), "closeOnEscape", function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey.getCode(e) !== keyboardKey.Escape) return;
      e.preventDefault();

      _this.close(e);
    });

    _defineProperty(_assertThisInitialized(_this), "moveSelectionOnKeyDown", function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;
      var moves = (_moves = {}, _defineProperty(_moves, keyboardKey.ArrowDown, 1), _defineProperty(_moves, keyboardKey.ArrowUp, -1), _moves);
      var move = moves[keyboardKey.getCode(e)];
      if (move === undefined) return;
      e.preventDefault();

      _this.moveSelectionBy(move);

      if (!multiple && selectOnNavigation) _this.makeSelectedItemActive(e);
    });

    _defineProperty(_assertThisInitialized(_this), "openOnSpace", function (e) {
      if (keyboardKey.getCode(e) !== keyboardKey.Spacebar) return;
      e.preventDefault();

      _this.open(e);
    });

    _defineProperty(_assertThisInitialized(_this), "openOnArrow", function (e) {
      var code = keyboardKey.getCode(e);
      if (!_includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return;
      if (_this.state.open) return;
      e.preventDefault();

      _this.open(e);
    });

    _defineProperty(_assertThisInitialized(_this), "makeSelectedItemActive", function (e) {
      var _this$state = _this.state,
          open = _this$state.open,
          value = _this$state.value;
      var multiple = _this.props.multiple;

      var item = _this.getSelectedItem();

      var selectedValue = _get(item, 'value'); // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed


      if (_isNil(selectedValue) || !open) return; // state value may be undefined

      var newValue = multiple ? _union(_this.state.value, [selectedValue]) : selectedValue;
      var valueHasChanged = multiple ? !!_difference(newValue, value).length : newValue !== value;

      if (valueHasChanged) {
        // notify the onChange prop that the user is trying to change value
        _this.setValue(newValue);

        _this.setSelectedIndex(newValue);

        _this.handleChange(e, newValue); // Heads up! This event handler should be called after `onChange`
        // Notify the onAddItem prop if this is a new value


        if (item['data-additional']) {
          _invoke(_this.props, 'onAddItem', e, _objectSpread({}, _this.props, {
            value: selectedValue
          }));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectItemOnEnter", function (e) {
      var search = _this.props.search;
      var shouldSelect = keyboardKey.getCode(e) === keyboardKey.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
      !search && keyboardKey.getCode(e) === keyboardKey.Spacebar;
      if (!shouldSelect) return;
      e.preventDefault();

      var optionSize = _size(_this.getMenuOptions());

      if (search && optionSize === 0) return;

      _this.makeSelectedItemActive(e);

      _this.closeOnChange(e);

      _this.clearSearchQuery();

      if (search) _invoke(_this.searchRef.current, 'focus');
    });

    _defineProperty(_assertThisInitialized(_this), "removeItemOnBackspace", function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state2 = _this.state,
          searchQuery = _this$state2.searchQuery,
          value = _this$state2.value;
      if (keyboardKey.getCode(e) !== keyboardKey.Backspace) return;
      if (searchQuery || !search || !multiple || _isEmpty(value)) return;
      e.preventDefault(); // remove most recent value

      var newValue = _dropRight(value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "closeOnDocumentClick", function (e) {
      if (!_this.props.closeOnBlur) return; // If event happened in the dropdown, ignore it

      if (_this.ref.current && doesNodeContainClick(_this.ref.current, e)) return;

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      _this.isMouseDown = true;

      _invoke(_this.props, 'onMouseDown', e, _this.props);

      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentMouseUp", function () {
      _this.isMouseDown = false;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state3 = _this.state,
          open = _this$state3.open,
          searchQuery = _this$state3.searchQuery;

      _invoke(_this.props, 'onClick', e, _this.props); // prevent closeOnDocumentClick()


      e.stopPropagation();
      if (!search) return _this.toggle(e);

      if (open) {
        _invoke(_this.searchRef.current, 'focus');

        return;
      }

      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);

        return;
      }

      _invoke(_this.searchRef.current, 'focus');
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconClick", function (e) {
      var clearable = _this.props.clearable;

      var hasValue = _this.hasValue();

      _invoke(_this.props, 'onClick', e, _this.props); // prevent handleClick()


      e.stopPropagation();

      if (clearable && hasValue) {
        _this.clearValue(e);
      } else {
        _this.toggle(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var currentValue = _this.state.value;
      var value = item.value; // prevent toggle() in handleClick()

      e.stopPropagation(); // prevent closeOnDocumentClick() if multiple or item is disabled

      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;
      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? _union(_this.state.value, [value]) : value;
      var valueHasChanged = multiple ? !!_difference(newValue, currentValue).length : newValue !== currentValue; // notify the onChange prop that the user is trying to change value

      if (valueHasChanged) {
        _this.setValue(newValue);

        _this.setSelectedIndex(value);

        _this.handleChange(e, newValue);
      }

      _this.clearSearchQuery(value);

      if (search) {
        _invoke(_this.searchRef.current, 'focus');
      } else {
        _invoke(_this.ref.current, 'focus');
      }

      _this.closeOnChange(e); // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value


      if (isAdditionItem) _invoke(_this.props, 'onAddItem', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      var focus = _this.state.focus;
      if (focus) return;

      _invoke(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = _get(e, 'currentTarget');

      if (currentTarget && currentTarget.contains(document.activeElement)) return;
      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          selectOnBlur = _this$props6.selectOnBlur; // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;

      _invoke(_this.props, 'onBlur', e, _this.props);

      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);

        if (closeOnBlur) _this.close();
      }

      _this.setState({
        focus: false
      });

      _this.clearSearchQuery();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e, _ref) {
      var value = _ref.value;
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = value;

      _invoke(_this.props, 'onSearchChange', e, _objectSpread({}, _this.props, {
        searchQuery: newQuery
      }));

      _this.trySetState({
        searchQuery: newQuery,
        selectedIndex: 0
      }); // open search dropdown on search query


      if (!open && newQuery.length >= minCharacters) {
        _this.open();

        return;
      } // close search dropdown if search query is too small


      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "getKeyAndValues", function (options) {
      return options ? options.map(function (option) {
        return _pick(option, ['key', 'value']);
      }) : options;
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuOptions", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var searchQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.searchQuery;
      var _this$props7 = _this.props,
          additionLabel = _this$props7.additionLabel,
          additionPosition = _this$props7.additionPosition,
          allowAdditions = _this$props7.allowAdditions,
          deburr = _this$props7.deburr,
          multiple = _this$props7.multiple,
          search = _this$props7.search;
      var filteredOptions = options; // filter out active options

      if (multiple) {
        filteredOptions = _filter(filteredOptions, function (opt) {
          return !_includes(value, opt.value);
        });
      } // filter by search query


      if (search && searchQuery) {
        if (_isFunction(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          // remove diacritics on search input and options, if deburr prop is set
          var strippedQuery = deburr ? _deburr(searchQuery) : searchQuery;
          var re = new RegExp(_escapeRegExp(strippedQuery), 'i');
          filteredOptions = _filter(filteredOptions, function (opt) {
            return re.test(deburr ? _deburr(opt.text) : opt.text);
          });
        }
      } // insert the "add" item


      if (allowAdditions && search && searchQuery && !_some(filteredOptions, {
        text: searchQuery
      })) {
        var additionLabelElement = React.isValidElement(additionLabel) ? React.cloneElement(additionLabel, {
          key: 'addition-label'
        }) : additionLabel || '';
        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, React.createElement("b", {
            key: "addition-query"
          }, searchQuery)],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedItem", function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return _get(options, "[".concat(selectedIndex, "]"));
    });

    _defineProperty(_assertThisInitialized(_this), "getEnabledIndices", function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return _reduce(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    });

    _defineProperty(_assertThisInitialized(_this), "getItemByValue", function (value) {
      var options = _this.props.options;
      return _find(options, {
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuItemIndexByValue", function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return _findIndex(options, ['value', value]);
    });

    _defineProperty(_assertThisInitialized(_this), "getDropdownAriaOptions", function () {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;
      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };

      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }

      return ariaOptions;
    });

    _defineProperty(_assertThisInitialized(_this), "clearSearchQuery", function (value) {
      var searchQuery = _this.state.searchQuery;
      if (searchQuery === undefined || searchQuery === '') return;

      _this.trySetState({
        searchQuery: ''
      });

      _this.setSelectedIndex(value, undefined, '');
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", function (value) {
      _this.trySetState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelectedIndex", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var searchQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.searchQuery;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps, searchQuery);

      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex; // update the selected index

      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0]; // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.

        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options); // regular selects can only have one active item
        // set the selected index to the currently active item


        newSelectedIndex = _includes(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({
        selectedIndex: newSelectedIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLabelClick", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({
        selectedLabel: labelProps.value
      });

      _invoke(_this.props, 'onLabelClick', e, labelProps);
    });

    _defineProperty(_assertThisInitialized(_this), "handleLabelRemove", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = _without(value, labelProps.value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "moveSelectionBy", function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;

      var options = _this.getMenuOptions(); // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed


      if (options === undefined || _every(options, 'disabled')) return;
      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = startIndex + offset; // if 'wrapSelection' is set to false and selection is after last or before first, it just does not change

      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        _this.moveSelectionBy(offset, nextIndex);

        return;
      }

      _this.setState({
        selectedIndex: nextIndex
      });

      _this.scrollSelectedItemIntoView();
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconOverrides", function (predefinedProps) {
      var clearable = _this.props.clearable;
      var classes = cx(clearable && _this.hasValue() && 'clear', predefinedProps.className);
      return {
        className: classes,
        onClick: function onClick(e) {
          _invoke(predefinedProps, 'onClick', e, predefinedProps);

          _this.handleIconClick(e);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "clearValue", function (e) {
      var multiple = _this.props.multiple;
      var newValue = multiple ? [] : '';

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "computeSearchInputTabIndex", function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          tabIndex = _this$props9.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    });

    _defineProperty(_assertThisInitialized(_this), "computeSearchInputWidth", function () {
      var searchQuery = _this.state.searchQuery;

      if (_this.sizerRef.current && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it
        _this.sizerRef.current.style.display = 'inline';
        _this.sizerRef.current.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.current.getBoundingClientRect().width);

        _this.sizerRef.current.style.removeProperty('display');

        return searchWidth;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "computeTabIndex", function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search,
          tabIndex = _this$props10.tabIndex; // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return _isNil(tabIndex) ? 0 : tabIndex;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchInputOverrides", function (predefinedProps) {
      return {
        onChange: function onChange(e, inputProps) {
          _invoke(predefinedProps, 'onChange', e, inputProps);

          _this.handleSearchChange(e, inputProps);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "hasValue", function () {
      var multiple = _this.props.multiple;
      var value = _this.state.value;
      return multiple ? !_isEmpty(value) : !_isNil(value) && value !== '';
    });

    _defineProperty(_assertThisInitialized(_this), "scrollSelectedItemIntoView", function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        // eslint-disable-next-line no-mixed-operators
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setOpenDirection", function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;

      var dropdownRect = _this.ref.current.getBoundingClientRect();

      var menuHeight = menu.clientHeight;
      var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
      var spaceAtTheTop = dropdownRect.top - menuHeight;
      var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom; // set state only if there's a relevant difference

      if (!upward !== !_this.state.upward) {
        _this.trySetState({
          upward: upward
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (e) {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          open = _this$props11.open,
          search = _this$props11.search;
      if (disabled) return;
      if (search) _invoke(_this.searchRef.current, 'focus');

      _invoke(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });

      _this.scrollSelectedItemIntoView();
    });

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.handleClose;
      var open = _this.state.open;

      if (open) {
        _invoke(_this.props, 'onClose', e, _this.props);

        _this.trySetState({
          open: false
        }, callback);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var hasSearchFocus = document.activeElement === _this.searchRef.current; // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.

      if (!hasSearchFocus && _this.ref.current) {
        _this.ref.current.blur();
      }

      var hasDropdownFocus = document.activeElement === _this.ref.current;
      var hasFocus = hasSearchFocus || hasDropdownFocus; // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692

      _this.setState({
        focus: hasFocus
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    });

    _defineProperty(_assertThisInitialized(_this), "renderText", function () {
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          placeholder = _this$props12.placeholder,
          search = _this$props12.search,
          text = _this$props12.text;
      var _this$state4 = _this.state,
          searchQuery = _this$state4.searchQuery,
          value = _this$state4.value,
          open = _this$state4.open;

      var hasValue = _this.hasValue();

      var classes = cx(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;

      if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = _get(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = _get(_this.getItemByValue(value), 'text');
      }

      return React.createElement("div", {
        className: classes,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": true
      }, _text);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearchInput", function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          searchInput = _this$props13.searchInput;
      var searchQuery = _this.state.searchQuery;
      return search && React.createElement(Ref, {
        innerRef: _this.searchRef
      }, DropdownSearchInput.create(searchInput, {
        defaultProps: {
          style: {
            width: _this.computeSearchInputWidth()
          },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        },
        overrideProps: _this.handleSearchInputOverrides
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearchSizer", function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;
      return search && multiple && React.createElement("span", {
        className: "sizer",
        ref: _this.sizerRef
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderLabels", function () {
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state5 = _this.state,
          selectedLabel = _this$state5.selectedLabel,
          value = _this$state5.value;

      if (!multiple || _isEmpty(value)) {
        return;
      }

      var selectedItems = _map(value, _this.getItemByValue);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return _map(_compact(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };
        return Label.create(renderLabel(item, index, defaultProps), {
          defaultProps: defaultProps
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var _this$props16 = _this.props,
          lazyLoad = _this$props16.lazyLoad,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state6 = _this.state,
          open = _this$state6.open,
          selectedIndex = _this$state6.selectedIndex,
          value = _this$state6.value; // lazy load, only render options when open

      if (lazyLoad && !open) return null;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && _isEmpty(options)) {
        return React.createElement("div", {
          className: "message"
        }, noResultsMessage);
      }

      var isActive = multiple ? function (optValue) {
        return _includes(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };
      return _map(options, function (opt, i) {
        return DropdownItem.create(_objectSpread({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: _objectSpread({}, opt.style, {
            pointerEvents: 'all'
          })
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenu", function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          direction = _this$props17.direction,
          header = _this$props17.header;
      var open = _this.state.open;

      var ariaOptions = _this.getDropdownMenuAriaOptions(); // single menu child


      if (!childrenUtils.isNil(children)) {
        var menuChild = Children.only(children);
        var className = cx(direction, useKeyOnly(open, 'visible'), menuChild.props.className);
        return cloneElement(menuChild, _objectSpread({
          className: className
        }, ariaOptions));
      }

      return React.createElement(DropdownMenu, _extends({}, ariaOptions, {
        direction: direction,
        open: open
      }), DropdownHeader.create(header, {
        autoGenerateKey: false
      }), _this.renderOptions());
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState() {
      return {
        focus: false,
        searchQuery: ''
      };
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$state7 = this.state,
          open = _this$state7.open,
          value = _this$state7.value;
      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) {
        this.open();
      }
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      _get2(_getPrototypeOf(Dropdown.prototype), "UNSAFE_componentWillReceiveProps", this).call(this, nextProps);

      /* eslint-disable no-console */
      if (process.env.NODE_ENV !== 'production') {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);

        var hasValue = _has(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + " Received type: `".concat(Object.prototype.toString.call(nextProps.value), "`."));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */


      if (!shallowEqual(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      } // The selected index is only dependent on option keys/values.
      // We only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000


      if (!_isEqual(this.getKeyAndValues(nextProps.options), this.getKeyAndValues(this.props.options))) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      var _this$props18 = this.props,
          closeOnBlur = _this$props18.closeOnBlur,
          minCharacters = _this$props18.minCharacters,
          openOnFocus = _this$props18.openOnFocus,
          search = _this$props18.search; // focused / blurred

      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var openable = !search || search && minCharacters === 1 && !this.state.open;
          if (openOnFocus && openable) this.open();
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }
      } // opened / closed


      if (!prevState.open && this.state.open) {
        this.setOpenDirection();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {}
    } // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------
    // onChange needs to receive a value
    // can't rely on props.value if we are controlled

  }, {
    key: "getDropdownMenuAriaOptions",
    value: function getDropdownMenuAriaOptions() {
      var _this$props19 = this.props,
          search = _this$props19.search,
          multiple = _this$props19.multiple;
      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }

      return ariaOptions;
    } // ----------------------------------------
    // Setters
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var _this$props20 = this.props,
          basic = _this$props20.basic,
          button = _this$props20.button,
          className = _this$props20.className,
          compact = _this$props20.compact,
          disabled = _this$props20.disabled,
          error = _this$props20.error,
          fluid = _this$props20.fluid,
          floating = _this$props20.floating,
          icon = _this$props20.icon,
          inline = _this$props20.inline,
          item = _this$props20.item,
          labeled = _this$props20.labeled,
          loading = _this$props20.loading,
          multiple = _this$props20.multiple,
          pointing = _this$props20.pointing,
          search = _this$props20.search,
          selection = _this$props20.selection,
          scrolling = _this$props20.scrolling,
          simple = _this$props20.simple,
          trigger = _this$props20.trigger;
      var _this$state8 = this.state,
          focus = _this$state8.focus,
          open = _this$state8.open,
          upward = _this$state8.upward; // Classes

      var classes = cx('ui', useKeyOnly(open, 'active visible'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(loading, 'loading'), useKeyOnly(basic, 'basic'), useKeyOnly(button, 'button'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(floating, 'floating'), useKeyOnly(inline, 'inline'), // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      useKeyOnly(labeled, 'labeled'), useKeyOnly(item, 'item'), useKeyOnly(multiple, 'multiple'), useKeyOnly(search, 'search'), useKeyOnly(selection, 'selection'), useKeyOnly(simple, 'simple'), useKeyOnly(scrolling, 'scrolling'), useKeyOnly(upward, 'upward'), useKeyOrValueAndKey(pointing, 'pointing'), 'dropdown', className);
      var rest = getUnhandledProps(Dropdown, this.props);
      var ElementType = getElementType(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
      return React.createElement(Ref, {
        innerRef: this.ref
      }, React.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        tabIndex: this.computeTabIndex()
      }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), Icon.create(icon, {
        overrideProps: this.handleIconOverrides,
        autoGenerateKey: false
      }), this.renderMenu(), open && React.createElement(EventStack, {
        name: "keydown",
        on: this.closeOnEscape
      }), open && React.createElement(EventStack, {
        name: "keydown",
        on: this.moveSelectionOnKeyDown
      }), open && React.createElement(EventStack, {
        name: "click",
        on: this.closeOnDocumentClick
      }), open && React.createElement(EventStack, {
        name: "keydown",
        on: this.selectItemOnEnter
      }), focus && React.createElement(EventStack, {
        name: "keydown",
        on: this.removeItemOnBackspace
      }), focus && !open && React.createElement(EventStack, {
        name: "keydown",
        on: this.openOnArrow
      }), focus && !open && React.createElement(EventStack, {
        name: "keydown",
        on: this.openOnSpace
      })));
    }
  }]);

  return Dropdown;
}(Component);

_defineProperty(Dropdown, "defaultProps", {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  closeOnEscape: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref2) {
    var text = _ref2.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
});

_defineProperty(Dropdown, "autoControlledProps", ['open', 'searchQuery', 'selectedLabel', 'value', 'upward']);

_defineProperty(Dropdown, "Divider", DropdownDivider);

_defineProperty(Dropdown, "Header", DropdownHeader);

_defineProperty(Dropdown, "Item", DropdownItem);

_defineProperty(Dropdown, "Menu", DropdownMenu);

_defineProperty(Dropdown, "SearchInput", DropdownSearchInput);

_defineProperty(Dropdown, "handledProps", ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"]);


Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Label prefixed to an option added by a user. */
  additionLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: customPropTypes.every([customPropTypes.demand(['options', 'selection', 'search']), PropTypes.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: PropTypes.bool,

  /** Format the Dropdown to appear as a button. */
  button: PropTypes.bool,

  /** Primary content. */
  children: customPropTypes.every([customPropTypes.disallow(['options', 'selection']), customPropTypes.givenProps({
    children: PropTypes.any.isRequired
  }, PropTypes.element.isRequired)]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: PropTypes.bool,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: PropTypes.bool,

  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: PropTypes.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: PropTypes.bool,

  /** A compact dropdown has no minimum width. */
  compact: PropTypes.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: PropTypes.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: customPropTypes.every([customPropTypes.demand(['multiple']), PropTypes.oneOfType([PropTypes.number, PropTypes.string])]),

  /** Initial value of upward. */
  defaultUpward: PropTypes.bool,

  /** Initial value or value array if multiple. */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))]),

  /** A dropdown menu can open to the left or to the right. */
  direction: PropTypes.oneOf(['left', 'right']),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: PropTypes.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: PropTypes.bool,

  /** A dropdown menu can contain floated content. */
  floating: PropTypes.bool,

  /** A dropdown can take the full width of its parent */
  fluid: PropTypes.bool,

  /** A dropdown menu can contain a header. */
  header: PropTypes.node,

  /** Shorthand for Icon. */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: PropTypes.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: PropTypes.bool,

  /** A dropdown can be labeled. */
  labeled: PropTypes.bool,

  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: PropTypes.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: PropTypes.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: PropTypes.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: PropTypes.bool,

  /** Message to display when there are no results. */
  noResultsMessage: PropTypes.node,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: PropTypes.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: PropTypes.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: PropTypes.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: PropTypes.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: PropTypes.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: PropTypes.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: PropTypes.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: PropTypes.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.arrayOf(PropTypes.shape(DropdownItem.propTypes))]),

  /** Placeholder text. */
  placeholder: PropTypes.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: PropTypes.func,

  /** A dropdown can have its menu scroll. */
  scrolling: PropTypes.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /** A shorthand for a search input. */
  searchInput: PropTypes.oneOfType([PropTypes.array, PropTypes.node, PropTypes.object]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: PropTypes.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: PropTypes.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: PropTypes.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: customPropTypes.every([customPropTypes.demand(['multiple']), PropTypes.oneOfType([PropTypes.string, PropTypes.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: customPropTypes.every([customPropTypes.disallow(['children']), customPropTypes.demand(['options']), PropTypes.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: PropTypes.bool,

  /** A dropdown can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: PropTypes.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: customPropTypes.every([customPropTypes.disallow(['selection', 'text']), PropTypes.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]))]),

  /** Controls whether the dropdown will open upward. */
  upward: PropTypes.bool,

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: PropTypes.bool
} : {};