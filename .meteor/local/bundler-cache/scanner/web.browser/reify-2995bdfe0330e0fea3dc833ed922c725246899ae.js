module.export({default:()=>Container});let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},0);let Segment;module.link('semantic-ui-react',{Segment(v){Segment=v}},1);let Loader;module.link('./loader',{default(v){Loader=v}},2);let MenuTop;module.link('./menuTop',{default(v){MenuTop=v}},3);let Results;module.link('./results',{default(v){Results=v}},4);let Training;module.link('./training',{default(v){Training=v}},5);







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
