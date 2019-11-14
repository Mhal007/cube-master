"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.toast = toast;exports.store = void 0;var _store = _interopRequireDefault(require("./store"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var store = new _store["default"]();exports.store = store;
var id = 0;

function toast(item, onClose, onClick, onDismiss) {
  id += 1;
  store.add(Object.assign({ id: id, onClose: onClose, onClick: onClick, onDismiss: onDismiss }, item));
}