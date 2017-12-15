import React, { Component } from 'react';
import Social from '../Social';

import './index.css';
var image = require('./img/me.jpg'); 
var classNames = require('classnames');

export default class Main extends Component {

    render() {
        return(
            <div className="main">
                <div className={classNames("center-block", "vertical-center")}>
                    <img className={classNames("carl-circle")} src={image} alt="img_carl" />
                    <div className="typing">Hi. I'm Carl.</div>
                    {/* <div className="sub-text">Abiding Geek // Inspired Writer // Lifelong Learner</div> */}
                    <Social />
                </div>
            </div>
        );
    }
}