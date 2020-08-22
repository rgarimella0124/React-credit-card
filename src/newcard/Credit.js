import React from 'react';
import './credit-card.css';

export default (props) => {
    return (
        <div className='credit-card'>
            <div className='credit-card__logo'>Logo goes here</div>

            <div className='credit-card__number'>{props.number}</div>
            
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>{props.name}</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>{props.expiry}</div>
                </div>
            </div>

        </div>
    );
}