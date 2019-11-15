var require = meteorInstall({"client":{"template.main.js":function(){

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

},"imports":{"lib":{"composer.tsx":function(require,exports,module){

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

}},"components":{"results":{"index.ts":function(require,exports,module){

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
    // @ts-ignore
    const results = Results.find({}).fetch();
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
    format = value => value
  } = _ref2;
  return React.createElement(Table.Cell, {
    key: index
  }, format(get(row, value)));
}));

const ResultsTab = (_ref3) => {
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

module.exportDefault(ResultsTab);
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
let AlgSettings;
module.link("../algSettings", {
  default(v) {
    AlgSettings = v;
  }

}, 4);
let Averages;
module.link("../averages", {
  default(v) {
    Averages = v;
  }

}, 5);
let TipsAndTricks;
module.link("../tipsAndTricks", {
  default(v) {
    TipsAndTricks = v;
  }

}, 6);
let TrainingMain;
module.link("../trainingMain", {
  default(v) {
    TrainingMain = v;
  }

}, 7);
let getRandomEntry, getRandomScramble;
module.link("../../../../lib/utils", {
  getRandomEntry(v) {
    getRandomEntry = v;
  },

  getRandomScramble(v) {
    getRandomScramble = v;
  }

}, 8);
let toastNoActiveAlgorithms;
module.link("../../lib/toasts", {
  toastNoActiveAlgorithms(v) {
    toastNoActiveAlgorithms = v;
  }

}, 9);

class Training extends Component {
  constructor(props) {
    super(props);

    this.onChangeAlgorithm = () => {
      const {
        algorithms
      } = this.props;
      const {
        currentAlgorithm,
        currentCategory
      } = this.state;
      this.onReset();
      let newAlgorithm;

      if (currentCategory.randomizableAlgorithm) {
        const activeAlgorithms = algorithms.filter(algorithm => algorithm.active && algorithm.category === currentCategory.value);

        if (!activeAlgorithms.length) {
          toastNoActiveAlgorithms();
        }

        newAlgorithm = getRandomEntry(activeAlgorithms, currentAlgorithm && currentAlgorithm._id);
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

    this.onToggleActive = algorithm => {
      Meteor.call('algorithms.toggleActive', algorithm._id, !algorithm.active);
    };

    this.onActivateAll = () => {
      const {
        currentCategory
      } = this.state;
      Meteor.call('algorithms.activateAll', currentCategory.value);
    };

    this.onDeactivateAll = () => {
      Meteor.call('algorithms.deactivateAll');
      toastNoActiveAlgorithms();
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
        const result = _objectSpread({}, currentAlgorithm && {
          algorithmId: currentAlgorithm._id,
          scramble: currentAlgorithm.scramble
        }, {
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
    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keypress', this.onKeyPress);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keypress', this.onKeyPress);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const {
      state: {
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
    const currentAlgorithms = algorithms.filter(algorithm => algorithm.category === currentCategory.value);
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

const AlgSettings = (_ref) => {
  let {
    algorithms,
    currentCategory: {
      settingsDisabled
    },
    onActivateAll,
    onToggleActive,
    onDeactivateAll
  } = _ref;
  const [detailsLevel, setDetailsLevel] = useState(1);
  const algorithmsGrouped = detailsLevel === 0 ? groupBy(algorithms, 'category') : detailsLevel === 1 ? groupBy(algorithms, 'type') : detailsLevel === 2 ? groupBy(algorithms, 'subtype') : [];
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
    tipFormatter: value => ['None', 'General', 'Precise'][value],
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
      className: "algorithm".concat(settingsDisabled || algorithm.active ? ' active' : ''),
      onClick: () => settingsDisabled ? undefined : onToggleActive(algorithm)
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
  const currentAlgorithmAvg = getAverage(currentAlgorithm && currentAlgorithm.results);
  const currentCategoryAvg = getAverage(currentCategory && currentCategory.results);
  const averages = ['OLL', 'PLL'].includes(currentCategory.value) ? [{
    header: 'Average for this algorithm',
    description: currentAlgorithmAvg ? moment(currentAlgorithmAvg).format('ss:SSS') : 'No records'
  }, {
    header: "Average for all ".concat(currentCategory.value, " algorithms"),
    description: currentCategoryAvg ? moment(currentCategoryAvg).format('ss:SSS') : 'No records'
  }] : [{
    header: "Average for all in ".concat(currentCategory.value),
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

const Home = () => React.createElement("div", null, "Home");

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
const tabs = [{
  name: 'home',
  color: 'green',
  icon: 'home'
}, {
  name: 'training',
  color: 'blue',
  icon: 'book'
}, {
  name: 'results',
  color: 'orange',
  icon: 'lightning'
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
  }));
};

module.exportDefault(MenuTop);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.tsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/imports/components/router.tsx                                                                                //
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
module.link("./about", {
  default(v) {
    About = v;
  }

}, 3);
let Home;
module.link("./home", {
  default(v) {
    Home = v;
  }

}, 4);
let MenuTop;
module.link("./menuTop", {
  default(v) {
    MenuTop = v;
  }

}, 5);
let Results;
module.link("./results", {
  default(v) {
    Results = v;
  }

}, 6);
let Training;
module.link("./training", {
  default(v) {
    Training = v;
  }

}, 7);

const RouterComponent = () => React.createElement("div", null, React.createElement("header", null, React.createElement(Router, null, React.createElement(MenuTop, {
  default: true
}))), React.createElement("nav", null, React.createElement(Segment, null, React.createElement(Router, null, React.createElement(Home, {
  path: "/home"
}), React.createElement(Training, {
  path: "/training",
  default: true
}), React.createElement(Results, {
  path: "/results"
}), React.createElement(About, {
  path: "/about"
})))));

module.exportDefault(RouterComponent);
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
}].map(tip => _objectSpread({}, tip, {
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

}}},"main.tsx":function(require,exports,module){

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
  randomizableAlgorithm: true
}, {
  label: 'PLL',
  value: 'PLL',
  randomizableAlgorithm: true
}, {
  label: '3x3x3',
  value: '3x3x3',
  randomizableScramble: true
}, {
  label: 'OLL Attack',
  value: 'OLL-attack',
  algorithmsCategory: 'OLL',
  settingsDisabled: true
}, {
  label: 'PLL Attack',
  value: 'PLL-attack',
  algorithmsCategory: 'PLL',
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
  getRandomEntry: () => getRandomEntry,
  getAverage: () => getAverage
});
let random;
module.link("lodash/random", {
  default(v) {
    random = v;
  }

}, 0);
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

const getRandomEntry = (array, excludeId) => {
  const index = random(0, array.length - 1);
  const entry = array[index];

  if (array.length > 1 && excludeId && entry._id === excludeId) {
    return getRandomEntry(array, excludeId);
  }

  return entry;
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
let expect;
module.link("chai", {
  expect(v) {
    expect = v;
  }

}, 3);
const Algorithms = new Mongo.Collection('algorithms');
Meteor.methods({
  'algorithms.toggleActive': (algId, active) => {
    check(active, Boolean);
    check(algId, String);
    Algorithms.update(algId, {
      $set: {
        active
      }
    });
  },
  'algorithms.activateAll': category => {
    Algorithms.update({
      category
    }, {
      $set: {
        active: true
      }
    }, {
      multi: true
    });
  },
  'algorithms.deactivateAll': category => {
    Algorithms.update({
      category
    }, {
      $set: {
        active: false
      }
    }, {
      multi: true
    });
  },
  'algorithms.insert': (_ref) => {
    let {
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    } = _ref;
    expect(category).to.be.a('string');
    expect(image).to.be.a('string');
    expect(scramble).to.be.a('string');
    expect(solution).to.be.a('string');
    expect(subtype).to.be.a('string');
    expect(type).to.be.a('string'); // Make sure the user is logged in before inserting a algorithm

    /* if (! Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
     }*/

    const doc = {
      createdAt: new Date(),
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    };
    Algorithms.insert(doc);
  },

  'algorithms.search'(text) {
    check(text, String);
    return Algorithms.find();
  },

  'algorithms.remove'(algorithmId) {
    check(algorithmId, String);
    /*const algorithm = Algorithms.findOne(algorithmId);
    if (algorithm.private && algorithm.owner !== Meteor.userId()) {
      // If the algorithm is private, make sure only the owner can delete it
          throw new Meteor.Error('not-authorized');
    }*/

    Algorithms.remove(algorithmId);
  }
  /*,
  'algorithms.setChecked'(algorithmId, setChecked) {
      check(algorithmId, String);
      check(setChecked, Boolean);
         const algorithm = Algorithms.findOne(algorithmId);
      if (algorithm.private && algorithm.owner !== Meteor.userId()) {
            // If the algorithm is private, make sure only the owner can check it off
                throw new Meteor.Error('not-authorized');
          }
         Algorithms.update(algorithmId, { $set: { checked: setChecked } });
  },
  'algorithms.setPrivate'(algorithmId, setToPrivate) {
      check(algorithmId, String);
      check(setToPrivate, Boolean);
         const algorithm = Algorithms.findOne(algorithmId);
         // Make sure only the algorithm owner can make a algorithm private
      if (algorithm.owner !== Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
      }
         Algorithms.update(algorithmId, { $set: { private: setToPrivate } });
  },*/


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
  'results.insert': (_ref) => {
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
    } // Make sure the user is logged in before inserting a result

    /* if (! Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
     }*/


    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      scramble,
      time
    };
    Results.insert(doc);
  },
  'results.search': text => {
    check(text, String);
    return Results.find();
  },
  'results.remove': resultId => {
    check(resultId, String);
    /*const result = Results.findOne(resultId);
     if (result.private && result.owner !== Meteor.userId()) {
     // If the result is private, make sure only the owner can delete it
     throw new Meteor.Error('not-authorized');
     }*/

    Results.remove(resultId);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".ts",
    ".tsx",
    ".jsx",
    ".mjs",
    ".css",
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