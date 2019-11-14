let _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default(v){_slicedToArray=v}},0);let _forEach;module.link("lodash/forEach",{default(v){_forEach=v}},1);let computeClassNames;module.link('./computeClassNames',{default(v){computeClassNames=v}},2);let computeClassNamesDifference;module.link('./computeClassNamesDifference',{default(v){computeClassNamesDifference=v}},3);



var prevClassNames = new Map();
/**
 * @param {React.RefObject} nodeRef
 * @param {Object[]} components
 */

var handleClassNamesChange = function handleClassNamesChange(nodeRef, components) {
  var currentClassNames = computeClassNames(components);

  var _computeClassNamesDif = computeClassNamesDifference(prevClassNames.get(nodeRef), currentClassNames),
      _computeClassNamesDif2 = _slicedToArray(_computeClassNamesDif, 2),
      forAdd = _computeClassNamesDif2[0],
      forRemoval = _computeClassNamesDif2[1];

  if (nodeRef.current) {
    _forEach(forAdd, function (className) {
      return nodeRef.current.classList.add(className);
    });

    _forEach(forRemoval, function (className) {
      return nodeRef.current.classList.remove(className);
    });
  }

  prevClassNames.set(nodeRef, currentClassNames);
};

module.exportDefault(handleClassNamesChange);