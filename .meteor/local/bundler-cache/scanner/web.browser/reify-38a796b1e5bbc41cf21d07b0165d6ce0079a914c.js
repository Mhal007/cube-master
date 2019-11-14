let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let React;module.link('react',{default(v){React=v}},1);let createShorthandFactory,getUnhandledProps;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},getUnhandledProps(v){getUnhandledProps=v}},2);let Image;module.link('../../elements/Image',{default(v){Image=v}},3);



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