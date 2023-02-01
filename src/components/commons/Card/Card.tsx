import React from 'react';

import './Card.scss';
type CardProps = {
    image: string
    title: string
    occupacity: number
    type: string

}
export const Card: React.FC<CardProps> = ({ image, title, occupacity, type }) => {

    return (
        <>
            <li className="tarjet">
                <img className="city" src={image} />
                <div className="normalTarjet">
                    <div className="textCity">
                        <span >{title}</span>
                    </div>
                </div>

                <div className="hoverTarjet">
                    <div className="descriptionHover">

                        <span className="titTextHover">Tipo de alojamiento</span>
                        <span className="textHover">{type}</span>
                    </div>
                    <div className="descriptionHover">

                        <span className="titTextHover">Número de ocupantes máximo</span>
                        <span className="textHover">{occupacity} personas</span>
                    </div>
                </div>

            </li>
        </>
    );


};


