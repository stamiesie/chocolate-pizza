import React from 'react';
import IngredientElement from './ingredient.js';
import IngredientData from './data.js';

export default class IngredientList extends React.Component {
     IngredientElementArray = IngredientData.map((ingredient) => {
        return (
            <IngredientElement name = {ingredient.name} text = {ingredient.text}/>
        )
    })
    render() {
        return (this.IngredientElementArray)
            // <div className="IngredientList">
            //     <IngredientElement name='1' text='1 1/2 cups milk' />
            //     <IngredientElement name='2' text='1/2 marscapone' />
            //     <IngredientElement name='3' text='1 1/2 cups milk' />
            //     <IngredientElement name='4' text='1 1/2 cups milk' />
            //     <IngredientElement name='5' text='1 1/2 cups milk' />
            //     <IngredientElement name='6' text='1 1/2 cups milk' />
            //     <IngredientElement name='7' text='1 1/2 cups milk' />
            //     <IngredientElement name='8' text='1 1/2 cups milk' />
            //     <IngredientElement name='9' text='1 1/2 cups milk' />
            //     <IngredientElement name='10' text='1 1/2 cups milk' />
            //     <IngredientElement name='11' text='1 1/2 cups milk' />
            //     <IngredientElement name='12' text='1 1/2 cups milk' />
            // </div>
        // )
    }
}