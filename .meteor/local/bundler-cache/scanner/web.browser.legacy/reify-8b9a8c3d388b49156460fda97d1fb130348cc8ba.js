module.export({positionsMapping:function(){return positionsMapping},positions:function(){return positions},placementMapping:function(){return placementMapping}});var _invert;module.link("lodash/invert",{default:function(v){_invert=v}},0);var _keys;module.link("lodash/keys",{default:function(v){_keys=v}},1);

var positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',
  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',
  'right center': 'right',
  'left center': 'left'
};
var positions = _keys(positionsMapping);
var placementMapping = _invert(positionsMapping);