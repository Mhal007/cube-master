var React;module.link('react',{default:function(v){React=v}},0);var Dimmer,LoaderSemantic;module.link('semantic-ui-react',{Dimmer:function(v){Dimmer=v},Loader:function(v){LoaderSemantic=v}},1);


const Loader = () => (
  <Dimmer active page style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
    <LoaderSemantic size="large">Loading</LoaderSemantic>
  </Dimmer>
);

module.exportDefault(Loader);
