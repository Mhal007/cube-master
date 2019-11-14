module.export({refPropType:function(){return refPropType}});var PropTypes;module.link('prop-types',{"*":function(v){PropTypes=v}},0);

/** A checker that matches the React.Ref type. */
var refPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);