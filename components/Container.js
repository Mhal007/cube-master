import React       from 'react';
import {Component} from 'react';
import keydown     from 'react-keydown';

import Main         from './Main.js';
import {Algorithms} from '../collections/algorithms.js';

const KEYS = [ 'space', 'shift', 'ctrl'];

@ keydown (KEYS)
export default class Container extends Component {
    constructor (props) {
        super(props);

        this.state = {
            algorithms: [],
            currentAlgorithm: {},
            currentAlgorithmId: 0
        };

        this.onChangeAlgorithm = this.onChangeAlgorithm.bind(this);
    }
    /*
    @keydown( 'enter' ) // or specify `which` code directly, in this case 13
    submit( event ) {
        // do something, or not, with the keydown event, maybe event.preventDefault()
        console.log('a');
    }
    */

    componentDidMount () {
        Meteor.subscribe('algorithms', {
            onError: () => {console.log("onError", arguments)},
            onReady: () => {
                this.setState({
                    algorithms: Algorithms.find({}).fetch()
                })
            },
        });
    }

    componentWillReceiveProps({keydown}) {
        console.log(keydown);

        console.log('z');
        if (keydown.event) {
            console.log(keydown.event);
            console.log(keydown.event.which);
        }
    }

    onChangeAlgorithm () {
        const newId = Math.floor(Math.random() * this.state.algorithms.length);

        this.setState({
            currentAlgorithmId: newId,
            currentAlgorithm:   this.state.algorithms[newId]
        })
    }

    render () {
        const {
            onChangeAlgorithm,
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