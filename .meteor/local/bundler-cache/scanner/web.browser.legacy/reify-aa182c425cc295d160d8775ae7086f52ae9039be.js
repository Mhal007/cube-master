var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},0);var isRefObject,toRefObject;module.link('@stardust-ui/react-component-ref',{isRefObject:function(v){isRefObject=v},toRefObject:function(v){toRefObject=v}},1);var isBrowser;module.link('../../../lib',{isBrowser:function(v){isBrowser=v}},2);


/**
 * Given `this.props`, return a `node` value or undefined.
 *
 * @param {object|React.RefObject} props Component's props
 * @return {React.RefObject|undefined}
 */

var getNodeRefFromProps = function getNodeRefFromProps(props) {
  var node = props.node;

  if (isBrowser()) {
    if (isRefObject(node)) return node;
    return _isNil(node) ? toRefObject(document.body) : toRefObject(node);
  }
};

module.exportDefault(getNodeRefFromProps);