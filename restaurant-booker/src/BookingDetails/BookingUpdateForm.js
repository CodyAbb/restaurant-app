import React, { useState } from 'react';

function BookingUpdateForm({selectedBooking}) {
    const[numberOfPeople, setNumberOfPeople] = useState(selectedBooking.numberOfPeople)
    const[date, setDate] = useState(selectedBooking.date)
    const[time, setTime] = useState(selectedBooking.time)

    function handleNumberOfPeople(numberOfPeople){
        setNumberOfPeople(numberOfPeople)
    } 

    return(
        <>
        <form>
        <input 
            type="number" 
            placeholder="Add number of customers" 
            value={numberOfPeople} 
            onChange={handleNumberOfPeople}/>
        {/* <input 
            type="date" 
            value={this.state.date} 
            onChange={this.handleDate}/>
        <select onChange={this.handleTime}>
            {populateTimeOption}
        </select>

        <input type="submit" /> */}
    </form>
        </>
    )


}

export default BookingUpdateForm;