import React from 'react'

function Booking ({bookingValue}){
    return (
        <li>    
            {bookingValue.id}
            <br></br>
            {bookingValue.time}
            <br></br>
            {bookingValue.date}
            <br></br>
            {bookingValue.numberOfPeople}
        </li>
    )

}

export default Booking;