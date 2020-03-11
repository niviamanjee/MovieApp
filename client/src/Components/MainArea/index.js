import React, { Component } from 'react';
import '../../App.css';

function MainArea(props){
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{new Date().toLocaleDateString()}</p>
                    <p className="blog-content">
                        Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
                </p>
                    <p className="read-more">Hover to read more...</p>

                </div>

            </div>
        )
    }

export default MainArea;