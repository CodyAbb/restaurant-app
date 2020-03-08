import React from 'react'
import Booking from './Booking'

function BookingList ({bookings}){

    const bookingItem = bookings.map(booking => {
        return (
          <Booking 
            bookingValue={booking} 
            // email={booking.email}
            // phoneNum={booking.phoneNum}
            key={booking.id}>
              {booking.id}
          </Booking> 
        )
        
    })
    return (
        <ul>
           Current Reservations: 
            {bookingItem}
        </ul>
    )
}

export default BookingList;