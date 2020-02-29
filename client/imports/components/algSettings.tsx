import React, { FC, useEffect, useState } from 'react';
import { Button, List, Segment } from 'semantic-ui-react';
import groupBy from 'lodash/groupBy';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { getAverage } from '../../../lib/utils';
import { AlgorithmWithResults, CategoryWithResults } from '../../../lib/types';
import { store } from '../lib/store';

const SliderTooltip = createSliderWithTooltip(Slider);

type Props = {
  activeAlgorithmIds: string[];
  algorithms: AlgorithmWithResults[];
  currentCategory: CategoryWithResults;
  onActivateAll: () => void;
  onToggleActive: (algorithmId: string) => void;
  onDeactivateAll: () => void;
};

const details = [
  {
    value: 'category',
    label: 'None'
  },
  {
    value: 'type',
    label: 'General'
  },
  {
    value: 'subtype',
    label: 'Precise'
  }
];

const AlgSettings: FC<Readonly<Props>> = ({
  activeAlgorithmIds,
  algorithms,
  currentCategory: { settingsDisabled },
  onActivateAll,
  onToggleActive,
  onDeactivateAll
}) => {
  const [detailsLevel, setDetailsLevel] = useState(
    store.get(store.vars.groupingLevel) ?? 1
  );

  useEffect(() => {
    store.set(store.vars.groupingLevel, detailsLevel);
  }, [detailsLevel]);

  const algorithmsGrouped = groupBy(algorithms, details[detailsLevel].value);

  return (
    <section
      className={`algorithm-settings${settingsDisabled ? ' disabled' : ''}`}
    >
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <div className="grouping-level">
              <div className="title">Grouping level</div>
              <SliderTooltip
                min={0}
                max={2}
                onChange={setDetailsLevel}
                tipFormatter={(value: number): string => details[value].label}
                tipProps={{
                  placement: 'bottom',
                  visible: true
                }}
                value={detailsLevel}
              />
            </div>
          </List.Content>
          <List.Content>
            {!settingsDisabled && (
              <div className="controls">
                <Button
                  secondary
                  onClick={settingsDisabled ? undefined : onActivateAll}
                >
                  Select all
                </Button>
                <Button
                  secondary
                  onClick={settingsDisabled ? undefined : onDeactivateAll}
                >
                  Unselect all
                </Button>
              </div>
            )}
          </List.Content>
        </List.Item>
      </List>

      {Object.entries(algorithmsGrouped).map(([name, values], index) => (
        <Segment key={index}>
          <h5>{name}</h5>
          {values.map(algorithm => (
            <div
              key={algorithm._id}
              className={`algorithm${
                settingsDisabled || activeAlgorithmIds.includes(algorithm._id)
                  ? ' active'
                  : ''
              }`}
              onClick={(): void =>
                settingsDisabled ? undefined : onToggleActive(algorithm._id)
              }
            >
              <img alt={algorithm.name} src={`/images/${algorithm.image}`} />
              <div className="results-average">
                {getAverage(algorithm && algorithm.results)}
              </div>
            </div>
          ))}
        </Segment>
      ))}
    </section>
  );
};

export default AlgSettings;
