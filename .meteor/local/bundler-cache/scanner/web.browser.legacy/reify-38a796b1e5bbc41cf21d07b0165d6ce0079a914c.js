var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var React;module.link('react',{default:function(v){React=v}},1);var createShorthandFactory,getUnhandledProps;module.link('../../lib',{createShorthandFactory:function(v){createShorthandFactory=v},getUnhandledProps:function(v){getUnhandledProps=v}},2);var Image;module.link('../../elements/Image',{default:function(v){Image=v}},3);



/**
 * An item can contain an image.
 */

function ItemImage(props) {
  var size = props.size;
  var rest = getUnhandledProps(ItemImage, props);
  return React.createElement(Image, _extends({}, rest, {
    size: size,
    ui: !!size,
    wrapped: true
  }));
}

ItemImage.handledProps = ["size"];
ItemImage.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An image may appear at different sizes. */
  size: Image.propTypes.size
} : {};
ItemImage.create = createShorthandFactory(ItemImage, function (src) {
  return {
    src: src
  };
});
module.exportDefault(ItemImage);