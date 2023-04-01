import React from "react";
import getDateObject from '../helpers/getDateObject'

function ReservationCard({reservation}) {
    // const reservation = props.reservation
    console.log(reservation.include.seat)
    // console.log(include)
    const movie = reservation.include.movie.title
    const dateObject = getDateObject(reservation.include.session.play_time)
    const hall = reservation.include.hall.name
    const date = dateObject.day+'/'+dateObject.month+'/'+dateObject.year + ' - '+ hall + ' - ' + dateObject.hour + ':' + dateObject.minutes
    const seat = reservation.include.seat
    const seatString = 'Fila: ' + seat.row + ' - Asiento: ' + seat.column
    return (
      <div className="mb-5 mx-auto w-fit">
        <ul className="">
          <li className='w-fit'><span className="font-bold">{movie}</span></li>
          <li className='w-fit'><span className="font-bold">{date}</span></li>
          <li className='w-fit'><span className="font-bold">{seatString}</span></li>
        </ul>
      </div>
    );
}
export default ReservationCard
