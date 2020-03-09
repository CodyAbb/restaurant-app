import React, { Component } from 'react';

class BookingDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
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
            </>
        )
    }

}

export default BookingDetails;