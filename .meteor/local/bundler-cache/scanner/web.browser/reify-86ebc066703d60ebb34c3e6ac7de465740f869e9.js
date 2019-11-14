let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},0);let Table;module.link('semantic-ui-react',{Table(v){Table=v}},1);let moment;module.link('moment',{default(v){moment=v}},2);



const columns = [
  {
    label: 'Date',
    value: 'createdAt',
    format: value => moment(value).format('DD-MM-YYYY HH:ss')
  },
  {
    label: 'Category',
    value: 'category'
  },
  {
    label: 'Debugging',
    value: 'real',
    format: value => (value ? 'no' : 'yes') // not real means that it is debugging
  },
  {
    label: 'Scramble',
    value: 'scramble'
  },
  {
    label: 'Time',
    value: 'time',
    format: value =>
      (value / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      }) + 's'
  }
];

class ResultsTab extends Component {
  constructor(args) {
    super(args);
  }

  renderHeader = () => (
    <Table.Row>
      {columns.map(({ label }, index) => (
        <Table.HeaderCell key={index}>{label}</Table.HeaderCell>
      ))}
    </Table.Row>
  );

  renderRow = row => (
    <Table.Row>
      {columns.map(({ value, format = value => value }, index) => (
        <Table.Cell key={index}>{format(row[value])}</Table.Cell>
      ))}
    </Table.Row>
  );

  render() {
    const { results } = this.props;

    return (
      <Table
        inverted
        headerRow={this.renderHeader}
        tableData={results}
        renderBodyRow={this.renderRow}
      />
    );
  }
}

module.exportDefault(ResultsTab);
