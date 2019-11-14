let React;module.link('react',{default(v){React=v}},0);let Dimmer,LoaderSemantic;module.link('semantic-ui-react',{Dimmer(v){Dimmer=v},Loader(v){LoaderSemantic=v}},1);


const Loader = () => (
  <Dimmer active page style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
    <LoaderSemantic size="large">Loading</LoaderSemantic>
  </Dimmer>
);

module.exportDefault(Loader);
