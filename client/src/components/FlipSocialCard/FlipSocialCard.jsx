import React from 'react';

import './FlipSocialCard.scss';

const FlipSocialCard = () => {
    return(
        <label>
            <input type="checkbox"/>
            <div class="flip-card">
                <div class="front">Front</div>
                <div class="back">Back</div>
            </div>
        </label>
    );
}

export default FlipSocialCard;