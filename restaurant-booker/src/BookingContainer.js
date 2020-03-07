import React, { Component } from 'react';
import FormBox from './Form/FormBox.js'

class BookingContainer extends Component() {

    constructor(props) {
        super(props)
        this.state = {
            bookings: [

            ]
        }
    }


render() {
    return (
        <>
        <p>Hello I am the booking container</p>
        <FormBox />
        </>
    )
  }
}
  export default BookingContainer;
  

