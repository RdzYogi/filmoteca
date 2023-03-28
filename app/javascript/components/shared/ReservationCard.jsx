import React from "react";

function ReservationCard(props) {

    const reservation = props.reservation
    //console.log(reservation)
    return (
      <div className="">
        <ul>
          <li className='px-2 py-3'>Fecha: <span className="font-bold">{reservation.date}</span></li>
          <li className='px-2 py-3'>Hora: <span className="font-bold">{reservation.time}</span></li>
          <li className='px-2 py-3'>Sala: <span className="font-bold">{reservation.seat_id}</span></li>
        </ul>
      </div>
    );
}
export default ReservationCard
