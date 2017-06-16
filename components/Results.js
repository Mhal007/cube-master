import React       from 'react';
import {Component} from 'react';
import {Segment} from 'semantic-ui-react'

export default class Results extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {

    }

    render () {
        const {
        } = this;

        return (
            <Segment.Group horizontal>
                <Segment>
                </Segment>
                <Segment textAlign='center'>
                    results
                </Segment>
                <Segment>
                </Segment>
            </Segment.Group>
        )
    }
}