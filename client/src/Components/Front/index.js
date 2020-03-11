import React from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index';
import MainArea from '../MainArea/index';

function Front() {
    return (
        <div className="front">
            <ImageArea />
            <MainArea />
        </div>
    )
}


export default Front;