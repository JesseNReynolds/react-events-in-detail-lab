// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    render() {
        return(
            <button
                onClick={(event) => {this.coords(event)}}>
            </button>
        )
    }

    coords(event) {
        const x = event.clientX
        const y = event.clientY
        this.props.onReceiveCoordinates([x, y])
    }

}

