module.export({default:function(){return Container}});var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},0);var Segment;module.link('semantic-ui-react',{Segment:function(v){Segment=v}},1);var Loader;module.link('./loader',{default:function(v){Loader=v}},2);var MenuTop;module.link('./menuTop',{default:function(v){MenuTop=v}},3);var Results;module.link('./results',{default:function(v){Results=v}},4);var Training;module.link('./training',{default:function(v){Training=v}},5);







class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'training',
      isVisibleLoader: true
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab = (e, { name }) => this.setState({ currentTab: name });
  onToggleLoader = newValue => this.setState({ isVisibleLoader: newValue });

  render() {
    const {
      onChangeTab,
      onToggleLoader,

      state: { currentTab, isVisibleLoader }
    } = this;

    return (
      <div className="segment">
        <header>
          <MenuTop currentTab={currentTab} onChangeTab={onChangeTab} />
        </header>

        <Segment>
          {isVisibleLoader && <Loader />}

          <main>
            {(currentTab === 'training' || currentTab === 'debugging') && (
              <Training
                onToggleLoader={onToggleLoader}
                debugging={currentTab === 'debugging'}
              />
            )}
            {currentTab === 'results' && (
              <Results debugging={currentTab === 'debugging'} />
            )}
          </main>
        </Segment>

        <footer />
      </div>
    );
  }
}
