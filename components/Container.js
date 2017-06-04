import React       from 'react';
import {Component} from 'react';
import Main         from './Main.js';
import {Algorithms} from '../collections/algorithms.js';

let blocked = false;

export default class Container extends Component {
    constructor (props) {
        super(props);

        this.state = {
            algorithms: [],
            currentAlgorithm: {},
            currentAlgorithmId: 0,
            isShowedSolution: false
        };

        this.onChangeAlgorithm = this.onChangeAlgorithm.bind(this);
        this.onKeyDown         = this.onKeyDown.bind(this);
        this.onKeyUp           = this.onKeyUp.bind(this);
    }

    componentDidMount () {
        Meteor.subscribe('algorithms', {
            onError: () => {console.log("onError", arguments)},
            onReady: () => {
                this.setState({
                    algorithms: Algorithms.find({}).fetch()
                })
            },
        });

        document.body.addEventListener('keydown', e => this.onKeyDown(e));
        document.body.addEventListener('keyup'  , e => this.onKeyUp  (e));
    }

    onChangeAlgorithm () {
        const newId = Math.floor(Math.random() * this.state.algorithms.length);

        this.setState({
            currentAlgorithmId: newId,
            currentAlgorithm:   this.state.algorithms[newId]
        })
    }

    onKeyDown (event) {
        if (event.key === 'Shift' && !blocked) {
            this.setState({isShowedSolution: true});
            blocked = true;
        }
    }

    onKeyUp (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            console.log('Next');
        } else if (event.key === 'Shift') {
            this.setState({isShowedSolution: false});
            blocked = false;
        } else if (event.key === 'Control') {
            this.setState({isShowedSolution: !this.state.isShowedSolution});
        } else if (event.key === 'Backspace' || event.key === 'Delete') {
            console.log('Delete time');
        }
    }

    render () {
        const {
            onChangeAlgorithm,
            onKeyDown,
            state: {
                currentAlgorithm
            }
        } = this;

        return (
            <div className="container">
                <header>
                    h
                </header>

                <main>
                    <Main
                        currentAlgorithm={currentAlgorithm}
                    />
                </main>

                <footer>
                    <button
                        onClick={onChangeAlgorithm}
                    >
                        Random new alg
                    </button>
                </footer>

            </div>
        );
    }
}