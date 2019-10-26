import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, List, Segment } from 'semantic-ui-react';
import groupBy from 'lodash/groupBy';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderTooltip = createSliderWithTooltip(Slider);

const AlgSettings = ({
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
    <section className={`alg-settings${settingsDisabled ? ' disabled' : ''}`}>
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <div className="grouping-level">
              <div className="title">Grouping level</div>
              <SliderTooltip
                min={0}
                max={2}
                onChange={setDetailsLevel}
                tipFormatter={value => ['None', 'General', 'Precise'][value]}
                tipProps={{
                  placement: 'bottom',
                  visible: true,
                  borderRadius: '0px'
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
                  onClick={settingsDisabled ? null : onActivateAll}
                >
                  Select all
                </Button>
                <Button
                  secondary
                  onClick={settingsDisabled ? null : onDeactivateAll}
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
              className={`${
                settingsDisabled || algorithm.active ? 'active ' : ''
              }alg`}
              onClick={() =>
                settingsDisabled ? null : onToggleActive(algorithm)
              }
            >
              <img src={`/images/${algorithm.image}`} />
            </div>
          ))}
        </Segment>
      ))}
    </section>
  );
};

AlgSettings.propTypes = {
  algorithms: PropTypes.array.isRequired,
  currentCategory: PropTypes.object.isRequired,
  onActivateAll: PropTypes.func.isRequired,
  onToggleActive: PropTypes.func.isRequired,
  onDeactivateAll: PropTypes.func.isRequired
};

export default AlgSettings;
