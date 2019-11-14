module.export({default:()=>addEventListenerWrap});let addDOMEventListener;module.link('add-dom-event-listener',{default(v){addDOMEventListener=v}},0);let ReactDOM;module.link('react-dom',{default(v){ReactDOM=v}},1);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDOMEventListener(target, eventType, callback, option);
}