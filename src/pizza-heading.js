import React from 'react';

export default class PizzaHeading extends React.Component {
    render(){
        return (
            <div>
                <section>
                    <h1>Chocolate Pizza</h1>
                    <p>POSTED ON DEC 2013 / DESSERTS</p>
                </section>
                <section>
                    <img src = "print-icon.png" alt = "printer"/>
                    <span>PRINT</span>
                </section>  
            </div> 
        );
    }
}