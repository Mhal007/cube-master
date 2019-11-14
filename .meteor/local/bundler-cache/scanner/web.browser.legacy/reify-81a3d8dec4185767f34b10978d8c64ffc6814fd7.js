var PropTypes;module.link('prop-types',{"*":function(v){PropTypes=v}},0);var React;module.link('react',{"*":function(v){React=v}},1);var ReactIs;module.link('react-is',{"*":function(v){ReactIs=v}},2);var RefFindNode;module.link('./RefFindNode',{default:function(v){RefFindNode=v}},3);var RefForward;module.link('./RefForward',{default:function(v){RefForward=v}},4);var refPropType;module.link('./types',{refPropType:function(v){refPropType=v}},5);






var Ref = function Ref(props) {
  var children = props.children,
      innerRef = props.innerRef;
  var child = React.Children.only(children);
  var ElementType = ReactIs.isForwardRef(child) ? RefForward : RefFindNode;
  return React.createElement(ElementType, {
    innerRef: innerRef
  }, child);
};

Ref.displayName = 'Ref'; // TODO: use Babel plugin for this

if (process.env.NODE_ENV !== 'production') {
  Ref.propTypes = {
    children: PropTypes.element.isRequired,
    innerRef: refPropType.isRequired
  };
}

module.exportDefault(Ref);