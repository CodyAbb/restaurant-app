import React, { Component } from 'react';
import Axios from 'axios';
import BookingList from './BookingList'

class FormBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            pax: 0,
            date: "",
            selectedTime: "",
            availableTimes: ["12:00", "12:30", "13:00", "13:30"]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // formatDate(dateString) {
    //  const dateArray = dateString.split("-");
    //  return dateArray.reverse().join("/")
     
    // }

    handlePax = (event) => this.setState({pax: event.target.value})
    
    handleDate = (event) => {
        // event.preventDefault()

        // const dateValue = event.target.value
        // const formattedDate = this.formatDate(dateValue)
        // console.log(formattedDate);
        
        this.setState({date: event.target.value})
    }

    handleTime = (event) => this.setState({selectedTime: event.target.value})

    handleSubmit(event) {
        event.preventDefault()
        
        const pax = this.state.pax;
        const date = this.state.date;
        const time = this.state.selectedTime;
        const desk = `http://localhost:8080/desks/2`
        JSON.stringify({ pax, date, time, desk });

        Axios
        
        .post(`http://localhost:8080/bookings`, {
            pax,
            date,
            time,
            desk
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
      });
    }



    // getToday(){
    //     var today = new Date();
    //     var dd = String(today.getDate()).padStart(2, '0');
    //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     var yyyy = today.getFullYear();
    //     today = mm + '/' + dd + '/' + yyyy;
    // }



    render() {
        const populateTimeOption = this.state.availableTimes.map((time, index) => {
            return <option key={index} value={time}>{time}</option>
        })

        return (
            <>
                <p>Hello I am the FormBox</p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="number" 
                        placeholder="Add number of customers" 
                        value={this.state.pax} 
                        onChange={this.handlePax}/>
                    <input 
                        type="date" 
                        value={this.state.date} 
                        onChange={this.handleDate}/>
                    <select onChange={this.handleTime}>
                        {populateTimeOption}
                    </select>

                    <input type="submit" />
                </form>

            </>
        )
    }

  }
  
  export default FormBox;
  

