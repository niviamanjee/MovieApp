import React, { useState } from 'react';
import '../../App.css';
import Front from '../Front/index';
import Back from '../Back/index';

const Card =()=> {
    const [flipped, setFlipped] = useState(false);
        return (
            <div onMouseEnter={()=>setFlipped(true)} onMouseLeave={()=>setFlipped(false)} className={"card-container" + (flipped ? " flipped" : "")}>
                <Front />
                <Back />
            </div>
        )
}

export default Card;
