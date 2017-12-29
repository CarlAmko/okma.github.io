import React, { Component } from 'react';
import Social from '../Social';

import './index.css';
var image = require('./img/me.jpg');

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="container main-hero">
                    <img className="carl-circle" src={image} alt="img_carl" />
                    <div className="title">Hi. I'm Carl.</div>
                    {/* <div className="projects">Projects &nbsp;<i className="fa fa-arrow-right"></i></div> */}
                    <Social />
                </div>
            </div>
        );
    }
}