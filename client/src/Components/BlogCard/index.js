import React from 'react';
import '../../App.css';
import Front from '../Front/index.js.js.js';
import Back from '../Back/index.js.js.js';

class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }
    render() {
        return (

            <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

                <Front />
                <Back />

            </div>

        )
    }
}



export default BlogCard;