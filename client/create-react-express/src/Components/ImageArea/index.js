import React, { Component } from 'react';
import '../../App.css';

class ImageArea extends Component {
    render() {
        return (
            <div className="image-container">
                <img className="card-image" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"></img>
            </div>
        )
    }
}

export default ImageArea;