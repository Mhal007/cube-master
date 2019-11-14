let _difference;module.link("lodash/difference",{default(v){_difference=v}},0);

var computeClassNamesDifference = function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [_difference(currentClassNames, prevClassNames), _difference(prevClassNames, currentClassNames)];
};

module.exportDefault(computeClassNamesDifference);