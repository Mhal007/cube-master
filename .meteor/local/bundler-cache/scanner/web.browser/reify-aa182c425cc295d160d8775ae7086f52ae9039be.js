let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},0);let isRefObject,toRefObject;module.link('@stardust-ui/react-component-ref',{isRefObject(v){isRefObject=v},toRefObject(v){toRefObject=v}},1);let isBrowser;module.link('../../../lib',{isBrowser(v){isBrowser=v}},2);


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