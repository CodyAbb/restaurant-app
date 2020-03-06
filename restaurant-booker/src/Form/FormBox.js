import React, { Component } from 'react';

class FormBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            pax: 0,
            date: "",
            selectedTime: "",
            availableTimes: ["12:00", "12:30", "13:00", "13:30"]
        }
    }

    handlePax = (event) => this.setState({pax: event.target.value})
    
    handleDate = (event) => this.setState({date: event.target.value})

    handleTime = (event) => this.setState({selectedTime: event.target.value})

    handleSubmit(event) {
        event.preventDefault()
        // TODO
        // this is where the db will be called to create a new booking
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
                    <input type="number" 
                    placeholder="Add number of customers" 
                    value={this.state.pax} 
                    onChange={this.handlePax}/>
                    <input type="date" 
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
  

