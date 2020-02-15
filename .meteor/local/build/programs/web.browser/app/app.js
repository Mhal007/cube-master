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
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Results;
module.link("../../../../collections/results", {
  Results(v) {
    Results = v;
  }

}, 1);
let composer;
module.link("../../lib/composer", {
  composer(v) {
    composer = v;
  }

}, 2);
let ResultsComponent;
module.link("./results", {
  default(v) {
    ResultsComponent = v;
  }

}, 3);

const compose = (props, onData) => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    const {
      demo
    } = props; // @ts-ignore

    const results = Results.find({
      userId: demo ? 'demo' : Meteor.userId()
    }).fetch();
    onData(null, {
      results
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Table;
module.link("semantic-ui-react", {
  Table(v) {
    Table = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);
let get;
module.link("lodash/get", {
  default(v) {
    get = v;
  }

}, 3);
const columns = [{
  label: 'Date',
  value: 'createdAt',
  format: value => moment(value).format('DD-MM-YYYY HH:ss')
}, {
  label: 'Category',
  value: 'category'
}, {
  label: 'Scramble',
  value: 'scramble'
}, {
  label: 'Time',
  value: 'time',
  format: value => (value / 1000).toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  }) + 's'
}];

const Header = () => React.createElement(Table.Row, null, columns.map((_ref, index) => {
  let {
    label
  } = _ref;
  return React.createElement(Table.HeaderCell, {
    key: index
  }, label);
}));

const Row = row => React.createElement(Table.Row, null, columns.map((_ref2, index) => {
  let {
    value,
    format
  } = _ref2;
  return React.createElement(Table.Cell, {
    key: index
  }, format ? format(get(row, value)) : get(row, value));
}));

const Results = (_ref3) => {
  let {
    results
  } = _ref3;
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
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let composer;
module.link("../../lib/composer", {
  composer(v) {
    composer = v;
  }

}, 1);
let RouterComponent;
module.link("./router", {
  default(v) {
    RouterComponent = v;
  }

}, 2);

const compose = (props, onData) => {
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Segment;
module.link("semantic-ui-react", {
  Segment(v) {
    Segment = v;
  }

}, 1);
let Router;
module.link("@reach/router", {
  Router(v) {
    Router = v;
  }

}, 2);
let About;
module.link("../about", {
  default(v) {
    About = v;
  }

}, 3);
let Home;
module.link("../home", {
  default(v) {
    Home = v;
  }

}, 4);
let MenuTop;
module.link("../menuTop", {
  default(v) {
    MenuTop = v;
  }

}, 5);
let Results;
module.link("../results", {
  default(v) {
    Results = v;
  }

}, 6);
let Training;
module.link("../training", {
  default(v) {
    Training = v;
  }

}, 7);

const RouterComponent = (_ref) => {
  let {
    userId
  } = _ref;
  return React.createElement("div", null, React.createElement("header", null, React.createElement(Router, null, React.createElement(MenuTop, {
    default: true
  }))), React.createElement("div", {
    className: "demo-mode-bar".concat(userId ? ' hidden' : '')
  }, "You are currently in a demo mode. Please sign in to enable personalised results and features."), React.createElement("main", null, React.createElement(Segment, null, React.createElement(Router, null, React.createElement(Home, {
    path: "/home",
    default: true
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
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Algorithms;
module.link("../../../../collections/algorithms", {
  Algorithms(v) {
    Algorithms = v;
  }

}, 1);
let Results;
module.link("../../../../collections/results", {
  Results(v) {
    Results = v;
  }

}, 2);
let composer;
module.link("../../lib/composer", {
  composer(v) {
    composer = v;
  }

}, 3);
let categories;
module.link("../../../../lib/const", {
  categories(v) {
    categories = v;
  }

}, 4);
let Training;
module.link("./training", {
  default(v) {
    Training = v;
  }

}, 5);

const compose = (props, onData) => {
  const subscriptions = [Meteor.subscribe('algorithms'), Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    // @ts-ignore
    const algorithms = Algorithms.find({}).fetch(); // @ts-ignore

    const results = Results.find({}).fetch();
    const algorithmsWithResults = algorithms.map(algorithm => _objectSpread({}, algorithm, {
      results: results.filter(result => result.algorithmId === algorithm._id).map(result => result.time)
    }));
    const categoriesWithResults = categories.map(category => _objectSpread({}, category, {
      results: results.filter(result => result.category === category.value).map(result => result.time)
    }));
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
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 1);
let Grid, Menu;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 2);
let SemanticToastContainer;
module.link("react-semantic-toasts", {
  SemanticToastContainer(v) {
    SemanticToastContainer = v;
  }

}, 3);
let random;
module.link("lodash/random", {
  default(v) {
    random = v;
  }

}, 4);
let uniq;
module.link("lodash/uniq", {
  default(v) {
    uniq = v;
  }

}, 5);
let AlgSettings;
module.link("../algSettings", {
  default(v) {
    AlgSettings = v;
  }

}, 6);
let Averages;
module.link("../averages", {
  default(v) {
    Averages = v;
  }

}, 7);
let TipsAndTricks;
module.link("../tipsAndTricks", {
  default(v) {
    TipsAndTricks = v;
  }

}, 8);
let TrainingMain;
module.link("../trainingMain", {
  default(v) {
    TrainingMain = v;
  }

}, 9);
let getRandomScramble;
module.link("../../../../lib/utils", {
  getRandomScramble(v) {
    getRandomScramble = v;
  }

}, 10);
let toastNoActiveAlgorithms;
module.link("../../lib/toasts", {
  toastNoActiveAlgorithms(v) {
    toastNoActiveAlgorithms = v;
  }

}, 11);
let store;
module.link("../../lib/store", {
  store(v) {
    store = v;
  }

}, 12);

class Training extends Component {
  constructor(props) {
    super(props);

    this.onChangeAlgorithm = () => {
      const {
        algorithms
      } = this.props;
      const {
        activeAlgorithmIds,
        currentAlgorithm,
        currentCategory
      } = this.state;
      this.onReset();
      let newAlgorithm;

      if (currentCategory.randomizableAlgorithm) {
        const searchSpace = algorithms.filter(algorithm => algorithm.category === currentCategory.value && activeAlgorithmIds.includes(algorithm._id));

        if (!searchSpace.length) {
          toastNoActiveAlgorithms();
        }

        const currentIndex = searchSpace.findIndex(algorithm => // @ts-ignore
        algorithm._id === (currentAlgorithm && currentAlgorithm._id));
        let newIndex = currentIndex;

        while (newIndex === -1 || newIndex === currentIndex && searchSpace.length > 1) {
          newIndex = random(0, searchSpace.length - 1);
        }

        newAlgorithm = searchSpace[newIndex];
      } else if (currentCategory.randomizableScramble) {
        const scramble = getRandomScramble(25);
        newAlgorithm = {
          category: currentCategory.value,
          scramble
        };
      }

      this.setState({
        currentAlgorithm: newAlgorithm
      });
    };

    this.onChangeCategory = category => {
      this.setState({
        currentCategory: category
      }, () => {
        this.onChangeAlgorithm();
      });
    };

    this.onToggleActive = toggleAlgorithmId => {
      const {
        activeAlgorithmIds,
        currentCategory
      } = this.state;

      if (currentCategory && currentCategory.value) {
        this.setState({
          activeAlgorithmIds: activeAlgorithmIds.includes(toggleAlgorithmId) ? activeAlgorithmIds.filter(algorithmId => algorithmId !== toggleAlgorithmId) : activeAlgorithmIds.concat(toggleAlgorithmId)
        });
      }
    };

    this.onActivateAll = () => {
      const {
        algorithms
      } = this.props;
      const {
        activeAlgorithmIds,
        currentCategory
      } = this.state;
      const currentAlgorithmIds = algorithms.filter(algorithm => algorithm.category === currentCategory.value).map(algorithm => algorithm._id);
      this.setState({
        activeAlgorithmIds: uniq(activeAlgorithmIds.concat(currentAlgorithmIds))
      });
    };

    this.onDeactivateAll = () => {
      const {
        algorithms
      } = this.props;
      const {
        activeAlgorithmIds,
        currentCategory
      } = this.state;
      const currentAlgorithmIds = algorithms.filter(algorithm => algorithm.category === currentCategory.value).map(algorithm => algorithm._id);
      this.setState({
        activeAlgorithmIds: activeAlgorithmIds.filter(algorithmId => !currentAlgorithmIds.includes(algorithmId))
      }, toastNoActiveAlgorithms);
    };

    this.onExit = () => {
      const {
        activeAlgorithmIds
      } = this.state;
      store.set(store.vars.activeAlgorithmIds, activeAlgorithmIds);
    };

    this.onKeyDown = event => {
      const blocked = this.state.blocked;

      if ((event.key === 'Enter' || event.key === ' ') && !blocked.space) {
        event.preventDefault();
        this.onGoToNextStatus('down');
        this.setState({
          blocked: _objectSpread({}, blocked, {
            space: true
          })
        });
      } else if (event.key === 'r') {
        event.preventDefault();
        this.onChangeAlgorithm();
      } else if (event.key === 'Shift' && !blocked.shift) {
        event.preventDefault();
        this.setState({
          blocked: _objectSpread({}, blocked, {
            shift: true
          }),
          isVisibleSolution: true
        });
      } else if (event.key === 'Control' && !blocked.control) {
        event.preventDefault();
        this.setState({
          blocked: _objectSpread({}, blocked, {
            control: true
          })
        });
      } else if ((event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') && !blocked.delete) {
        event.preventDefault();
        this.setState({
          blocked: _objectSpread({}, blocked, {
            delete: true
          })
        });
      }
    };

    this.onKeyPress = event => {
      if (event.key === ' ') {
        event.preventDefault();
      }
    };

    this.onKeyUp = event => {
      const {
        blocked,
        isVisibleSolution
      } = this.state;

      if (event.key === 'Enter' || event.key === ' ') {
        this.onGoToNextStatus('up');
        this.setState({
          blocked: _objectSpread({}, blocked, {
            space: false
          })
        });
      } else if (event.key === 'Shift') {
        this.setState({
          blocked: _objectSpread({}, blocked, {
            shift: false
          }),
          isVisibleSolution: false
        });
      } else if (event.key === 'Control') {
        this.setState({
          blocked: _objectSpread({}, blocked, {
            control: false
          }),
          isVisibleSolution: !isVisibleSolution
        });
      } else if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') {
        this.onChangeAlgorithm();
        this.setState({
          blocked: _objectSpread({}, blocked, {
            delete: false
          })
        });
      }
    };

    this.onGoToNextStatus = upOrDown => {
      const {
        blocked,
        currentAlgorithm,
        currentCategory,
        timerCurrentValue,
        timerStatus
      } = this.state;

      if (!currentAlgorithm) {
        return;
      }

      if (timerStatus === 'resetted' && upOrDown === 'down' && !blocked.space) {
        this.setState({
          timerStatus: 'pre-inspection'
        });
      } else if (timerStatus === 'pre-inspection' && upOrDown === 'up') {
        this.setState({
          timerStatus: 'timer-on',
          timerStartValue: moment().valueOf()
        });
        this.timer = setInterval(this.updateTimerTime, 1);
      } else if (timerStatus === 'timer-on' && upOrDown === 'down' && !blocked.space) {
        clearInterval(this.timer);
        this.setState({
          timerStatus: 'timer-off'
        });
      } else if (timerStatus === 'timer-off' && upOrDown === 'down' && !blocked.space) {
        /* Save the time */
        const result = _objectSpread({}, currentAlgorithm && _objectSpread({}, currentAlgorithm._id && {
          algorithmId: currentAlgorithm._id
        }, {
          scramble: currentAlgorithm.scramble
        }), {
          category: currentCategory.value,
          time: timerCurrentValue
        });

        Meteor.call('results.insert', result, () => this.onChangeAlgorithm());
      }
    };

    this.onReset = () => {
      clearInterval(this.timer);
      this.setState({
        timerStatus: 'resetted',
        timerCurrentValue: 0
      });
    };

    this.updateTimerTime = () => {
      this.setState(state => ({
        timerCurrentValue: moment().valueOf() - state.timerStartValue
      }));
    };

    this.state = {
      blocked: {
        control: false,
        delete: false,
        shift: false,
        space: false
      },
      activeAlgorithmIds: store.get(store.vars.activeAlgorithmIds) || [],
      currentAlgorithm: undefined,
      currentCategory: this.props.categories[0],
      isVisibleSolution: false,
      settingsOpened: true,
      timerCurrentValue: 0,
      timerStartValue: 0,
      timerStatus: 'resetted'
    };
  }

  componentDidMount() {
    this.onChangeAlgorithm();
    window.addEventListener('beforeunload', this.onExit);
    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keypress', this.onKeyPress);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.algorithms !== this.props.algorithms) {
      this.onChangeAlgorithm();
    }

    if (prevProps.categories !== this.props.categories) {
      const refreshedCategory = this.props.categories.find(category => category.value === this.state.currentCategory.value);

      if (refreshedCategory) {
        this.onChangeCategory(refreshedCategory);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onExit);
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keypress', this.onKeyPress);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const {
      state: {
        activeAlgorithmIds,
        currentAlgorithm,
        currentCategory,
        isVisibleSolution,
        timerCurrentValue
      },
      props: {
        algorithms,
        categories
      },
      onActivateAll,
      onToggleActive,
      onChangeAlgorithm,
      onChangeCategory,
      onDeactivateAll
    } = this;
    const currentAlgorithms = algorithms.filter(algorithm => algorithm.category === currentCategory.type);
    return React.createElement(React.Fragment, null, React.createElement(SemanticToastContainer, null), React.createElement(Grid, null, React.createElement(Grid.Column, {
      width: 4
    }, React.createElement(Menu, {
      className: "left-menu",
      inverted: true,
      tabular: true,
      vertical: true
    }, categories.map(category => React.createElement(Menu.Item, {
      key: category.value,
      name: category.label,
      active: currentCategory.value === category.value,
      onClick: () => onChangeCategory(category)
    })))), React.createElement(Grid.Column, {
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

}

module.exportDefault(Training);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"about.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/about.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const About = () => React.createElement("div", null, "About");

module.exportDefault(About);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"algSettings.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/algSettings.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let Button, List, Segment;
module.link("semantic-ui-react", {
  Button(v) {
    Button = v;
  },

  List(v) {
    List = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
let groupBy;
module.link("lodash/groupBy", {
  default(v) {
    groupBy = v;
  }

}, 2);
let Slider, createSliderWithTooltip;
module.link("rc-slider", {
  default(v) {
    Slider = v;
  },

  createSliderWithTooltip(v) {
    createSliderWithTooltip = v;
  }

}, 3);
let getAverage;
module.link("../../../lib/utils", {
  getAverage(v) {
    getAverage = v;
  }

}, 4);
const SliderTooltip = createSliderWithTooltip(Slider);
const details = [{
  value: 'category',
  label: 'None'
}, {
  value: 'type',
  label: 'General'
}, {
  value: 'subtype',
  label: 'Precise'
}];

const AlgSettings = (_ref) => {
  let {
    activeAlgorithmIds,
    algorithms,
    currentCategory: {
      settingsDisabled
    },
    onActivateAll,
    onToggleActive,
    onDeactivateAll
  } = _ref;
  const [detailsLevel, setDetailsLevel] = useState(1);
  const algorithmsGrouped = groupBy(algorithms, details[detailsLevel].value);
  return React.createElement("section", {
    className: "algorithm-settings".concat(settingsDisabled ? ' disabled' : '')
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
    tipFormatter: value => details[value].label,
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
  }, "Unselect all"))))), Object.entries(algorithmsGrouped).map((_ref2, index) => {
    let [name, values] = _ref2;
    return React.createElement(Segment, {
      key: index
    }, React.createElement("h5", null, name), values.map(algorithm => React.createElement("div", {
      key: algorithm._id,
      className: "algorithm".concat(settingsDisabled || activeAlgorithmIds.includes(algorithm._id) ? ' active' : ''),
      onClick: () => settingsDisabled ? undefined : onToggleActive(algorithm._id)
    }, React.createElement("img", {
      alt: algorithm.name,
      src: "/images/".concat(algorithm.image)
    }), React.createElement("div", {
      className: "results-average"
    }, getAverage(algorithm && algorithm.results)))));
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let List, Segment;
module.link("semantic-ui-react", {
  List(v) {
    List = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);
let getAverage;
module.link("../../../lib/utils", {
  getAverage(v) {
    getAverage = v;
  }

}, 3);

const Averages = (_ref) => {
  let {
    currentAlgorithm,
    currentCategory
  } = _ref;
  const currentAlgorithmAvg = getAverage( // @ts-ignore
  currentAlgorithm && currentAlgorithm.results);
  const currentCategoryAvg = getAverage(currentCategory && currentCategory.results);
  const averages = ['OLL', 'PLL'].includes(currentCategory.value) ? [{
    header: 'Average for this algorithm',
    key: '0',
    description: currentAlgorithmAvg ? moment(currentAlgorithmAvg).format('ss:SSS') : 'No records'
  }, {
    header: "Average for all ".concat(currentCategory.value, " algorithms"),
    key: '1',
    description: currentCategoryAvg ? moment(currentCategoryAvg).format('ss:SSS') : 'No records'
  }] : [{
    header: "Average for all in ".concat(currentCategory.value),
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const Home = () => React.createElement("div", null, Meteor.userId() ? React.createElement(React.Fragment, null, "Welcome ") : React.createElement("p", null, "Please log in to continue."));

module.exportDefault(Home);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loader.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/loader.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Dimmer, LoaderSemantic;
module.link("semantic-ui-react", {
  Dimmer(v) {
    Dimmer = v;
  },

  Loader(v) {
    LoaderSemantic = v;
  }

}, 1);

const Loader = () => React.createElement(Dimmer, {
  active: true,
  page: true,
  style: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  }
}, React.createElement(LoaderSemantic, {
  size: "large"
}, "Loading"));

module.exportDefault(Loader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loginArea.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/loginArea.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Blaze;
module.link("meteor/gadicc:blaze-react-component", {
  default(v) {
    Blaze = v;
  }

}, 0);
module.link("./loginButtons.html");
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const LoginArea = () => {
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Icon, Menu;
module.link("semantic-ui-react", {
  Icon(v) {
    Icon = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 1);
let Link;
module.link("@reach/router", {
  Link(v) {
    Link = v;
  }

}, 2);
let capitalize;
module.link("lodash/capitalize", {
  default(v) {
    capitalize = v;
  }

}, 3);
module.link("./loginButtons.html");
let LoginArea;
module.link("./loginArea", {
  default(v) {
    LoginArea = v;
  }

}, 4);
const tabs = [{
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

const MenuTop = (_ref) => {
  let {
    uri
  } = _ref;
  return React.createElement(Menu, {
    inverted: true,
    icon: "labeled"
  }, tabs.map((_ref2) => {
    let {
      color,
      icon,
      name
    } = _ref2;
    return React.createElement(Link, {
      key: name,
      to: "/".concat(name)
    }, React.createElement(Menu.Item, {
      active: "/".concat(name) === uri,
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
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Timer = (_ref) => {
  let {
    isVisibleSolution,
    solution,
    timerCurrentValue
  } = _ref;
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
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let List, Segment;
module.link("semantic-ui-react", {
  List(v) {
    List = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
const tipsList = [{
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
}].map((tip, index) => _objectSpread({}, tip, {
  key: index,
  icon: 'lightbulb outline'
}));

const TipsAndTricks = () => React.createElement(Segment, null, "Shortcuts list:", React.createElement(List, {
  celled: true,
  inverted: true,
  items: tipsList
}));

module.exportDefault(TipsAndTricks);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trainingMain.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/trainingMain.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Button, Segment;
module.link("semantic-ui-react", {
  Button(v) {
    Button = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
let Timer;
module.link("./timer", {
  default(v) {
    Timer = v;
  }

}, 2);

const TrainingMain = (_ref) => {
  let {
    onChangeAlgorithm,
    // @ts-ignore
    currentAlgorithm: {
      image,
      scramble,
      solution
    } = {
      image: undefined,
      scramble: undefined,
      solution: undefined
    },
    isVisibleSolution,
    timerCurrentValue
  } = _ref;
  return React.createElement("section", {
    className: "training-main"
  }, scramble && React.createElement(Segment, {
    className: "scramble-segment"
  }, scramble), image && React.createElement(Segment, {
    className: "image-segment"
  }, React.createElement("img", {
    src: "/images/".concat(image)
  })), React.createElement(Segment, {
    className: "timer-segment"
  }, React.createElement(Timer, {
    isVisibleSolution: isVisibleSolution,
    solution: solution,
    timerCurrentValue: timerCurrentValue
  })), (image || solution) && React.createElement(Segment, null, React.createElement(Button, {
    primary: true,
    onClick: () => onChangeAlgorithm()
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
  composer: () => composer
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let setDefaults;
module.link("react-komposer", {
  setDefaults(v) {
    setDefaults = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);
let Loader;
module.link("../components/loader", {
  default(v) {
    Loader = v;
  }

}, 3);

const errorHandler = error => Meteor.isProduction ? React.createElement("span", null, "An error occurred.") : React.createElement("code", null, JSON.stringify(error, null, 2));

const compose = setDefaults({
  errorHandler,
  loadingHandler: Loader,
  pure: true
});

const getTrackerLoader = reactiveMapper => {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });
    return () => {
      if (typeof trackerCleanup === 'function') {
        trackerCleanup();
      } // @ts-ignore


      return handler.stop();
    };
  };
};

const composer = (reactiveMapper, options) => {
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
  store: () => store
});
const store = {
  get: property => {
    try {
      return JSON.parse(localStorage.getItem(property) || '');
    } catch (_a) {
      return undefined;
    }
  },
  set: (property, value) => {
    localStorage.setItem(property, JSON.stringify(value));
  },
  vars: {
    activeAlgorithmIds: 'activeAlgorithmIds'
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
  toastNoActiveAlgorithms: () => toastNoActiveAlgorithms
});
let toast;
module.link("react-semantic-toasts", {
  toast(v) {
    toast = v;
  }

}, 0);

const toastNoActiveAlgorithms = () => toast({
  title: 'No active algorithms',
  type: 'warning',
  description: 'Randomizing algorithms pauzed until you select at least one algorithm',
  time: 5000
});
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let Router;
module.link("./imports/components/router", {
  default(v) {
    Router = v;
  }

}, 3);
module.link("rc-slider/assets/index.css");
module.link("react-semantic-toasts/styles/react-semantic-alert.css");
Meteor.startup(() => {
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
  categories: () => categories
});
const categories = [{
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
  getRandomScramble: () => getRandomScramble,
  getAverage: () => getAverage
});
const allowedMoves = ['F', "F'", 'F2', 'B', "B'", 'B2', 'R', "R'", 'R2', 'L', "L'", 'L2', 'U', "U'", 'U2', 'D', "D'", 'D2'];

const getRandomMove = () => allowedMoves[Math.floor(Math.random() * allowedMoves.length)];

const movesConflict = (moveA, moveB) => moveA && moveB ? moveA.split('').some(character => moveB.includes(character)) : false;

const getRandomScramble = movesNr => {
  const moves = [];
  let move = '';
  let previousMove = '';

  for (let i = 0; i < movesNr; i++) {
    move = getRandomMove();

    while (movesConflict(move, previousMove)) {
      move = getRandomMove();
    }

    previousMove = move;
    moves.push(move);
  }

  return moves.join(' ');
};

const getAverage = results => {
  if (!results || results.length === 0) {
    return 0;
  }

  return Math.round(results.reduce((sum, result) => sum + result, 0) / results.length);
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
  Algorithms: () => Algorithms
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Algorithms = new Mongo.Collection('algorithms');
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
  'algorithms.search'(text) {
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
  Results: () => Results
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Results = new Mongo.Collection('results');
Meteor.methods({
  'results.insert'(_ref) {
    let {
      algorithmId,
      category,
      scramble,
      time
    } = _ref;
    check(category, String);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    }

    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      scramble,
      time,
      userId: this.userId || 'demo'
    };
    Results.insert(doc);
  },

  'results.remove'(resultId) {
    check(this.userId, String);
    check(resultId, String);
    Results.remove({
      userId: this.userId,
      resultId
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