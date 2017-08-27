import React       from 'react';
import moment      from 'moment';
import PropTypes   from 'prop-types';
import {Component} from 'react';
import {Grid}      from 'semantic-ui-react'
import {Menu}      from 'semantic-ui-react'
import {Segment}   from 'semantic-ui-react'

import TrainingMain from './TrainingMain.js';
import AlgSettings  from './AlgSettings.js';

import {Algorithms} from '../collections/algorithms.js';
import {Results}    from '../collections/results.js';

class Training extends Component {
    constructor (props) {
        super(props);

        this.state = {
            algorithms: [],
            blocked: {
                'control': false,
                'delete':  false,
                'shift':   false,
                'space':   false
            },
            currentAlgorithm: {
                category: '',
                image:    '',
                ref:      '',
                scramble: '',
                solution: '',
                type:     ''
            },
            currentAlgorithmAvg: 0,
            currentAlgorithmId:  0,
            currentCategory:     'OLL',
            currentCategoryAvg:  0,
            isVisibleSolution:   false,
            results:             [],
            settingsOpened:      true,
            timerCurrentValue:   0,
            timerStartValue:     0,
            timerStatus:         'resetted'
        };

        this.countAverages       = this.countAverages.bind(this);
        this.getCurrentAlgorithm = this.getCurrentAlgorithm.bind(this);
        this.onChangeAlgorithm   = this.onChangeAlgorithm.bind(this);
        this.onChangeCategory    = this.onChangeCategory.bind(this);
        this.onGoToNextStatus    = this.onGoToNextStatus.bind(this);
        this.onKeyDown           = this.onKeyDown.bind(this);
        this.onKeyUp             = this.onKeyUp.bind(this);
        this.onReset             = this.onReset.bind(this);
        this.onActivateAll       = this.onActivateAll.bind(this);
        this.onDeactivateAll     = this.onDeactivateAll.bind(this);
        this.updateTimerTime     = this.updateTimerTime.bind(this);
    }

    componentDidMount () {
        Meteor.subscribe('algorithms', {
            onError: () => {console.log("Error occured:", arguments)},
            onReady: () => {
                const algorithms = Algorithms.find({category: this.state.currentCategory}).fetch();
                this.setState({algorithms});

                Meteor.subscribe('results', {
                    onError: () => {console.log("Error occured:", arguments)},
                    onReady: () => {
                        const results = Results.find({category: this.state.currentCategory, real: {$in: this.props.debugging ? [null, false] : [true]}}).fetch();
                        this.setState({results});

                        this.onChangeAlgorithm({algorithms, results});
                        this.props.onToggleLoader(false);
                    },
                });
            },
        });

        document.body.addEventListener('keydown', this.onKeyDown);
        document.body.addEventListener('keyup'  , this.onKeyUp  );
    }

    componentWillUnmount () {
        document.body.removeEventListener('keydown', this.onKeyDown);
        document.body.removeEventListener('keyup'  , this.onKeyUp  );
    }

    componentWillReceiveProps (newProps) {
        if (this.props.debugging !== newProps.debugging) {
            const results = Results.find({category: this.state.currentCategory, real: {$in: newProps.debugging ? [null, false] : [true]}}).fetch();
            this.setState({results});
            this.countAverages({results});
        }
    }

    countAverages ({currentCategory, results = Results.find({category: currentCategory || this.state.currentCategory, real: {$in: this.props.debugging ? [null, false] : [true]}}).fetch() || [], algRef = 1}) {
        const currentAlg = results.filter(alg => alg.ref === algRef);
        const currentCat = results;

        let sumAlg = 0;
        let sumCat = 0;

        currentAlg.forEach(alg => sumAlg += alg.time);
        currentCat.forEach(alg => sumCat += alg.time);

        this.setState({
            results,
            currentAlgorithmAvg: sumAlg / currentAlg.length / 1000.0 || 0,
            currentCategoryAvg:  sumCat / currentCat.length / 1000.0 || 0
        });
    }

    onChangeAlgorithm ({algorithms, currentAlgorithmId, currentCategory, results} = this.state) {
        this.onReset();

        const active = algorithms.filter(alg => alg.active);

        let newId = Math.floor(Math.random() * active.length);
        while (newId === currentAlgorithmId) {
            newId = Math.floor(Math.random() * active.length);
        }

        const newAlgorithm = active[newId];

        this.setState({currentAlgorithm: newAlgorithm, currentAlgorithmId: newAlgorithm._id});
        this.countAverages({algRef: newAlgorithm.ref, currentCategory, results});
    }

    onChangeCategory = (e, {name}) => {
        this.props.onToggleLoader(true);

        const algorithms = Algorithms.find({category: name}).fetch();
        const results    = Results.find({category: this.state.currentCategory}).fetch();

        this.setState({
            algorithms,
            currentCategory: name,
            results
        });

        this.onChangeAlgorithm({algorithms, currentCategory: name});
        this.props.onToggleLoader(false);
    };

    getCurrentAlgorithm = () => this.state.currentAlgorithm;

    onActiveToggle = algorithm => {
        Meteor.call('algorithms.toggleActive', algorithm._id, !algorithm.active);
        const currentAlgs = this.state.algorithms;

        currentAlgs.map(alg => {
            if (alg._id === algorithm._id) {
                alg.active = !alg.active;
            }
        });
        this.setState({algorithms: currentAlgs});
    };

