
import React from 'react';
import { TripDelivery } from '../../Types/API';
import { ButtonProps } from '../../Types/Props';
import './DeleteBtn.css';

function Row({onclick}: ButtonProps) {
    
  return (
    <button onClick={onclick}>x</button>
  );
}

export default Row;
