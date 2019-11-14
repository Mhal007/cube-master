module.export({positionsMapping:()=>positionsMapping,positions:()=>positions,placementMapping:()=>placementMapping});let _invert;module.link("lodash/invert",{default(v){_invert=v}},0);let _keys;module.link("lodash/keys",{default(v){_keys=v}},1);

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