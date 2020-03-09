import React, { useState } from 'react';

function BookingUpdateForm({selectedBooking, bookingSlots}) {
    const[numberOfPeople, setNumberOfPeople] = useState(selectedBooking.numberOfPeople)
    const[date, setDate] = useState(selectedBooking.date)
    const[time, setTime] = useState(selectedBooking.time)
    // const[bookingSlots, setBookingSlots] = useState(bookingSlots)
    

    function handleNumberOfPeople(numberOfPeople){
        setNumberOfPeople(numberOfPeople)
    } 

    function handleDate(date){

        setDate(date)
    }

    function handleTime(time){
        setTime(time)
    }



    const populateTimeOption = bookingSlots.map((timeSlot, index) => {
        let isItSelected = timeSlot===time ? "selected" : ""

        return <option key={index} value={time} selected={isItSelected} >{time}</option>
    })

    return(
        <>
        <form>
            <label for="number of customer">Number of Customer</label>
        <input 
            type="number" 
            placeholder="Add number of customers" 
            value={numberOfPeople} 
            onChange={handleNumberOfPeople}/>

        <label for="date">Date:</label>
        <input 
            type="date" 
            value={date} 
            onChange={handleDate}/>
        <select onChange={handleTime}>
            {populateTimeOption}
        </select>

        <input type="submit" />
    </form>
        </>
    )


}

export default BookingUpdateForm;