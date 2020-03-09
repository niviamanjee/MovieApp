import React, { Component } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index.js';
import MainArea from '../MainArea/index.js';

class Front extends Component {
    constructor(props) {
        super(props);
        this.shows = props.shows
    }
    render() {
        return (
            <div className="front">

                <ImageArea show={this.props.shows} />
                <MainArea show={this.props.shows} />
            </div>
        )
    }
}

export default Front;