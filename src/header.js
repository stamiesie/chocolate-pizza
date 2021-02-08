import React from 'react';
import { NavButton } from './button.js';

export default class ChocolateHeader extends React.Component {
    render() {
        return <div>
            <img alt="logo" src="logo.png"></img>
            <h1>Delicious</h1>
            <h3>THE BEST FOOD ON THE WEB</h3>
            <NavButton image = "fb-icon.png"/>
            <NavButton image = "twit-icon.png"/>
            <NavButton image = "gp-icon.png"/>
            <NavButton image = "insta-icon.png"/>
            <NavButton image = "flic-icon.png"/>
            <NavButton image = "pint-icon.png"/>
            <NavButton image = "rss-icon.png"/>
            <NavButton image = "mail-icon.png"/>

        </div>
    }
}