var _uniq;module.link("lodash/fp/uniq",{default:function(v){_uniq=v}},0);var _identity;module.link("lodash/fp/identity",{default:function(v){_identity=v}},1);var _filter;module.link("lodash/fp/filter",{default:function(v){_filter=v}},2);var _split;module.link("lodash/fp/split",{default:function(v){_split=v}},3);var _flatMap;module.link("lodash/fp/flatMap",{default:function(v){_flatMap=v}},4);var _map;module.link("lodash/fp/map",{default:function(v){_map=v}},5);var _toArray;module.link("lodash/fp/toArray",{default:function(v){_toArray=v}},6);var _flow;module.link("lodash/fp/flow",{default:function(v){_flow=v}},7);








var computeClassNames = _flow(_toArray, _map('props.className'), _flatMap(_split(/\s+/)), _filter(_identity), _uniq);

module.exportDefault(computeClassNames);