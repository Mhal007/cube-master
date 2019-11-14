let _typeof;module.link("@babel/runtime/helpers/esm/typeof",{default(v){_typeof=v}},0);

/**
 * The function that correctly handles passing refs.
 *
 * @param ref An ref object or function
 * @param node A node that should be passed by ref
 */
var handleRef = function handleRef(ref, node) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof ref === 'string') {
      throw new Error('We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.');
    }
  }

  if (typeof ref === 'function') {
    ref(node);
    return;
  }

  if (ref !== null && _typeof(ref) === 'object') {
    // The `current` property is defined as readonly, however it's a valid way because
    // `ref` is a mutable object
    ;
    ref.current = node;
  }
};

module.exportDefault(handleRef);