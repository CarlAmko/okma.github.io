import React, { Component } from 'react';
import Social from '../Social';

import './index.css';
var image = require('./img/me.jpg');

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-hero">
                    <img className="carl-circle" src={image} alt="img_carl" />
                    <div className="title">Hi. I'm Carl.</div>
                    <div className="subtitle">Software ~ Entrepreneurship ~ Writing</div>                    
                    <Social />
                </div>
            </div>
        );
    }
}