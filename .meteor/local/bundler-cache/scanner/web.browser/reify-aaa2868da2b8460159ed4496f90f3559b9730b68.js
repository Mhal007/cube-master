module.export({refPropType:()=>refPropType});let PropTypes;module.link('prop-types',{"*"(v){PropTypes=v}},0);

/** A checker that matches the React.Ref type. */
var refPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);