var require = meteorInstall({"client":{"imports":{"components":{"loginButtons.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/loginButtons.html                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./template.loginButtons.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loginButtons.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/template.loginButtons.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("Accounts");
Template["Accounts"] = new Template("Template.Accounts", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("loginButtons"));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"results":{"index.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/results/index.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Results;
module.link("../../../../collections/results", {
  Results: function (v) {
    Results = v;
  }
}, 1);
var composer;
module.link("../../lib/composer", {
  composer: function (v) {
    composer = v;
  }
}, 2);
var ResultsComponent;
module.link("./results", {
  "default": function (v) {
    ResultsComponent = v;
  }
}, 3);

var compose = function (props, onData) {
  var subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(function (subscription) {
    return subscription.ready();
  })) {
    var demo = props.demo; // @ts-ignore

    var results = Results.find({
      userId: demo ? 'demo' : Meteor.userId()
    }).fetch();
    onData(null, {
      results: results
    });
  }
};

module.exportDefault(composer(compose)(ResultsComponent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"results.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/results/results.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Table;
module.link("semantic-ui-react", {
  Table: function (v) {
    Table = v;
  }
}, 1);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 2);
var get;
module.link("lodash/get", {
  "default": function (v) {
    get = v;
  }
}, 3);
var columns = [{
  label: 'Date',
  value: 'createdAt',
  format: function (value) {
    return moment(value).format('DD-MM-YYYY HH:ss');
  }
}, {
  label: 'Category',
  value: 'category'
}, {
  label: 'Scramble',
  value: 'scramble'
}, {
  label: 'Time',
  value: 'time',
  format: function (value) {
    return (value / 1000).toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    }) + 's';
  }
}];

var Header = function () {
  return React.createElement(Table.Row, null, columns.map(function (_ref, index) {
    var label = _ref.label;
    return React.createElement(Table.HeaderCell, {
      key: index
    }, label);
  }));
};

var Row = function (row) {
  return React.createElement(Table.Row, null, columns.map(function (_ref2, index) {
    var value = _ref2.value,
        format = _ref2.format;
    return React.createElement(Table.Cell, {
      key: index
    }, format ? format(get(row, value)) : get(row, value));
  }));
};

var Results = function (_ref3) {
  var results = _ref3.results;
  return React.createElement(Table, {
    inverted: true,
    headerRow: Header,
    tableData: results,
    renderBodyRow: Row
  });
};

module.exportDefault(Results);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router":{"index.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/router/index.ts                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var composer;
module.link("../../lib/composer", {
  composer: function (v) {
    composer = v;
  }
}, 1);
var RouterComponent;
module.link("./router", {
  "default": function (v) {
    RouterComponent = v;
  }
}, 2);

var compose = function (props, onData) {
  onData(null, {
    userId: Meteor.userId()
  });
};

module.exportDefault(composer(compose)(RouterComponent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/router/router.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Segment;
module.link("semantic-ui-react", {
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var Router;
module.link("@reach/router", {
  Router: function (v) {
    Router = v;
  }
}, 2);
var About;
module.link("../about", {
  "default": function (v) {
    About = v;
  }
}, 3);
var Home;
module.link("../home", {
  "default": function (v) {
    Home = v;
  }
}, 4);
var MenuTop;
module.link("../menuTop", {
  "default": function (v) {
    MenuTop = v;
  }
}, 5);
var Results;
module.link("../results", {
  "default": function (v) {
    Results = v;
  }
}, 6);
var Training;
module.link("../training", {
  "default": function (v) {
    Training = v;
  }
}, 7);

var RouterComponent = function (_ref) {
  var userId = _ref.userId;
  return React.createElement("div", null, React.createElement("header", null, React.createElement(Router, null, React.createElement(MenuTop, {
    "default": true
  }))), React.createElement("div", {
    className: "demo-mode-bar" + (userId ? ' hidden' : '')
  }, "You are currently in a demo mode. Please sign in to enable personalised results and features."), React.createElement("main", null, React.createElement(Segment, null, React.createElement(Router, null, React.createElement(Home, {
    path: "/home",
    "default": true
  }), React.createElement(Training, {
    key: "training",
    demo: !userId,
    path: "/training"
  }), React.createElement(Results, {
    key: "results",
    demo: !userId,
    path: "/results"
  }), React.createElement(About, {
    path: "/about"
  })))));
};

module.exportDefault(RouterComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"training":{"index.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/training/index.ts                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Algorithms;
module.link("../../../../collections/algorithms", {
  Algorithms: function (v) {
    Algorithms = v;
  }
}, 1);
var Results;
module.link("../../../../collections/results", {
  Results: function (v) {
    Results = v;
  }
}, 2);
var composer;
module.link("../../lib/composer", {
  composer: function (v) {
    composer = v;
  }
}, 3);
var categories;
module.link("../../../../lib/const", {
  categories: function (v) {
    categories = v;
  }
}, 4);
var Training;
module.link("./training", {
  "default": function (v) {
    Training = v;
  }
}, 5);

var compose = function (props, onData) {
  var subscriptions = [Meteor.subscribe('algorithms'), Meteor.subscribe('results')];

  if (subscriptions.every(function (subscription) {
    return subscription.ready();
  })) {
    // @ts-ignore
    var algorithms = Algorithms.find({}).fetch(); // @ts-ignore

    var results = Results.find({}).fetch();
    var algorithmsWithResults = algorithms.map(function (algorithm) {
      return _objectSpread({}, algorithm, {
        results: results.filter(function (result) {
          return result.algorithmId === algorithm._id;
        }).map(function (result) {
          return result.time;
        })
      });
    });
    var categoriesWithResults = categories.map(function (category) {
      return _objectSpread({}, category, {
        results: results.filter(function (result) {
          return result.category === category.value;
        }).map(function (result) {
          return result.time;
        })
      });
    });
    onData(null, {
      algorithms: algorithmsWithResults,
      categories: categoriesWithResults
    });
  }
};

module.exportDefault(composer(compose)(Training));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"training.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/training/training.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 1);
var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 1);
var Grid, Menu;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 2);
var SemanticToastContainer;
module.link("react-semantic-toasts", {
  SemanticToastContainer: function (v) {
    SemanticToastContainer = v;
  }
}, 3);
var random;
module.link("lodash/random", {
  "default": function (v) {
    random = v;
  }
}, 4);
var uniq;
module.link("lodash/uniq", {
  "default": function (v) {
    uniq = v;
  }
}, 5);
var AlgSettings;
module.link("../algSettings", {
  "default": function (v) {
    AlgSettings = v;
  }
}, 6);
var Averages;
module.link("../averages", {
  "default": function (v) {
    Averages = v;
  }
}, 7);
var TipsAndTricks;
module.link("../tipsAndTricks", {
  "default": function (v) {
    TipsAndTricks = v;
  }
}, 8);
var TrainingMain;
module.link("../trainingMain", {
  "default": function (v) {
    TrainingMain = v;
  }
}, 9);
var getRandomScramble;
module.link("../../../../lib/utils", {
  getRandomScramble: function (v) {
    getRandomScramble = v;
  }
}, 10);
var toastNoActiveAlgorithms;
module.link("../../lib/toasts", {
  toastNoActiveAlgorithms: function (v) {
    toastNoActiveAlgorithms = v;
  }
}, 11);
var store;
module.link("../../lib/store", {
  store: function (v) {
    store = v;
  }
}, 12);

var Training =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Training, _Component);

  function Training(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onChangeAlgorithm = function () {
      var algorithms = _this.props.algorithms;
      var _this$state = _this.state,
          activeAlgorithmIds = _this$state.activeAlgorithmIds,
          currentAlgorithm = _this$state.currentAlgorithm,
          currentCategory = _this$state.currentCategory;

      _this.onReset();

      var newAlgorithm;

      if (currentCategory.randomizableAlgorithm) {
        var searchSpace = algorithms.filter(function (algorithm) {
          return algorithm.category === currentCategory.value && activeAlgorithmIds.includes(algorithm._id);
        });

        if (!searchSpace.length) {
          toastNoActiveAlgorithms();
        }

        var currentIndex = searchSpace.findIndex(function (algorithm) {
          return (// @ts-ignore
            algorithm._id === (currentAlgorithm && currentAlgorithm._id)
          );
        });
        var newIndex = currentIndex;

        while (newIndex === -1 || newIndex === currentIndex && searchSpace.length > 1) {
          newIndex = random(0, searchSpace.length - 1);
        }

        newAlgorithm = searchSpace[newIndex];
      } else if (currentCategory.randomizableScramble) {
        var scramble = getRandomScramble(25);
        newAlgorithm = {
          category: currentCategory.value,
          scramble: scramble
        };
      }

      _this.setState({
        currentAlgorithm: newAlgorithm
      });
    };

    _this.onChangeCategory = function (category) {
      _this.setState({
        currentCategory: category
      }, function () {
        _this.onChangeAlgorithm();
      });
    };

    _this.onToggleActive = function (toggleAlgorithmId) {
      var _this$state2 = _this.state,
          activeAlgorithmIds = _this$state2.activeAlgorithmIds,
          currentCategory = _this$state2.currentCategory;

      if (currentCategory && currentCategory.value) {
        _this.setState({
          activeAlgorithmIds: activeAlgorithmIds.includes(toggleAlgorithmId) ? activeAlgorithmIds.filter(function (algorithmId) {
            return algorithmId !== toggleAlgorithmId;
          }) : activeAlgorithmIds.concat(toggleAlgorithmId)
        });
      }
    };

    _this.onActivateAll = function () {
      var algorithms = _this.props.algorithms;
      var _this$state3 = _this.state,
          activeAlgorithmIds = _this$state3.activeAlgorithmIds,
          currentCategory = _this$state3.currentCategory;
      var currentAlgorithmIds = algorithms.filter(function (algorithm) {
        return algorithm.category === currentCategory.value;
      }).map(function (algorithm) {
        return algorithm._id;
      });

      _this.setState({
        activeAlgorithmIds: uniq(activeAlgorithmIds.concat(currentAlgorithmIds))
      });
    };

    _this.onDeactivateAll = function () {
      var algorithms = _this.props.algorithms;
      var _this$state4 = _this.state,
          activeAlgorithmIds = _this$state4.activeAlgorithmIds,
          currentCategory = _this$state4.currentCategory;
      var currentAlgorithmIds = algorithms.filter(function (algorithm) {
        return algorithm.category === currentCategory.value;
      }).map(function (algorithm) {
        return algorithm._id;
      });

      _this.setState({
        activeAlgorithmIds: activeAlgorithmIds.filter(function (algorithmId) {
          return !currentAlgorithmIds.includes(algorithmId);
        })
      }, toastNoActiveAlgorithms);
    };

    _this.onExit = function () {
      var activeAlgorithmIds = _this.state.activeAlgorithmIds;
      store.set(store.vars.activeAlgorithmIds, activeAlgorithmIds);
    };

    _this.onKeyDown = function (event) {
      var blocked = _this.state.blocked;

      if ((event.key === 'Enter' || event.key === ' ') && !blocked.space) {
        event.preventDefault();

        _this.onGoToNextStatus('down');

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            space: true
          })
        });
      } else if (event.key === 'r') {
        event.preventDefault();

        _this.onChangeAlgorithm();
      } else if (event.key === 'Shift' && !blocked.shift) {
        event.preventDefault();

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            shift: true
          }),
          isVisibleSolution: true
        });
      } else if (event.key === 'Control' && !blocked.control) {
        event.preventDefault();

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            control: true
          })
        });
      } else if ((event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') && !blocked.delete) {
        event.preventDefault();

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            "delete": true
          })
        });
      }
    };

    _this.onKeyPress = function (event) {
      if (event.key === ' ') {
        event.preventDefault();
      }
    };

    _this.onKeyUp = function (event) {
      var _this$state5 = _this.state,
          blocked = _this$state5.blocked,
          isVisibleSolution = _this$state5.isVisibleSolution;

      if (event.key === 'Enter' || event.key === ' ') {
        _this.onGoToNextStatus('up');

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            space: false
          })
        });
      } else if (event.key === 'Shift') {
        _this.setState({
          blocked: _objectSpread({}, blocked, {
            shift: false
          }),
          isVisibleSolution: false
        });
      } else if (event.key === 'Control') {
        _this.setState({
          blocked: _objectSpread({}, blocked, {
            control: false
          }),
          isVisibleSolution: !isVisibleSolution
        });
      } else if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') {
        _this.onChangeAlgorithm();

        _this.setState({
          blocked: _objectSpread({}, blocked, {
            "delete": false
          })
        });
      }
    };

    _this.onGoToNextStatus = function (upOrDown) {
      var _this$state6 = _this.state,
          blocked = _this$state6.blocked,
          currentAlgorithm = _this$state6.currentAlgorithm,
          currentCategory = _this$state6.currentCategory,
          timerCurrentValue = _this$state6.timerCurrentValue,
          timerStatus = _this$state6.timerStatus;

      if (!currentAlgorithm) {
        return;
      }

      if (timerStatus === 'resetted' && upOrDown === 'down' && !blocked.space) {
        _this.setState({
          timerStatus: 'pre-inspection'
        });
      } else if (timerStatus === 'pre-inspection' && upOrDown === 'up') {
        _this.setState({
          timerStatus: 'timer-on',
          timerStartValue: moment().valueOf()
        });

        _this.timer = setInterval(_this.updateTimerTime, 1);
      } else if (timerStatus === 'timer-on' && upOrDown === 'down' && !blocked.space) {
        clearInterval(_this.timer);

        _this.setState({
          timerStatus: 'timer-off'
        });
      } else if (timerStatus === 'timer-off' && upOrDown === 'down' && !blocked.space) {
        /* Save the time */
        var result = _objectSpread({}, currentAlgorithm && _objectSpread({}, currentAlgorithm._id && {
          algorithmId: currentAlgorithm._id
        }, {
          scramble: currentAlgorithm.scramble
        }), {
          category: currentCategory.value,
          time: timerCurrentValue
        });

        Meteor.call('results.insert', result, function () {
          return _this.onChangeAlgorithm();
        });
      }
    };

    _this.onReset = function () {
      clearInterval(_this.timer);

      _this.setState({
        timerStatus: 'resetted',
        timerCurrentValue: 0
      });
    };

    _this.updateTimerTime = function () {
      _this.setState(function (state) {
        return {
          timerCurrentValue: moment().valueOf() - state.timerStartValue
        };
      });
    };

    _this.state = {
      blocked: {
        control: false,
        "delete": false,
        shift: false,
        space: false
      },
      activeAlgorithmIds: store.get(store.vars.activeAlgorithmIds) || [],
      currentAlgorithm: undefined,
      currentCategory: _this.props.categories[0],
      isVisibleSolution: store.get(store.vars.isVisibleSolution),
      settingsOpened: true,
      timerCurrentValue: 0,
      timerStartValue: 0,
      timerStatus: 'resetted'
    };
    return _this;
  }

  var _proto = Training.prototype;

  _proto.componentDidMount = function () {
    function componentDidMount() {
      this.onChangeAlgorithm();
      window.addEventListener('beforeunload', this.onExit);
      document.body.addEventListener('keydown', this.onKeyDown);
      document.body.addEventListener('keypress', this.onKeyPress);
      document.body.addEventListener('keyup', this.onKeyUp);
    }

    return componentDidMount;
  }();

  _proto.componentDidUpdate = function () {
    function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevProps.algorithms !== this.props.algorithms) {
        this.onChangeAlgorithm();
      }

      if (prevProps.categories !== this.props.categories) {
        var refreshedCategory = this.props.categories.find(function (category) {
          return category.value === _this2.state.currentCategory.value;
        });

        if (refreshedCategory) {
          this.onChangeCategory(refreshedCategory);
        }
      }

      if (prevState.isVisibleSolution !== this.state.isVisibleSolution) {
        store.set(store.vars.isVisibleSolution, this.state.isVisibleSolution);
      }
    }

    return componentDidUpdate;
  }();

  _proto.componentWillUnmount = function () {
    function componentWillUnmount() {
      window.removeEventListener('beforeunload', this.onExit);
      document.body.removeEventListener('keydown', this.onKeyDown);
      document.body.removeEventListener('keypress', this.onKeyPress);
      document.body.removeEventListener('keyup', this.onKeyUp);
    }

    return componentWillUnmount;
  }();

  _proto.render = function () {
    function render() {
      var _this$state7 = this.state,
          activeAlgorithmIds = _this$state7.activeAlgorithmIds,
          currentAlgorithm = _this$state7.currentAlgorithm,
          currentCategory = _this$state7.currentCategory,
          isVisibleSolution = _this$state7.isVisibleSolution,
          timerCurrentValue = _this$state7.timerCurrentValue,
          _this$props = this.props,
          algorithms = _this$props.algorithms,
          categories = _this$props.categories,
          onActivateAll = this.onActivateAll,
          onToggleActive = this.onToggleActive,
          onChangeAlgorithm = this.onChangeAlgorithm,
          onChangeCategory = this.onChangeCategory,
          onDeactivateAll = this.onDeactivateAll;
      var currentAlgorithms = algorithms.filter(function (algorithm) {
        return algorithm.category === currentCategory.type;
      });
      return React.createElement(React.Fragment, null, React.createElement(SemanticToastContainer, null), React.createElement(Grid, null, React.createElement(Grid.Column, {
        width: 4
      }, React.createElement(Menu, {
        className: "left-menu",
        inverted: true,
        tabular: true,
        vertical: true
      }, categories.map(function (category) {
        return React.createElement(Menu.Item, {
          key: category.value,
          name: category.label,
          active: currentCategory.value === category.value,
          onClick: function () {
            return onChangeCategory(category);
          }
        });
      }))), React.createElement(Grid.Column, {
        width: 8,
        textAlign: "center"
      }, React.createElement(TrainingMain, {
        currentAlgorithm: currentAlgorithm,
        isVisibleSolution: isVisibleSolution,
        onChangeAlgorithm: onChangeAlgorithm,
        timerCurrentValue: timerCurrentValue
      })), React.createElement(Grid.Column, {
        width: 4
      }, React.createElement(Averages, {
        currentAlgorithm: currentAlgorithm,
        currentCategory: currentCategory
      }), React.createElement(TipsAndTricks, null))), this.state.settingsOpened && React.createElement(AlgSettings, {
        activeAlgorithmIds: activeAlgorithmIds,
        algorithms: currentAlgorithms,
        currentCategory: currentCategory,
        onActivateAll: onActivateAll,
        onToggleActive: onToggleActive,
        onDeactivateAll: onDeactivateAll
      }));
    }

    return render;
  }();

  return Training;
}(Component);

