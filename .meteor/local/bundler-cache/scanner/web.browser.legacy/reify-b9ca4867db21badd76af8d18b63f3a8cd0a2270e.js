var React;module.link('react',{default:function(v){React=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var Button,Segment;module.link('semantic-ui-react',{Button:function(v){Button=v},Segment:function(v){Segment=v}},2);var Timer;module.link('./timer',{default:function(v){Timer=v}},3);





const TrainingMain = ({
  onChangeAlgorithm,
  currentAlgorithm: { image, scramble, solution } = {},
  isVisibleSolution,
  timerCurrentValue
}) => (
  <section className="training-main">
    {scramble && <Segment className="scramble-segment">{scramble}</Segment>}
    {image && (
      <Segment className="image-segment">
        <img src={`/images/${image}`} />
      </Segment>
    )}
    <Segment className="timer-segment">
      <Timer
        isVisibleSolution={isVisibleSolution}
        solution={solution}
        timerCurrentValue={timerCurrentValue}
      />
    </Segment>
    {(image || solution) && (
      <Segment>
        <Button primary onClick={() => onChangeAlgorithm()}>
          Randomize new
        </Button>
      </Segment>
    )}
  </section>
);

TrainingMain.propTypes = {
  currentAlgorithm: PropTypes.object,
  isVisibleSolution: PropTypes.bool.isRequired,
  onChangeAlgorithm: PropTypes.func.isRequired,
  timerCurrentValue: PropTypes.number.isRequired
};

module.exportDefault(TrainingMain);
