module.export({createShorthand:()=>createShorthand,createShorthandFactory:()=>createShorthandFactory,createHTMLDivision:()=>createHTMLDivision,createHTMLIframe:()=>createHTMLIframe,createHTMLImage:()=>createHTMLImage,createHTMLInput:()=>createHTMLInput,createHTMLLabel:()=>createHTMLLabel,createHTMLParagraph:()=>createHTMLParagraph});let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},0);let _typeof;module.link("@babel/runtime/helpers/typeof",{default(v){_typeof=v}},1);let _uniq;module.link("lodash/uniq",{default(v){_uniq=v}},2);let _isArray;module.link("lodash/isArray",{default(v){_isArray=v}},3);let _isPlainObject;module.link("lodash/isPlainObject",{default(v){_isPlainObject=v}},4);let _isFunction;module.link("lodash/isFunction",{default(v){_isFunction=v}},5);let _isNumber;module.link("lodash/isNumber",{default(v){_isNumber=v}},6);let _isString;module.link("lodash/isString",{default(v){_isString=v}},7);let _isBoolean;module.link("lodash/isBoolean",{default(v){_isBoolean=v}},8);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},9);let cx;module.link('classnames',{default(v){cx=v}},10);let React,cloneElement,isValidElement;module.link('react',{default(v){React=v},cloneElement(v){cloneElement=v},isValidElement(v){isValidElement=v}},11);










 // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if (_isNil(val) || _isBoolean(val)) return null;

  var valIsString = _isString(val);

  var valIsNumber = _isNumber(val);

  var valIsFunction = _isFunction(val);

  var valIsReactElement = isValidElement(val);

  var valIsPropsObject = _isPlainObject(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || _isArray(val); // unhandled type return null

  /* eslint-disable no-console */


  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received ".concat(_typeof(val), ".")].join(''));
    }

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === void 0 ? {} : _options$overrideProp;
  overrideProps = _isFunction(overrideProps) ? overrideProps(_objectSpread({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = _objectSpread({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = cx(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = _uniq(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = _objectSpread({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if (_isNil(props.key)) {
    var childKey = props.childKey;
    var _options$autoGenerate = options.autoGenerateKey,
        autoGenerateKey = _options$autoGenerate === void 0 ? true : _options$autoGenerate;

    if (!_isNil(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) return cloneElement(val, props); // Create ReactElements from built up props

  if (valIsPrimitiveValue || valIsPropsObject) return React.createElement(Component, props); // Call functions with args similar to createElement()

  if (valIsFunction) return val(Component, props, props.children);
  /* eslint-enable react/prop-types */
} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */

createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

var createHTMLDivision = createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
var createHTMLIframe = createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
var createHTMLImage = createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
var createHTMLInput = createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
var createHTMLLabel = createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
var createHTMLParagraph = createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});