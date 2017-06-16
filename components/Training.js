import React       from 'react';
import moment      from 'moment';
import PropTypes   from 'prop-types';
import {Component} from 'react';
import {Grid}      from 'semantic-ui-react'
import {Menu}      from 'semantic-ui-react'
import {Segment}   from 'semantic-ui-react'

import TrainingMain from './TrainingMain.js';

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
            timerCurrentValue:   0,
            timerStartValue:     0,
            timerStatus:         'resetted'
        };

        this.countAverages       = this.countAverages.bind(this);
        this.getCurrentAlgorithm = this.getCurrentAlgorithm.bind(this);
        this.onChangeAlgorithm   = this.onChangeAlgorithm.bind(this);
        this.onGoToNextStatus    = this.onGoToNextStatus.bind(this);
        this.onKeyDown           = this.onKeyDown.bind(this);
        this.onKeyUp             = this.onKeyUp.bind(this);
        this.onReset             = this.onReset.bind(this);
        this.updateTimerTime     = this.updateTimerTime.bind(this);
    }

    countAverages ({results = Results.find({category: this.state.currentCategory, real: {$in: this.props.tests ? [null, false] : [true]}}).fetch() || [], algId = 0, newTime}) {
        const currentAlg = results[algId] && [                                ].concat(results.filter(alg => alg.ref      === results[algId].ref     ) || []) || [];
        const currentCat = results[algId] && (newTime ? [{time: newTime}] : []).concat(results.filter(alg => alg.category === results[algId].category) || []) || [];

        let sumAlg = 0;
        let sumCat = 0;

        currentAlg.forEach(alg => sumAlg += alg.time);
        currentCat.forEach(alg => sumCat += alg.time);

        this.setState({
            results,
            currentAlgorithmAvg: sumAlg / currentAlg.length || 0,
            currentCategoryAvg:  sumCat / currentCat.length || 0
        });
    }

    componentDidMount () {
        Meteor.subscribe('algorithms', {
            onError: () => {console.log("Error occured:", arguments)},
            onReady: () => {
                const algorithms = Algorithms.find({category: this.state.currentCategory}).fetch();

                this.setState({algorithms, currentAlgorithm: algorithms && algorithms[0] || {}});
            },
        });

        Meteor.subscribe('results', {
            onError: () => {console.log("Error occured:", arguments)},
            onReady: () => {
                const results = Results.find({category: this.state.currentCategory, real: {$in: this.props.tests ? [null, false] : [true]}}).fetch();
                this.countAverages({results});

                this.props.onToggleLoader(false);
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
        if (this.props.tests !== newProps.tests) {
            const results = Results.find({category: this.state.currentCategory, real: {$in: newProps.tests ? [null, false] : [true]}}).fetch();
            this.countAverages({results});
        }
    }

    onChangeCategory = (e, {name}) => {
        this.props.onToggleLoader(true);

        const algorithms = Algorithms.find({category: name}).fetch();
        const results    = Results.find({category: this.state.currentCategory}).fetch();

        this.setState({
            algorithms,
            currentAlgorithm: algorithms && algorithms[0] || {},
            currentCategory: name,
            results
        });

        this.props.onToggleLoader(false);
    };

    getCurrentAlgorithm = () => this.state.currentAlgorithm;

    onKeyDown (event) {
        const blocked = this.state.blocked;

        if (event.key === 'Shift' && !blocked.shift) {
            this.setState({
                blocked: {...blocked, shift: true},
                isVisibleSolution: true
            });
        }
        else if ((event.key === 'Enter' || event.key === ' ') && !blocked.space) {
            this.onGoToNextStatus('down');
            this.setState({blocked: {...blocked, space:   true}});
        }
        else if (event.key === 'Control' && !blocked.control) {
            this.setState({blocked: {...blocked, control: true}});
        }
        else if ((event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Escape') && !blocked.delete) {
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
            this.onReset();
            this.setState({blocked: {...blocked, delete:  false}});
        }
    }

    onChangeAlgorithm ({newTime}) {
        if (this.state.timerStatus !== 'timer-off' && this.state.timerStatus !== 'resetted') {
            return;
        }

        let newId = Math.floor(Math.random() * this.state.algorithms.length);
        while (newId === this.state.currentAlgorithmId) {
            newId = Math.floor(Math.random() * this.state.algorithms.length);
        }

        this.setState({currentAlgorithm: this.state.algorithms[newId], currentAlgorithmId: newId});
        this.countAverages({algId: newId, newTime});
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
                real: !this.props.tests
            }));
            this.onChangeAlgorithm({newTime: this.state.timerCurrentValue});

            this.setState({timerStatus: 'resetted', timerCurrentValue: 0});
        }
    }

    onReset () {
        const {timerStatus} = this.state;

        if (timerStatus === 'timer-on') {
            clearInterval(this.timer);
            this.setState({timerStatus: 'resetted', timerCurrentValue: 0});
        } else if (timerStatus === 'timer-off') {
            clearInterval(this.timer);
            this.onChangeAlgorithm({});
            this.setState({timerStatus: 'resetted', timerCurrentValue: 0});
        }
    }

    updateTimerTime () {
        this.setState({timerCurrentValue: moment().valueOf() - this.state.timerStartValue});
    }

    render () {
        const {
            onChangeAlgorithm,
            onChangeCategory,

            state: {
                currentAlgorithm,
                currentAlgorithmAvg,
                currentCategory,
                currentCategoryAvg,
                isVisibleSolution,
                timerCurrentValue
            }
        } = this;

        return (
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
                        {Math.round(currentAlgorithmAvg * 100) / 100}

                        <br /><br />
                        Average for all {this.state.currentCategory} algorithms:
                        <br />
                        {Math.round(currentCategoryAvg * 100) / 100}
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

Training.propTypes = {
    onToggleLoader: PropTypes .func .isRequired,
    tests:          PropTypes .bool .isRequired
};

export default Training;

