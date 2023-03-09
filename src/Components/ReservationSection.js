import React from 'react'
import BookingForm from './BookingForm'
import { useReducer } from 'react'

export const ACTION = {
    RESERVE: "reserve"
}

const updateTimes = (availableTimes, action) => {
    switch (action.type) {
        case ACTION.RESERVE:
            return availableTimes.filter(time => time !== action.payload.time);
        default:
            return availableTimes;
    }
}

const initializeTimes = (number) => {
    let availableTimes = [];
    let latest = 23;
    for (let i = 0; i < number; i++) {
        latest -= 1;
        availableTimes.push(latest.toString() + ":00")
    }
    return availableTimes.reverse();
}

const ReservationSection = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(5))

    return (
        <div className='section-reservation'>
            <div className='wrapper'>
                <div className='container-reservation'>
                    <h2>Reservation</h2>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </div>
            </div>
        </div>
    )
}

export default ReservationSection