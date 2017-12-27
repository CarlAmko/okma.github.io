import React, { Component } from 'react';
import Social from '../Social';

import './index.css';
var image = require('./img/me.jpg');
var classNames = require('classnames');

export default class Main extends Component {
    render() {
        return (
            <div className="main vcenter">
                <div className="main-hero">
                    <div className="center-block container">
                        <img className={classNames("carl-circle")} src={image} alt="img_carl" />
                        <div className="title">Hi. I'm Carl.</div>
                        {/* <div className="projects">Projects &nbsp;<i className="fa fa-arrow-right"></i></div> */}
                        <Social />
                    </div>
                </div>
            </div>
        );
    }
}