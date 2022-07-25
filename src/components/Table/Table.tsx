import React from 'react'
import Row from './Row'

function Table(props:any) {

    return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">trip_id</th>
              <th scope="col">delivery_id</th>
              <th scope="col" colSpan={2}>location</th>
              <th scope="col">city</th>
              <th scope="col">qty_delivered</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
    )
}

Table.Row = Row

export default Table