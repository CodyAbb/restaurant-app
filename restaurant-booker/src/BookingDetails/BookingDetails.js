import React, { Component } from 'react';

class BookingDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pax: props.selectedBooking.pax
        }
    }


    

    render() {
        const populateTimeOption = this.props.availableTimes.map((time, index) => {
            let isSelected = this.props.selectedBooking.time === time ? "selected" : ""
        return <option key={index} value={time}>{time} {isSelected}</option>
        })

        return (
            <>
            <h3>Booking Details:</h3>
                <section>
                    <header>Selected Booking ID: {this.props.selectedBooking.id}</header>
                    <main>
                        <p>Date: {this.props.selectedBooking.date}</p>
                        <p>Time: {this.props.selectedBooking.time}</p>
                        <p>Customer: </p>
                    </main>
                </section>
                <form>
                    <input 
                        type="number"  
                        value={this.state.pax} 
                        />
                    <input 
                        type="date" 
                        placeholder={this.props.selectedBooking.date}
                        // value={this.state.date} 
                        // onChange={this.handleDate}
                        />
                    <select>
                        {populateTimeOption}
                    </select>

                    <input type="submit" />
                </form>
            </>
        )
    }

}

export default BookingDetails;