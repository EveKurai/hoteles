import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import './HotelCards.scss';
import useData from '../../../providers/DataContext';
type HotelCardsProps = {
    city?: string
}

export const HotelCards: React.FC<HotelCardsProps> = ({ city = "" }) => {
    const { setCity, loading, allHotels } = useData()

    useEffect(() => {
        setCity(city)
    }, [])
    return (
        <div className='containerHotelCards'>
            {
                !loading ? allHotels?.map(r =>
                    <Card key={r.id} image={r.image} title={r.city} occupacity={r.rooms[0].occupancy} type={r.rooms[0].type} />
                )
                    : <h1>Cargando ...</h1>}
        </div>


    );
};


