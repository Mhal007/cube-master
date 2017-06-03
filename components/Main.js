import React     from 'react';
import PropTypes from 'prop-types';

import Timer from './Timer.js';

const Main = ({
    currentAlgorithm
}) =>
    <div>
        <section className="scramble">
            {currentAlgorithm.scramble}
        </section>
        <section className="image">
            {currentAlgorithm.image}
        </section>
        <section className="timer">
            {/*<Timer    />*/}
        </section>
    </div>
;

Main.propTypes = {
};

export default Main;