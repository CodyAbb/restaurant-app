import React, { Component, useState } from "react";
import './Graph.css'

function Graph ({bookings, bookingSlots, tables}) {
    const [displayDate, setdisplayDate] = useState("")
    // const [tables, setTables] = useState([
    //     {id: 1, name: "table1", pax: 2, priority: 1, duration: 1, accessibility: true, bookings: 
    //         [{id:1, time: "19:00", date: "01/01/2020", numberOfPeople: 2}]
    //     },
    //     {id: 2, name: "table2", pax: 4, priority: 1, duration: 1, accessibility: false, bookings: 
    //     [{id:3, time: "19:00", date: "06/01/2020", numberOfPeople: 3}, 
    //     {id:15, time: "21:00", date: "06/01/2020", numberOfPeople: 3}
    //     ]
    //     },
    //     {id: 3, name: "table3", pax: 6, priority: 1, duration: 1, accessibility: false, bookings: 
    //     []
    //     },
    //     {id: 4, name: "table4", pax: 6, priority: 1, duration: 1, accessibility: false, bookings: 
    //     [{id:16, time: "20:00", date: "06/01/2020", numberOfPeople: 3}]
    //     }
    // ]);

    function handleChangeDate(event){
        return setdisplayDate(event.target.value)
    }
    

    const createTD = tables.map(table => 
        {
        return <tr>
        <td>Table number: {table.id}</td>
        {bookingSlots.map(bookingSlot => {
            if(table.bookings.length === 0) {
                return <td>No Bookings for this time</td>
            }
            else {
                let findTable = table.bookings.find(({time}) => {
                    return  bookingSlot >= time && bookingSlot <= getEndTime(time) 
                }) 
                if(findTable) {
                let findCustomer = findTable.customer ? findTable.customer.name : ""                  
                return <td className="entry"><a href=""> Customer: {findCustomer} <br/> People: {findTable.numberOfPeople}</a></td>
                }
                else {
                return <td>No Bookings for this time</td>
                }
            }
         } 
         )}

        </tr>
        }
    )
        
    function getEndTime(timeString, duration = 1){
        
        let timeIncreasedInt = parseInt(timeString.split(":")[0])+ duration 
        let timeIncreasedInString = `${timeIncreasedInt}:00`
        return timeIncreasedInString
    }

        // const mapBooking = tables.map(item => {
        //     return <p>{item.name} || first booking: {item.bookings.time}</p>
        // })

    const createHeader = bookingSlots.map(item => {
    return <th>{item}</th>
    })


        return(
            <>
            <h3>This is the Graph section</h3>
            <input 
                type="date" 
                value={displayDate} 
                onChange={handleChangeDate}/>
            <table> 
                <tbody>
                    <tr>
                        <th></th>
                        {createHeader}
                    </tr>
                    {createTD}
                </tbody>
            </table>
            <h4> below map Booking</h4> 
            {/* {mapBooking} */}
            </>
        )
}

export default Graph;