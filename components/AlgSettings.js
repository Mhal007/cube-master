import React from 'react';
import PropTypes from 'prop-types';

const AlgSettings = ({
  algorithms,
  currentCategory: { settingsDisabled },
  onActivateAll,
  onToggleActive,
  onDeactivateAll
}) => (
  <section className={`alg-settings${settingsDisabled ? ' disabled' : ''}`}>
    <div className="controls">
      <button onClick={settingsDisabled ? null : onActivateAll}>
        Select all
      </button>
      <br />
      <br />
      <button onClick={settingsDisabled ? null : onDeactivateAll}>
        Unselect all
      </button>
      <br />
      <br />
    </div>
    {algorithms.map(alg => (
      <div
        key={alg._id}
        className={`${settingsDisabled || alg.active ? 'active ' : ''}alg`}
        onClick={() => (settingsDisabled ? null : onToggleActive(alg))}
      >
        <img src={`/images/${alg.image}`} />
      </div>
    ))}
  </section>
);
AlgSettings.propTypes = {
  algorithms: PropTypes.array.isRequired,
  currentCategory: PropTypes.object.isRequired,
  onActivateAll: PropTypes.func.isRequired,
  onToggleActive: PropTypes.func.isRequired,
  onDeactivateAll: PropTypes.func.isRequired
};

export default AlgSettings;
