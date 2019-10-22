import React from 'react';
import PropTypes from 'prop-types';

const AlgSettings = ({
  algorithms,
  disabled,
  onActivateAll,
  onActiveToggle,
  onDeactivateAll
}) => (
  <section className={`alg-settings${disabled ? ' disabled' : ''}`}>
    <div className="controls">
      <button onClick={onActivateAll}>Select all</button>
      <br />
      <br />
      <button onClick={onDeactivateAll}>Unselect all</button>
      <br />
      <br />
    </div>
    {algorithms.map(alg => (
      <div
        key={alg._id}
        className={`${alg.active ? 'active ' : ''}alg`}
        onClick={() => onActiveToggle(alg)}
      >
        <img src={`/images/${alg.image}`} />
      </div>
    ))}
  </section>
);
AlgSettings.propTypes = {
  algorithms: PropTypes.array.isRequired,
  onActivateAll: PropTypes.func.isRequired,
  onActiveToggle: PropTypes.func.isRequired,
  onDeactivateAll: PropTypes.func.isRequired
};

export default AlgSettings;
