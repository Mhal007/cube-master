var React;module.link('react',{default:function(v){React=v}},0);var List,Segment;module.link('semantic-ui-react',{List:function(v){List=v},Segment:function(v){Segment=v}},1);


const tipsList = [
  {
    header: 'Enter / Space',
    description: '... -> start timer -> stop timer -> save result -> ...'
  },
  {
    header: 'r',
    description: 'Randomize new algorithm'
  },
  {
    header: 'Shift (hold)',
    description: 'Take a peek at the solution'
  },
  {
    header: 'Control',
    description: 'Show / hide the solution'
  },
  {
    header: 'Backspace / Delete / Escape',
    description: "Reset timer - don't save the solution"
  }
].map(tip => ({ ...tip, icon: 'lightbulb outline' }));

const TipsAndTricks = () => (
  <Segment>
    Shortcuts list:
    <List celled inverted items={tipsList} />
  </Segment>
);

module.exportDefault(TipsAndTricks);
