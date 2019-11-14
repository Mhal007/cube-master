module.export({default:function(){return addEventListenerWrap}});var addDOMEventListener;module.link('add-dom-event-listener',{default:function(v){addDOMEventListener=v}},0);var ReactDOM;module.link('react-dom',{default:function(v){ReactDOM=v}},1);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDOMEventListener(target, eventType, callback, option);
}