import React, { Component } from 'react';
import './index.css';
var data = require('./data/social.json');
var classNames = require('classnames');

export default class Social extends Component {

    parseMedia = (media) => {
        return (
            <div className="social-icon">
                <a target="_blank" href={media.url}>
                <span className={classNames("fa-stack")}>
                    <i className={classNames("fa", "fa-stack-1x", media.icon)} />
                </span>
                </a>
            </div>
        );
    }

    renderSocialMedia = (data) => {
        return data.map(item => this.parseMedia(item));
    }

    render() {
        return (
            <div>
                {this.renderSocialMedia(data)}
            </div>
        );
    }
}