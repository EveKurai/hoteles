import './MenuCards.scss';
import { menuCards } from '../../../constanst/menu';
import { Link } from 'react-router-dom';
const MenuCards = () => {
  return (
    <div className="menuCards">
      {menuCards.map(m => {
        return (
          <Link key={m.id} className='cardLinks' to={m.link}>
            <div className='menuCard'>
              <img className='imgMenu' src={m.icon}></img>
              <span className="foodMenu">{m.city}</span>
            </div>
          </Link>
        )
      })
      }

    </div>
  );
};

export default MenuCards;
