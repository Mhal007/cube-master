"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _semanticUiReact = require("semantic-ui-react");
var _withTransition = _interopRequireDefault(require("./with-transition"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var icons = {
  info: 'announcement',
  success: 'checkmark',
  error: 'remove',
  warning: 'warning circle' };


function SemanticToast(props) {var
  type = props.type,title = props.title,description = props.description,size = props.size,color = props.color,list = props.list,onClose = props.onClose,onClick = props.onClick,onDismiss = props.onDismiss;
  var icon = props.icon || icons[type];

  var onDispel = function onDispel(e) {
    e.stopPropagation();
    onDismiss();
    onClose();
  };

  return (
    _react["default"].createElement(_semanticUiReact.Message, _extends({}, _defineProperty({},
    type, true), {
      onClick: onClick,
      onDismiss: onDispel,
      header: title,
      content: description,
      icon: icon,
      size: size,
      color: color,
      list: list,
      floating: true })));


}

SemanticToast.propTypes = {
  type: _propTypes["default"].oneOf(['info', 'success', 'error', 'warning']).isRequired,
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].oneOfType([
  _propTypes["default"].arrayOf(_propTypes["default"].string),
  _propTypes["default"].string,
  _propTypes["default"].node]).
  isRequired,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  size: _propTypes["default"].string,
  color: _propTypes["default"].string,
  list: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onClick: _propTypes["default"].func,
  onDismiss: _propTypes["default"].func,
  onClose: _propTypes["default"].func };


SemanticToast.defaultProps = {
  onClick: undefined,
  onDismiss: undefined,
  onClose: undefined,
  icon: undefined,
  color: undefined,
  list: undefined,
  size: 'medium' };var _default =


(0, _withTransition["default"])(SemanticToast);exports["default"] = _default;