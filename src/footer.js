import React from 'react';

export default class ChocolateFooter extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <section className = "upper-section">
                        <div>
                            <img alt = "Vanessa Stevenson"src = "van-pic.png"></img>
                        </div>
                        <div>
                            <h3>Vanessa Stevenson</h3>
                            <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                        </div>
                        <div>
                            <button className = "share-button">SHARE RECIPIE</button>
                        </div>
                    </section>
                    <section className = "lower-section">
                        <hr/>
                        <img alt = "logo" src = "small-logo.png"/>
                        <p>Delicious &copy 2013 . All Rights Reserved.</p>
                        <p>Proudly published with Ghost.</p>
                    </section>
                </div>
            </footer>
        );
    }
}