let React;module.link('react',{default(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let Button,Segment;module.link('semantic-ui-react',{Button(v){Button=v},Segment(v){Segment=v}},2);let Timer;module.link('./timer',{default(v){Timer=v}},3);





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
