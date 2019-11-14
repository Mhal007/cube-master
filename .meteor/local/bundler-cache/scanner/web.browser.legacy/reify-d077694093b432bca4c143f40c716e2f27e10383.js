var PropTypes;module.link('prop-types',{"*":function(v){PropTypes=v}},0);var useEventListener;module.link('./useEventListener',{default:function(v){useEventListener=v}},1);


function EventListener(props) {
  useEventListener(props);
  return null;
}

EventListener.displayName = 'EventListener'; // TODO: use Babel plugin for this

EventListener.propTypes = process.env.NODE_ENV !== 'production' ? {
  capture: PropTypes.bool,
  listener: PropTypes.func.isRequired,
  targetRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired,
  type: PropTypes.string.isRequired
} : {};
EventListener.defaultProps = {
  capture: false
};
module.exportDefault(EventListener);