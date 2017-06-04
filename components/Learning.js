import React       from 'react';
import {Component} from 'react';
import moment      from 'moment';
import {Loader}    from 'semantic-ui-react'
import {Segment}   from 'semantic-ui-react'

import {Algorithms} from '../collections/algorithms.js';

import Timer from './Timer.js';

export default class Learning extends Component {
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
                image:    '',
                scramble: '',
                solution: ''
            },
            currentAlgorithmId: 0,
            isVisibleSolution:  false,
            isVisibleLoader:    true,
            timerCurrentValue:  0,
            timerStartValue:    0,
            timerStatus:        'resetted'
        };

        this.onChangeAlgorithm = this.onChangeAlgorithm.bind(this);
        this.onGoToNextStatus  = this.onGoToNextStatus.bind(this);
        this.onKeyDown         = this.onKeyDown.bind(this);
        this.onKeyUp           = this.onKeyUp.bind(this);
        this.updateTimerTime   = this.updateTimerTime.bind(this);
    }

    componentDidMount () {
        Meteor.subscribe('algorithms', {
            onError: () => {console.log("onError", arguments)},
            onReady: () => {
                const algorithms = Algorithms.find({}).fetch();

                this.setState({
                    algorithms,
                    currentAlgorithm: algorithms && algorithms[0] || []
                });
                this.setState({isVisibleLoader: false});
            },
        });

        document.body.addEventListener('keydown', this.onKeyDown);
        document.body.addEventListener('keyup'  , this.onKeyUp  );
    }

    componentWillUnmount () {
        document.body.removeEventListener('keydown', this.onKeyDown);
        document.body.removeEventListener('keyup'  , this.onKeyUp  );
    }

    onChangeAlgorithm () {
        if (this.state.timerStatus !== 'timer-off' && this.state.timerStatus !== 'resetted') {
            return;
        }

        const {algorithms} = this.state;
        const newId        = Math.floor(Math.random() * algorithms.length);

        this.setState({
            currentAlgorithm:   this.state.algorithms[newId],
            currentAlgorithmId: newId
        });
    }

    onGoToNextStatus (upOrDown) {
        const {
            timerStatus,
            blocked
        } = this.state;

        if (timerStatus === 'resetted' && upOrDown === 'down' && !blocked.space) {
            this.setState({timerStatus: 'pre-inspection'});
        }
        else if (timerStatus === 'pre-inspection' && upOrDown === 'up') {
            this.setState({
                timerStatus: 'timer-on',
                timerStartValue: moment().valueOf()
            });
            this.timer = setInterval(this.updateTimerTime, 1);
        }
        else if (timerStatus === 'timer-on' && upOrDown === 'down' && !blocked.space) {
            clearInterval(this.timer);
            this.setState({timerStatus: 'timer-off'});
        }
        else if (timerStatus === 'timer-off' && upOrDown === 'down' && !blocked.space) {
            this.onChangeAlgorithm();
            this.setState({timerStatus: 'resetted'});
        }
    }

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
        else if ((event.key === 'Backspace' || event.key === 'Delete') && !blocked.delete) {
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
            this.setState({blocked: {...blocked, space: false}});
        }
        else if (event.key === 'Shift') {
            this.setState({
                blocked: {...blocked, shift: false},
                isVisibleSolution: false
            });
        }
        else if (event.key === 'Control') {
            this.setState({
                blocked:          {...blocked, control: false},
                isVisibleSolution: !isVisibleSolution
            });
        }
        else if (event.key === 'Backspace' || event.key === 'Delete') {
            this.setState({blocked: {...blocked, delete: false}});
        }
    }

    updateTimerTime () {
        this.setState({
            timerCurrentValue: moment().valueOf() - this.state.timerStartValue
        });
    }

    render () {
        const {
            onChangeAlgorithm,
            state: {
                currentAlgorithm: {
                    image,
                    scramble,
                    solution
                },
                isVisibleLoader,
                isVisibleSolution,
                timerCurrentValue
            }
        } = this;

        return (
            <div>
                {isVisibleLoader ? (
                    <Loader content='Loading' />
                ) : (
                    <div>
                        <Segment className="scramble-container">
                            {scramble}
                        </Segment>
                        <Segment className="image-container">
                            <img src={`/images/${image}`} />
                        </Segment>
                        <Segment className="timer-container">
                            <Timer
                                isVisibleSolution={isVisibleSolution}
                                solution={solution}
                                timerCurrentValue={timerCurrentValue}
                            />
                        </Segment>
                        <Segment>
                            <button
                                onClick={onChangeAlgorithm}
                            >
                                Random new alg
                            </button>
                        </Segment>
                    </div>

                )}
            </div>
        )
    }
}