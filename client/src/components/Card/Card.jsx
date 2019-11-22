import React from 'react';
import './Card.scss'

const Card = (props) => {
    return(
        <div class="card 1" onClick={props.onClick}>
            <div class="card_image"> <img src={props.image}/> </div>
            <div class="card_title title-white">
            <p>{props.title}</p>
            </div>
         </div>
    );
}

export default Card
