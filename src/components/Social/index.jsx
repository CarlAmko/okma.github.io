import React, {Component} from 'react';
import './index.css';
var data = require('./data/social.json');

export default class Social extends Component {
    parseMedia = (media) => {
        return (
            <i key={media.name} className={media.icon_prefix + " fa-social " + media.icon} onClick={()=> window.open(media.url, "_blank")}/>
        );
    }

    renderSocialMedia = (data) => {
        return data.map(item => this.parseMedia(item));
    }

    render() {
        return (
            <div className="social-container">
                {this.renderSocialMedia(data)}
            </div>
        );
    }
}