    onActivateAll = () => {
        Meteor.call('algorithms.activateAll');
        const currentAlgs = this.state.algorithms;
        currentAlgs.map(alg => {alg.active = true;});
        this.setState({algorithms: currentAlgs});
    };

    onDeactivateAll = () => {
        Meteor.call('algorithms.deactivateAll');
        const currentAlgs = this.state.algorithms;
        currentAlgs.map(alg => {alg.active = false;});
        this.setState({algorithms: currentAlgs});
    };

    onKeyDown (event) {
        const blocked = this.state.blocked;

        if ((event.key === 'Enter' || event.key === ' ') && !blocked.space) {
            event.preventDefault();
            this.onGoToNextStatus('down');
            this.setState({blocked: {...blocked, space:   true}});
        } else if (event.key === 'r') {
            event.preventDefault();
            this.onChangeAlgorithm();
        } else if (event.key === 'Shift' && !blocked.shift) {
            event.preventDefault();
            this.setState({
                blocked: {...blocked, shift: true},
                isVisibleSolution: true
            });
        } else if (event.key === 'Control' && !blocked.control) {
            event.preventDefault();
            this.setState({blocked: {...blocked, control: true}});
        } else if ((event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') && !blocked.delete) {
            event.preventDefault();
            this.setState({blocked: {...blocked, delete:  true}});
        }
    }

    onKeyUp (event) {
        const {
            blocked,
            isVisibleSolution
        } = this.state;

        if (event.key === 'Enter' || event.key === ' ') {
            this.onGoToNextStatus('up');
            this.setState({blocked: {...blocked, space:   false}});
        }
        else if (event.key === 'Shift') {
            this.setState({blocked: {...blocked, shift:   false}, isVisibleSolution: false});
        }
        else if (event.key === 'Control') {
            this.setState({blocked: {...blocked, control: false}, isVisibleSolution: !isVisibleSolution});
        }
        else if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') {
            this.onChangeAlgorithm();
            this.setState({blocked: {...blocked, delete:  false}});
        }
    }

    onGoToNextStatus (upOrDown) {
        const {timerStatus, blocked} = this.state;

        if (timerStatus === 'resetted' && upOrDown === 'down' && !blocked.space) {
            this.setState({timerStatus: 'pre-inspection'});
        }
        else if (timerStatus === 'pre-inspection' && upOrDown === 'up') {
            this.setState({timerStatus: 'timer-on', timerStartValue: moment().valueOf()});
            this.timer = setInterval(this.updateTimerTime, 1);
        }
        else if (timerStatus === 'timer-on' && upOrDown === 'down' && !blocked.space) {
            clearInterval(this.timer);
            this.setState({timerStatus: 'timer-off'});
        }
        else if (timerStatus === 'timer-off' && upOrDown === 'down' && !blocked.space) {
            /* Save time */
            Meteor.call('results.insert', Object.assign(this.getCurrentAlgorithm(), {
                time: this.state.timerCurrentValue,
                real: !this.props.debugging
            }));
            this.onChangeAlgorithm();
            this.setState({timerStatus: 'resetted', timerCurrentValue: 0});
        }
    }

    onReset () {
        clearInterval(this.timer);
        this.setState({timerStatus: 'resetted', timerCurrentValue: 0});
    }

    updateTimerTime () {
        this.setState({timerCurrentValue: moment().valueOf() - this.state.timerStartValue});
    }

    render () {
        const {
            onActivateAll,
            onActiveToggle,
            onChangeAlgorithm,
            onChangeCategory,
            onDeactivateAll,

            state: {
                algorithms,
                currentAlgorithm,
                currentAlgorithmAvg,
                currentCategory,
                currentCategoryAvg,
                isVisibleSolution,
                timerCurrentValue
            }
        } = this;

        return (
            <div>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item name='OLL'   active={currentCategory === 'OLL'}   onClick={onChangeCategory} />
                            <Menu.Item name='PLL'   active={currentCategory === 'PLL'}   onClick={onChangeCategory} />
                            <Menu.Item name='3x3x3' active={currentCategory === '3x3x3'} onClick={onChangeCategory} />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign='center'>
                        <TrainingMain
                            currentAlgorithm  = {currentAlgorithm}
                            isVisibleSolution = {isVisibleSolution}
                            onChangeAlgorithm = {onChangeAlgorithm}
                            timerCurrentValue = {timerCurrentValue}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            Average for this algorithm:
                            <br />
                            {currentAlgorithmAvg ? `${Math.round(currentAlgorithmAvg * 1000) / 1000}s` : 'No records'}

                            <br /><br />
                            Average for all {this.state.currentCategory} algorithms:
                            <br />
                            {currentCategoryAvg ? `${Math.round(currentCategoryAvg * 1000) / 1000}s` : 'No records'}
                        </Segment>
                    </Grid.Column>
                </Grid>

                {this.state.settingsOpened && (
                    <AlgSettings
                        algorithms={algorithms}
                        onActivateAll={onActivateAll}
                        onActiveToggle={onActiveToggle}
                        onDeactivateAll={onDeactivateAll}
                    />
                )}
            </div>
        );
    }
}

Training.propTypes = {
    onToggleLoader: PropTypes .func .isRequired,
    debugging:      PropTypes .bool .isRequired
};

export default Training;

