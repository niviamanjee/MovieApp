import React, { Component } from 'react';
import '../../App.css';
import Front from '../Front/index';
import Back from '../Back/index';

class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }
    render(props) {
        return (

            <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

                <Front
                 />
                <Back />
            </div>

        )
    }
}

export default BlogCard;
