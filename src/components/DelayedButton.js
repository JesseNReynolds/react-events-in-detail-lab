// Code DelayedButton Component Here
import React from 'react';

export default class Welcome extends React.Component {

    render() {
        return (
            <button
            onClick={event => this.doTheThing(event)}>

            </button>
        )
    }
    
    doTheThing(event) {
        event.persist();
        setTimeout(() => { this.props.onDelayedClick(event); 
            }, this.props.delay);
    }

}

