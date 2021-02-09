import React from 'react';
import { NavButton } from './button.js';

export default class ChocolateHeader extends React.Component {
    render() {
        return <div className="page-header">
            <div className="header-image">
                <img alt="logo" src="logo.png"></img>
            </div>

            <div className="header-title">
                <h1>Delicious</h1>
                <h3>THE BEST FOOD ON THE WEB</h3>
            </div>

            <div></div>

            <div className="nav-buttons">
                <NavButton image="fb-icon.png" />
                <NavButton image="twit-icon.png" />
                <NavButton image="gp-icon.png" />
                <NavButton image="insta-icon.png" />
                <NavButton image="flic-icon.png" />
                <NavButton image="pint-icon.png" />
                <NavButton image="rss-icon.png" />
                <NavButton image="mail-icon.png" />
            </div>
        </div>
    }
}