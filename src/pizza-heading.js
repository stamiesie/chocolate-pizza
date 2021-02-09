import React from 'react';

export default class PizzaHeading extends React.Component {
    render() {
        return (
            <div className="pizza-header">
                <section>
                    <h1 className="header-title">Chocolate Pizza</h1>
                    <p className="header-sub">POSTED ON DEC 2013 / DESSERTS</p>
                </section>

                <section></section>

                <section>
                    <img src="print-icon.png" alt="printer" />
                    <span className="header-sub">PRINT</span>
                </section>
            </div>
        );
    }
}