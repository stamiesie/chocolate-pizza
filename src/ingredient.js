import React from 'react';

export default class IngredientElement extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" name={this.props.name}></input>
                <label for={this.props.name}>{this.props.text}</label>
            </div>
        )
    }
}