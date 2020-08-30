import React, { FC, ReactNode } from 'react';
import { Button, Table } from 'semantic-ui-react';
import moment from 'moment';
import get from 'lodash/get';

import { Result } from '../../../../lib/types';

type column = {
  label: string;
  value: string;
  format?: Function;
  actionsCell?: boolean;
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
    format: (value: number, row: Result): string => {
      const valueFormatted = (value / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      });

      return `${valueFormatted}s${row.foul ? ' (+2)' : ''}`;
    }
  },
  {
    label: 'Actions',
    value: 'actions',
    actionsCell: true
  }
];

type Props = {
  results: Result[];
};

const Results = ({ results }: Props) => {
  const onResultRemove = (resultId?: string) => {
    if (resultId) {
      Meteor.call('results.remove', resultId);
    }
  };

  const onResultFoulToggle = (resultId?: string, newFoul?: boolean) => {
    if (resultId) {
      Meteor.call('results.setFoul', resultId, newFoul);
    }
  };

  const Header = (): ReactNode => (
    <Table.Row>
      {columns.map(({ label }, index) => (
        <Table.HeaderCell key={index}>{label}</Table.HeaderCell>
      ))}
    </Table.Row>
  );

  const Row = (row: Result): ReactNode => (
    <Table.Row key={row._id}>
      {columns.map(({ actionsCell, format, value }, index) => (
        <Table.Cell key={index}>
          {actionsCell ? (
            <>
              <Button
                basic
                color="red"
                icon="remove"
                onClick={() => onResultRemove(row._id)}
              />
              <Button
                basic
                color="green"
                onClick={() => onResultFoulToggle(row._id, !row.foul)}
              >
                +2
              </Button>
            </>
          ) : format ? (
            format(get(row, value), row)
          ) : (
            get(row, value)
          )}
        </Table.Cell>
      ))}
    </Table.Row>
  );

  return (
    <Table
      inverted
      headerRow={Header}
      tableData={results}
      renderBodyRow={Row}
    />
  );
};

export default Results;
