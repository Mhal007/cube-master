import React, { FunctionComponent, useState } from 'react';
import { Button, List, Segment } from 'semantic-ui-react';
import groupBy from 'lodash/groupBy';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { getAverage } from '../../../lib/utils';
import { algorithmWithResults, categoryWithResults } from '../../../lib/types';

const SliderTooltip = createSliderWithTooltip(Slider);

type Props = {
  activeAlgorithmIds: string[];
  algorithms: algorithmWithResults[];
  currentCategory: categoryWithResults;
  onActivateAll: () => void;
  onToggleActive: (algorithmId: string) => void;
  onDeactivateAll: () => void;
};

const AlgSettings: FunctionComponent<Props> = ({
  activeAlgorithmIds,
  algorithms,
  currentCategory: { settingsDisabled },
  onActivateAll,
  onToggleActive,
  onDeactivateAll
}) => {
  const [detailsLevel, setDetailsLevel] = useState(1);

  const algorithmsGrouped =
    detailsLevel === 0
      ? groupBy(algorithms, 'category')
      : detailsLevel === 1
      ? groupBy(algorithms, 'type')
      : detailsLevel === 2
      ? groupBy(algorithms, 'subtype')
      : [];

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
                tipFormatter={(value: number): string =>
                  ['None', 'General', 'Precise'][value]
                }
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
