import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.scss';

const MenuBar = () => {
  return (
    <React.Fragment>
      <div className="title">
        <span className="textLeft">Hotels</span>
        <span className="textRight">App</span>
      </div>
      <div className="menu">
        <ul className="selected">
          <li> <Link className='links' to="/">Home</Link></li>
          <li><Link className='links' to="/barranquilla">Barranquilla</Link></li>
          <li><Link className='links' to="/cali">Cali</Link></li>
          <li><Link className='links' to="/cartagena">Cartagena</Link></li>
          <li><Link className='links' to="/bogota">Bogotá</Link></li>
        </ul>
      </div>
      <Link className='links' to="/">
        <div className="icoHome"></div>
      </Link>
    </React.Fragment>
  );
};

export default MenuBar;
