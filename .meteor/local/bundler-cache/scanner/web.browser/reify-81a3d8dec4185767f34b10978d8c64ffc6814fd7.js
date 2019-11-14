let PropTypes;module.link('prop-types',{"*"(v){PropTypes=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let ReactIs;module.link('react-is',{"*"(v){ReactIs=v}},2);let RefFindNode;module.link('./RefFindNode',{default(v){RefFindNode=v}},3);let RefForward;module.link('./RefForward',{default(v){RefForward=v}},4);let refPropType;module.link('./types',{refPropType(v){refPropType=v}},5);






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