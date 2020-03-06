import React from 'react';
import '../../App.css';

class ImageArea extends Component {
    render() {
        return (
            <div className="image-container">
                <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
                <h1 className="title">An example blog post</h1>
            </div>
        )
    }

}


export default ImageArea;