import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeats } from '../actions';
import { chooseSeats } from '../actions';
import { reservation } from '../actions';

function HallView () {
    const dispatch = useDispatch();
    const navigation = useSelector(state => state.navigation);
    const data = useSelector(state => state.data);

    useEffect(() => {
        fetch('http://localhost:3001/seats')
        .then(response => response.json())
        .then(data => dispatch(getSeats(data, navigation.numberOfSeats, navigation.seatCloseOption)))
    }, [])

        if (data.choice !== undefined && data.hallViewModel !== undefined) {
            data.hallViewModel.forEach((row) => {
                row.forEach((cell) => {
                    let invisibleSeat = cell.cords === undefined;
                    let bookedSeat = cell.reserved === true;
                    if (bookedSeat) {
                        cell.className = "booked-td"
                    } else if (invisibleSeat) {
                        cell.className = "empty-td"
                    } else {
                        cell.className = "visible-td"
                    }
                    data.choice.forEach((item) => {
                        if (cell.id === item.id) {
                            return cell.className = "seats-proposal-td"
                        }
                    })      
                })
            })
        }

    let hallTable = [];
    if (data.hallViewModel !== undefined) {
        hallTable = data.hallViewModel.map((row) => {
            let seatsCells = row.map((cell) => {
                return (<td className = {cell.className} onClick = {()=> dispatch(chooseSeats(cell))}></td>);
            })
            return (<tr>{seatsCells}</tr>);
        })
    }
         
    let table = (
                    <table>
                        <tbody>
                            <tr><td></td></tr>
                        </tbody>
                    </table>
                )
    return (
        <div className="main-wrapper">
            <table className="main-table">
                <tbody>
                    {hallTable}
                </tbody>
            </table>
            <div className="legend">
                <div className="free-seats">
                    {table}
                    <p>Miejsca dostępne</p>
                </div>

                <div className="booked-seats">
                    {table}
                    <p>Miejsca zarezerwowane</p>
                </div>

                <div className="your-seats">
                    {table}
                    <p>Twój wybór</p>
                </div>

                <button className="booking-button" type="button" onClick = {() => dispatch(reservation())}>Rezerwuj</button>
            </div>
        </div>
    )
}

export default HallView;