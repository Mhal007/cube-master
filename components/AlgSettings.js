import React     from 'react';
import PropTypes from 'prop-types';

const AlgSettings = ({
    algorithms,
    onActiveToggle
}) =>
    <section className="alg-settings">
        {algorithms.map(alg =>
            <div key={alg._id} className={`${alg.active ? 'active ' : ''}alg`} onClick={() => onActiveToggle(alg)}>
                <img src={`/images/${alg.image}`} />
            </div>
        )}
    </section>
;

AlgSettings.propTypes = {
    algorithms:     PropTypes .array .isRequired,
    onActiveToggle: PropTypes .func  .isRequired
};

export default AlgSettings;
