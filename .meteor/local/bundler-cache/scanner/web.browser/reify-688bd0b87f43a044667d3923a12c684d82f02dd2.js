let React;module.link('react',{default(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let List,Segment;module.link('semantic-ui-react',{List(v){List=v},Segment(v){Segment=v}},2);let moment;module.link('moment',{default(v){moment=v}},3);let getAverage;module.link('../utils',{getAverage(v){getAverage=v}},4);





const Averages = ({ currentAlgorithm, currentCategory }) => {
  const currentAlgorithmAvg = getAverage(
    currentAlgorithm && currentAlgorithm.results
  );
  const currentCategoryAvg = getAverage(
    currentCategory && currentCategory.results
  );

  const averages = ['OLL', 'PLL'].includes(currentCategory.value)
    ? [
        {
          header: 'Average for this algorithm',
          description: currentAlgorithmAvg
            ? moment(currentAlgorithmAvg).format('ss:SSS')
            : 'No records'
        },
        {
          header: `Average for all ${currentCategory.value} algorithms`,
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('ss:SSS')
            : 'No records'
        }
      ]
    : [
        {
          header: `Average for all in ${currentCategory.value}`,
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('mm:ss:SSS')
            : 'No records'
        }
      ];

  return (
    <Segment className="averages">
      <List inverted items={averages} />
    </Segment>
  );
};

Averages.propTypes = {
  currentAlgorithmAvg: PropTypes.number,
  currentCategory: PropTypes.object,
  currentCategoryAvg: PropTypes.number
};

module.exportDefault(Averages);
