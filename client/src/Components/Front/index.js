import React, { Component } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index.js.js.js';
import MainArea from '../MainArea/index.js.js.js';

class Front extends Component {
    render() {
        return (
            <div className="front">
                <ImageArea />
                <MainArea />
            </div>
        )
    }
}

export default Front;