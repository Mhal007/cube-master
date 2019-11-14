var React;module.link('react',{default:function(v){React=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var List,Segment;module.link('semantic-ui-react',{List:function(v){List=v},Segment:function(v){Segment=v}},2);var moment;module.link('moment',{default:function(v){moment=v}},3);var getAverage;module.link('../../utils',{getAverage:function(v){getAverage=v}},4);





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
