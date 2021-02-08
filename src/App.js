import React from 'react';
import './App.css';
import ChocolateHeader from './header.js';
import ImageComponent from './image.js';
import PizzaHeading from './pizza-heading.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <ChocolateHeader/>
        <ImageComponent/>
        <PizzaHeading/>
      </div>
    );
  }
}