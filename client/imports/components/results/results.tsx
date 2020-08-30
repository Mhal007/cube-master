import get from 'lodash/get';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Button, Table } from 'semantic-ui-react';

import { Result } from '../../../../lib/types';
import { Loader } from '../loader';

type column = {
  label: string;
  value: string;
  format?: (value: number, row: Result) => string;
  actionsCell?: boolean;
};

const columns: column[] = [
  {
    label: 'Date',
    value: 'createdAt',
    format: value => moment(value).format('DD-MM-YYYY HH:ss'),
  },
  {
    label: 'Category',
    value: 'category',
  },
  {
    label: 'Scramble',
    value: 'scramble',
  },
  {
    label: 'Time',
    value: 'time',
    format: (value, row) => {
      const valueFormatted = (value / 1000).toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });

      return `${valueFormatted}s${row.foul ? ' (+2)' : ''}`;
    },
  },
  {
    label: 'Actions',
    value: 'actions',
    actionsCell: true,
  },
];

type Props = {
  loading: boolean;
  results: Result[];
};

export const Results = ({ loading, results }: Props): JSX.Element => {
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

  const Header = (): JSX.Element => (
    <Table.Row>
      {columns.map(({ label }, index) => (
        <Table.HeaderCell key={index}>{label}</Table.HeaderCell>
      ))}
    </Table.Row>
  );

  const Row = (row: Result): JSX.Element => (
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
    <>
      {loading ? (
        <Loader />
      ) : (
        <Table
          inverted
          headerRow={Header}
          tableData={results}
          renderBodyRow={Row}
        />
      )}
    </>
  );
};
