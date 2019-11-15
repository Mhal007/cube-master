import React, { FunctionComponent, ReactNode } from 'react';
import { Table } from 'semantic-ui-react';
import moment from 'moment';
import get from 'lodash/get';

import { result } from '../../../../lib/types';

type column = {
  label: string;
  value: string;
  format?: Function;
};

const columns: column[] = [
  {
    label: 'Date',
    value: 'createdAt',
    format: (value: number): string => moment(value).format('DD-MM-YYYY HH:ss')
  },
  {
    label: 'Category',
    value: 'category'
  },
  {
    label: 'Scramble',
    value: 'scramble'
  },
  {
    label: 'Time',
    value: 'time',
    format: (value: number): string =>
      (value / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      }) + 's'
  }
];

const Header = (): ReactNode => (
  <Table.Row>
    {columns.map(({ label }, index) => (
      <Table.HeaderCell key={index}>{label}</Table.HeaderCell>
    ))}
  </Table.Row>
);

const Row = (row: result): ReactNode => (
  <Table.Row>
    {columns.map(({ value, format }, index) => (
      <Table.Cell key={index}>
        {format ? format(get(row, value)) : get(row, value)}
      </Table.Cell>
    ))}
  </Table.Row>
);

type Props = {
  results: result[];
};

const ResultsTab: FunctionComponent<Props> = ({ results }) => (
  <Table inverted headerRow={Header} tableData={results} renderBodyRow={Row} />
);

export default ResultsTab;
