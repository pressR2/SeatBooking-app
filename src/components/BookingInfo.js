import React from "react";
import { useSelector } from 'react-redux';

function BookingInfo() {
    const data = useSelector(state => state.data);
    let reservedSeats = data.choice.map((seat) => {
        return (<p>- rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})</p>);
    })
    return (
        <div className="reservation-info">
            <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
            <p>Wybrałeś miejsca:</p>
            {reservedSeats}
            <h2>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h2>
        </div>
    )
}

export default BookingInfo;