import Banner from '../commons/Banner/Banner';
import MenuBar from '../commons/MenuBar/MenuBar';
import MenuCard from '../commons/MenuCards/MenuCards';
import { HotelCards } from '../commons/HotelCards/HotelCards';


export const Bogota = () => {
  return (
    <div className="flex-container">
      <div className="flex-item-menu">
        <MenuBar />
      </div>
      <Banner />
      <MenuCard />
      <div className="flex-item-middle">
        <div className="middle">
          <div className="middleTitle">Hoteles Bogotá</div>
          <div className='conCarrusel'>
            <ul className="carrusel">
              <HotelCards city="Bogota"></HotelCards>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

