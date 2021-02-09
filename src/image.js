import React from 'react';

export default class ImageComponent extends React.Component {
    render() {
        return (
            <div className = "pizza-image">
                <img alt = "Chocolate Pizza" src = "choco-pizza.png"/>
            </div>
        );
    }
}