module.exportDefault(Training);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"about.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/about.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var About = function () {
  return React.createElement("div", null, "About");
};

module.exportDefault(About);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algSettings.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/algSettings.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var Button, List, Segment;
module.link("semantic-ui-react", {
  Button: function (v) {
    Button = v;
  },
  List: function (v) {
    List = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var groupBy;
module.link("lodash/groupBy", {
  "default": function (v) {
    groupBy = v;
  }
}, 2);
var Slider, createSliderWithTooltip;
module.link("rc-slider", {
  "default": function (v) {
    Slider = v;
  },
  createSliderWithTooltip: function (v) {
    createSliderWithTooltip = v;
  }
}, 3);
var getAverage;
module.link("../../../lib/utils", {
  getAverage: function (v) {
    getAverage = v;
  }
}, 4);
var store;
module.link("../lib/store", {
  store: function (v) {
    store = v;
  }
}, 5);
var SliderTooltip = createSliderWithTooltip(Slider);
var details = [{
  value: 'category',
  label: 'None'
}, {
  value: 'type',
  label: 'General'
}, {
  value: 'subtype',
  label: 'Precise'
}];

var AlgSettings = function (_ref) {
  var activeAlgorithmIds = _ref.activeAlgorithmIds,
      algorithms = _ref.algorithms,
      settingsDisabled = _ref.currentCategory.settingsDisabled,
      onActivateAll = _ref.onActivateAll,
      onToggleActive = _ref.onToggleActive,
      onDeactivateAll = _ref.onDeactivateAll;

  var _useState = useState(store.get(store.vars.groupingLevel) || 1),
      _useState2 = _slicedToArray(_useState, 2),
      detailsLevel = _useState2[0],
      setDetailsLevel = _useState2[1];

  useEffect(function () {
    store.set(store.vars.groupingLevel, detailsLevel);
  }, [detailsLevel]);
  var algorithmsGrouped = groupBy(algorithms, details[detailsLevel].value);
  return React.createElement("section", {
    className: "algorithm-settings" + (settingsDisabled ? ' disabled' : '')
  }, React.createElement(List, {
    divided: true,
    verticalAlign: "middle"
  }, React.createElement(List.Item, null, React.createElement(List.Content, {
    floated: "right"
  }, React.createElement("div", {
    className: "grouping-level"
  }, React.createElement("div", {
    className: "title"
  }, "Grouping level"), React.createElement(SliderTooltip, {
    min: 0,
    max: 2,
    onChange: setDetailsLevel,
    tipFormatter: function (value) {
      return details[value].label;
    },
    tipProps: {
      placement: 'bottom',
      visible: true
    },
    value: detailsLevel
  }))), React.createElement(List.Content, null, !settingsDisabled && React.createElement("div", {
    className: "controls"
  }, React.createElement(Button, {
    secondary: true,
    onClick: settingsDisabled ? undefined : onActivateAll
  }, "Select all"), React.createElement(Button, {
    secondary: true,
    onClick: settingsDisabled ? undefined : onDeactivateAll
  }, "Unselect all"))))), Object.entries(algorithmsGrouped).map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        values = _ref3[1];

    return React.createElement(Segment, {
      key: index
    }, React.createElement("h5", null, name), values.map(function (algorithm) {
      return React.createElement("div", {
        key: algorithm._id,
        className: "algorithm" + (settingsDisabled || activeAlgorithmIds.includes(algorithm._id) ? ' active' : ''),
        onClick: function () {
          return settingsDisabled ? undefined : onToggleActive(algorithm._id);
        }
      }, React.createElement("img", {
        alt: algorithm.name,
        src: "/images/" + algorithm.image
      }), React.createElement("div", {
        className: "results-average"
      }, getAverage(algorithm && algorithm.results)));
    }));
  }));
};

module.exportDefault(AlgSettings);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"averages.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/averages.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var List, Segment;
module.link("semantic-ui-react", {
  List: function (v) {
    List = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 2);
var getAverage;
module.link("../../../lib/utils", {
  getAverage: function (v) {
    getAverage = v;
  }
}, 3);

var Averages = function (_ref) {
  var currentAlgorithm = _ref.currentAlgorithm,
      currentCategory = _ref.currentCategory;
  var currentAlgorithmAvg = getAverage( // @ts-ignore
  currentAlgorithm && currentAlgorithm.results);
  var currentCategoryAvg = getAverage(currentCategory && currentCategory.results);
  var averages = ['OLL', 'PLL'].includes(currentCategory.value) ? [{
    header: 'Average for this algorithm',
    key: '0',
    description: currentAlgorithmAvg ? moment(currentAlgorithmAvg).format('ss:SSS') : 'No records'
  }, {
    header: "Average for all " + currentCategory.value + " algorithms",
    key: '1',
    description: currentCategoryAvg ? moment(currentCategoryAvg).format('ss:SSS') : 'No records'
  }] : [{
    header: "Average for all in " + currentCategory.value,
    key: '0',
    description: currentCategoryAvg ? moment(currentCategoryAvg).format('mm:ss:SSS') : 'No records'
  }];
  return React.createElement(Segment, {
    className: "averages"
  }, React.createElement(List, {
    inverted: true,
    items: averages
  }));
};

module.exportDefault(Averages);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/home.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var Home = function () {
  return React.createElement("div", null, Meteor.userId() ? React.createElement(React.Fragment, null, "Welcome ") : React.createElement("p", null, "Please log in to continue."));
};

module.exportDefault(Home);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loader.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/loader.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Dimmer, LoaderSemantic;
module.link("semantic-ui-react", {
  Dimmer: function (v) {
    Dimmer = v;
  },
  Loader: function (v) {
    LoaderSemantic = v;
  }
}, 1);

var Loader = function () {
  return React.createElement(Dimmer, {
    active: true,
    page: true,
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.55)'
    }
  }, React.createElement(LoaderSemantic, {
    size: "large"
  }, "Loading"));
};

module.exportDefault(Loader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loginArea.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/loginArea.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.link("meteor/gadicc:blaze-react-component", {
  "default": function (v) {
    Blaze = v;
  }
}, 0);
module.link("./loginButtons.html");
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var LoginArea = function () {
  return React.createElement("div", {
    className: "login-area"
  }, React.createElement(Blaze, {
    template: "Accounts"
  }));
};

module.exportDefault(LoginArea);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menuTop.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/menuTop.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Icon, Menu;
module.link("semantic-ui-react", {
  Icon: function (v) {
    Icon = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 1);
var Link;
module.link("@reach/router", {
  Link: function (v) {
    Link = v;
  }
}, 2);
var capitalize;
module.link("lodash/capitalize", {
  "default": function (v) {
    capitalize = v;
  }
}, 3);
module.link("./loginButtons.html");
var LoginArea;
module.link("./loginArea", {
  "default": function (v) {
    LoginArea = v;
  }
}, 4);
var tabs = [{
  name: 'home',
  color: 'green',
  icon: 'home'
}, {
  name: 'training',
  color: 'blue',
  icon: 'stopwatch'
}, {
  name: 'results',
  color: 'orange',
  icon: 'list ol'
}, {
  name: 'about',
  color: 'teal',
  icon: 'idea'
}];

var MenuTop = function (_ref) {
  var uri = _ref.uri;
  return React.createElement(Menu, {
    inverted: true,
    icon: "labeled"
  }, tabs.map(function (_ref2) {
    var color = _ref2.color,
        icon = _ref2.icon,
        name = _ref2.name;
    return React.createElement(Link, {
      key: name,
      to: "/" + name
    }, React.createElement(Menu.Item, {
      active: "/" + name === uri,
      color: color,
      name: name
    }, React.createElement(Icon, {
      name: icon
    }), capitalize(name)));
  }), React.createElement(LoginArea, null));
};

module.exportDefault(MenuTop);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"timer.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/timer.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Timer = function (_ref) {
  var isVisibleSolution = _ref.isVisibleSolution,
      solution = _ref.solution,
      timerCurrentValue = _ref.timerCurrentValue;
  return React.createElement("div", {
    className: "timer"
  }, React.createElement("p", null, moment(timerCurrentValue).format('mm:ss:SSS')), isVisibleSolution && solution && React.createElement("p", null, solution));
};

module.exportDefault(Timer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tipsAndTricks.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/tipsAndTricks.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var List, Segment;
module.link("semantic-ui-react", {
  List: function (v) {
    List = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var tipsList = [{
  header: 'Enter / Space',
  description: '... -> start timer -> stop timer -> save result -> ...'
}, {
  header: 'r',
  description: 'Randomize new algorithm'
}, {
  header: 'Shift (hold)',
  description: 'Take a peek at the solution'
}, {
  header: 'Control',
  description: 'Show / hide the solution'
}, {
  header: 'Backspace / Delete / Escape',
  description: "Reset timer - don't save the solution"
}].map(function (tip, index) {
  return _objectSpread({}, tip, {
    key: index,
    icon: 'lightbulb outline'
  });
});

var TipsAndTricks = function () {
  return React.createElement(Segment, null, "Shortcuts list:", React.createElement(List, {
    celled: true,
    inverted: true,
    items: tipsList
  }));
};

module.exportDefault(TipsAndTricks);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trainingMain.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/trainingMain.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Button, Segment;
module.link("semantic-ui-react", {
  Button: function (v) {
    Button = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var Timer;
module.link("./timer", {
  "default": function (v) {
    Timer = v;
  }
}, 2);

var TrainingMain = function (_ref) {
  var onChangeAlgorithm = _ref.onChangeAlgorithm,
      _ref$currentAlgorithm = _ref.currentAlgorithm;
  _ref$currentAlgorithm = _ref$currentAlgorithm === void 0 ? {
    image: undefined,
    scramble: undefined,
    solution: undefined
  } : _ref$currentAlgorithm;
  var image = _ref$currentAlgorithm.image,
      scramble = _ref$currentAlgorithm.scramble,
      solution = _ref$currentAlgorithm.solution,
      isVisibleSolution = _ref.isVisibleSolution,
      timerCurrentValue = _ref.timerCurrentValue;
  return React.createElement("section", {
    className: "training-main"
  }, scramble && React.createElement(Segment, {
    className: "scramble-segment"
  }, scramble), image && React.createElement(Segment, {
    className: "image-segment"
  }, React.createElement("img", {
    src: "/images/" + image
  })), React.createElement(Segment, {
    className: "timer-segment"
  }, React.createElement(Timer, {
    isVisibleSolution: isVisibleSolution,
    solution: solution,
    timerCurrentValue: timerCurrentValue
  })), (image || solution) && React.createElement(Segment, null, React.createElement(Button, {
    primary: true,
    onClick: function () {
      return onChangeAlgorithm();
    }
  }, "Randomize new")));
};

module.exportDefault(TrainingMain);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"composer.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/lib/composer.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  composer: function () {
    return composer;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var setDefaults;
module.link("react-komposer", {
  setDefaults: function (v) {
    setDefaults = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var Loader;
module.link("../components/loader", {
  "default": function (v) {
    Loader = v;
  }
}, 3);

var errorHandler = function (error) {
  return Meteor.isProduction ? React.createElement("span", null, "An error occurred.") : React.createElement("code", null, JSON.stringify(error, null, 2));
};

var compose = setDefaults({
  errorHandler: errorHandler,
  loadingHandler: Loader,
  pure: true
});

var getTrackerLoader = function (reactiveMapper) {
  return function (props, onData, env) {
    var trackerCleanup = null;
    var handler = Tracker.nonreactive(function () {
      return Tracker.autorun(function () {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });
    return function () {
      if (typeof trackerCleanup === 'function') {
        trackerCleanup();
      } // @ts-ignore


      return handler.stop();
    };
  };
};

var composer = function (reactiveMapper, options) {
  return compose(getTrackerLoader(reactiveMapper), options);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"store.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/lib/store.ts                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  store: function () {
    return store;
  }
});
var store = {
  get: function (property) {
    try {
      return JSON.parse(localStorage.getItem(property) || '');
    } catch (_a) {
      return undefined;
    }
  },
  set: function (property, value) {
    localStorage.setItem(property, JSON.stringify(value));
  },
  vars: {
    activeAlgorithmIds: 'activeAlgorithmIds',
    isVisibleSolution: 'isVisibleSolution',
    groupingLevel: 'groupingLevel'
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toasts.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/lib/toasts.ts                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  toastNoActiveAlgorithms: function () {
    return toastNoActiveAlgorithms;
  }
});
var toast;
module.link("react-semantic-toasts", {
  toast: function (v) {
    toast = v;
  }
}, 0);

var toastNoActiveAlgorithms = function () {
  return toast({
    title: 'No active algorithms',
    type: 'warning',
    description: 'Randomizing algorithms pauzed until you select at least one algorithm',
    time: 5000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="render-target"></div>');
}));
Meteor.startup(Template.body.renderToDocument);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.tsx                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 2);
var Router;
module.link("./imports/components/router", {
  "default": function (v) {
    Router = v;
  }
}, 3);
module.link("rc-slider/assets/index.css");
module.link("react-semantic-toasts/styles/react-semantic-alert.css");
Meteor.startup(function () {
  render(React.createElement(Router, null), document.getElementById('render-target'));
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"const.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/const.ts                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  categories: function () {
    return categories;
  }
});
var categories = [{
  label: 'OLL',
  value: 'OLL',
  type: 'OLL',
  randomizableAlgorithm: true
}, {
  label: 'PLL',
  value: 'PLL',
  type: 'PLL',
  randomizableAlgorithm: true
}, {
  label: '3x3x3',
  value: '3x3x3',
  randomizableScramble: true
}, {
  label: 'OLL Attack',
  value: 'OLL-attack',
  type: 'OLL',
  settingsDisabled: true
}, {
  label: 'PLL Attack',
  value: 'PLL-attack',
  type: 'PLL',
  settingsDisabled: true
}];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"types.ts":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/types.ts                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/utils.ts                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getRandomScramble: function () {
    return getRandomScramble;
  },
  getAverage: function () {
    return getAverage;
  }
});
var allowedMoves = ['F', "F'", 'F2', 'B', "B'", 'B2', 'R', "R'", 'R2', 'L', "L'", 'L2', 'U', "U'", 'U2', 'D', "D'", 'D2'];

var getRandomMove = function () {
  return allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
};

var movesConflict = function (moveA, moveB) {
  return moveA && moveB ? moveA.split('').some(function (character) {
    return moveB.includes(character);
  }) : false;
};

var getRandomScramble = function (movesNr) {
  var moves = [];
  var move = '';
  var previousMove = '';

  for (var i = 0; i < movesNr; i++) {
    move = getRandomMove();

    while (movesConflict(move, previousMove)) {
      move = getRandomMove();
    }

    previousMove = move;
    moves.push(move);
  }

  return moves.join(' ');
};

var getAverage = function (results) {
  if (!results || results.length === 0) {
    return 0;
  }

  return Math.round(results.reduce(function (sum, result) {
    return sum + result;
  }, 0) / results.length);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"algorithms.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/algorithms.ts                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Algorithms: function () {
    return Algorithms;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.link("meteor/check", {
  check: function (v) {
    check = v;
  }
}, 2);
var Algorithms = new Mongo.Collection('algorithms');
Meteor.methods({
  // 'algorithms.insert'({ category, image, scramble, solution, subtype, type }) {
  //   check(this.userId, String);
  //   check(category, String);
  //   check(image, String);
  //   check(scramble, String);
  //   check(solution, String);
  //   check(subtype, String);
  //   check(type, String);
  //
  //   const doc = {
  //     createdAt: new Date(),
  //     category,
  //     image,
  //     scramble,
  //     solution,
  //     subtype,
  //     type
  //   };
  //
  //   Algorithms.insert(doc);
  // },
  'algorithms.search': function (text) {
    check(text, String);
    return Algorithms.find();
  } // 'algorithms.remove'(algorithmId) {
  //   check(this.userId, String);
  //   check(algorithmId, String);
  //
  //   Algorithms.remove(algorithmId);
  // }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"results.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/results.ts                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Results: function () {
    return Results;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.link("meteor/check", {
  check: function (v) {
    check = v;
  }
}, 2);
var Results = new Mongo.Collection('results');
Meteor.methods({
  'results.insert': function (_ref) {
    var algorithmId = _ref.algorithmId,
        category = _ref.category,
        scramble = _ref.scramble,
        time = _ref.time;
    check(category, String);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    }

    var doc = {
      algorithmId: algorithmId,
      category: category,
      createdAt: new Date(),
      scramble: scramble,
      time: time,
      userId: this.userId || 'demo'
    };
    Results.insert(doc);
  },
  'results.remove': function (resultId) {
    check(this.userId, String);
    check(resultId, String);
    Results.remove({
      userId: this.userId,
      resultId: resultId
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".ts",
    ".css",
    ".tsx",
    ".jsx",
    ".mjs",
    ".less"
  ]
});

require("/client/template.main.js");
require("/lib/const.ts");
require("/lib/types.ts");
require("/lib/utils.ts");
require("/collections/algorithms.ts");
require("/collections/results.ts");
require("/client/main.tsx");