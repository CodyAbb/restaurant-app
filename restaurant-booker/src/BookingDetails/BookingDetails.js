import React, { Component } from 'react';

class BookingDetails extends Component {
    constructor(props) {
        super(props)
        // this.getCustomer = this.getCustomer.bind(this)
    }

    // getCustomer() {
    //     const destructureProps = Object.entries(this.props)
    //     console.log(destructureProps);
        
    // }

    render() { 
        if (!this.props.selectedBooking) return null;

        return (
             
            <>
            <h3>Booking Details:</h3>
                <section>
                    <header>Selected Booking ID: {this.props.selectedBooking.id}</header>
                    <main>
                        <p>Date: {this.props.selectedBooking.date}</p>
                        <p>Time: {this.props.selectedBooking.time}</p>
                        <p>Customer: {this.props.selectedBooking.customer.name} </p>
                    </main>
                
                </section>
            </>
        )
    }

}

export default BookingDetails;