import React from 'react';

import dog from "../asset/undraw_electric_car_b7hl.svg"

const Header = props => {
  return (
    <React.Fragment>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
      <img src={dog} alt={dog}/>
    </React.Fragment>
  );
};

export default Header;
