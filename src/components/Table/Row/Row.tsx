
import React from 'react';
import './Row.css';
import DeleteBtn from '../../DeleteBtn';
import { RowProps } from '../../../Types/Props';

function Row({delivery, onclick}: RowProps) {

  return (
    <tr>
      <th scope="row">{delivery.id}</th>
      <td>{delivery.trip_id}</td>
      <td>{delivery.delivery_id}</td>
      <td colSpan={2}>{delivery.location}</td>
      <td>{delivery.city}</td>
      <td>{delivery.qty_delivered}</td>
      <td><DeleteBtn onclick={() => onclick(delivery.id)} /></td>
    </tr>
  );
}

export default Row;
