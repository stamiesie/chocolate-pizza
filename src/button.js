import React from 'react';

export class NavButton extends React.Component {
    render() {
        return (
            <button>
                <img alt = "icon" src = {this.props.image}></img>
            </button>
        );
    }
}