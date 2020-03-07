import React, { Component } from 'react'
import BookingList from './Form/BookingList'

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookings: [
            { 
                id: 1,
                name: "John Smith",
                email: "john@mail.com",
                phoneNum: "12345",
            },
            { 
                id: 1,
                name: "Polly Wayne",
                email: "polly@mail.com",
                phoneNum: "34567",
            }
        ]

    }
}

    render(){
    return(
        <BookingList bookings={this.state.bookings}/>
    )
    }
}   

export default ListContainer;