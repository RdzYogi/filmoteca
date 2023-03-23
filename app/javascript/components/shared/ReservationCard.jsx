import React from "react";

function ReservationCard(props) {

    const reservation = props.reservation
    console.log(reservation)
    return (
      <div className="border-2 border-white-600 mt-2">
        <ul>
          <li className='px-2 py-3'>Fecha: <span className="font-bold">{reservation.date}</span></li>
          <li className='px-2 py-3'>Hora: <span className="font-bold">{reservation.time}</span></li>
        </ul>
      </div>
    );
}
export default ReservationCard
