import React, { Component } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index';
import MainArea from '../MainArea/index';

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