import React, { useContext } from 'react';
import SearchContext from '../../../../../store/SearchContext';
import './GuestItemControl.scss';

const GuestItemControl = ({id, onClick, quantity}) => {
   return (
      <div className="guest-control">
        <button
          id="decrement"
          className="guest-control--decrement"
          disabled = {quantity === 0}
          onClick={onClick}
        >
          &minus;
        </button>
        <div className="guest-control--value">{quantity}</div>
        <button
          id="increment"
          className="guest-control--increment"
          onClick={onClick}
        >
          +
        </button>
      </div>
   );
};

export default GuestItemControl;