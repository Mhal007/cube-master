import React       from 'react';
import {Component} from 'react';
import {Segment}   from 'semantic-ui-react'

import Learning from './Learning.js';
import MenuTop  from './MenuTop.js';
import Training from './Training.js';

export default class Container extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentTab: 'learning'
        };

        this.onChangeTab = this.onChangeTab.bind(this);
    }

    onChangeTab (e, {name}) {
        this.setState({currentTab: name});
    }

    render () {
        const {
            onChangeTab,
            state: {
                currentTab,
            }
        } = this;

        return (
            <div className="container">
                <header>
                    <MenuTop
                        currentTab={currentTab}
                        onChangeTab={onChangeTab}
                    />
                </header>

                <main>
                    {currentTab === 'learning' && (
                        <Segment.Group horizontal>
                            <Segment>
                            </Segment>
                            <Segment textAlign='center'>
                                <Learning />
                            </Segment>
                            <Segment>
                            </Segment>
                        </Segment.Group>
                    )}
                    {currentTab === 'training' && (
                        <Segment.Group horizontal>
                            <Segment>
                            </Segment>
                            <Segment textAlign='center'>
                                <Training />
                            </Segment>
                            <Segment>
                            </Segment>
                        </Segment.Group>
                    )}
                </main>

                <footer>
                </footer>

            </div>
        );
    }
}