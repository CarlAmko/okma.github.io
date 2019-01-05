import React, {Component} from 'react';
import './index.css';
var data = require('./data/social.json');

export default class Social extends Component {
    parseMedia = (media) => {
        return (
            <div key={media.name} className="social-icon">
                <a target="_blank" href={media.url}>
                    <i className={"fa fa-sm fa-social " + media.icon}/>
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