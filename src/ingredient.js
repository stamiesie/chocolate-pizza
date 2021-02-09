import React from 'react';

export default class IngredientElement extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox"></input>
                <label>{this.props.text}</label>
            </div>
        )
    }
}