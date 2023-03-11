import React from 'react'
import BookingForm from './BookingForm'
import { useReducer } from 'react'

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

export const ACTION = {
    RESERVE: "reserve",
    DATE_CHANGE: "date-change"
}

const updateTimes = (availableTimes, action) => {
    switch (action.type) {
        case ACTION.RESERVE:
            availableTimes.forEach((element, index, theAvailableTimes) => {
                if (element.date === action.payload.date) {
                    theAvailableTimes[index].time = element.time.filter(times => times !== action.payload.time)
                }
            });
            return availableTimes;
        case ACTION.DATE_CHANGE:
            let i = 0;
            while (i < availableTimes.length) {
                if (availableTimes[i].date === action.payload.date) {
                    return availableTimes;
                }
                i++;
            }
            const selectedDate = new Date(action.payload.date);
            const dateToAppend = initializeTimes(selectedDate);
            availableTimes = availableTimes.concat(dateToAppend);
            return availableTimes;
        default:
            return availableTimes;
    }
}

const initializeTimes = (initialDate) => {
    let availableTimes = [
        {
            date: "",
            time: []
        }
    ];

    availableTimes[0].date = initialDate.toISOString().split("T")[0];
    availableTimes[0].time = fetchAPI(initialDate)

    return availableTimes;
}

const ReservationSection = () => {
    let initialDate = new Date();
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(initialDate))

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