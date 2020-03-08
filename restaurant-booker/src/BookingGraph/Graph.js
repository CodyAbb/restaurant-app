import React, { Component, useState } from "react";
import './Graph.css'

function Graph ({bookings, bookingSlots}) {
    const [tables, setTables] = useState([
        {id: 1, name: "table1", pax: 2, priority: 1, duration: 1, accessibility: true, bookings: 
            [{id:1, time: "19:00", date: "01/01/2020", numberOfPeople: 2}]
        },
        {id: 2, name: "table2", pax: 4, priority: 1, duration: 1, accessibility: false, bookings: 
        [{id:3, time: "19:00", date: "06/01/2020", numberOfPeople: 3}, 
        {id:15, time: "21:00", date: "06/01/2020", numberOfPeople: 3}
        ]
        },
        {id: 3, name: "table3", pax: 6, priority: 1, duration: 1, accessibility: false, bookings: 
        [{}]
        }
    ]);

    const createTD = tables.map(table => 
        {
return <tr>
        <td>{table.name}</td>
        {bookingSlots.map(bookingSlot => {
            if(table.bookings.find(({time}) => time === bookingSlot)) {
                console.log(table.bookings.find(({time}) => time === bookingSlot))
                
            return <td className="entry"> There's a booking for this time</td>
            }
            else {
               return <td>No Bookings for this time</td>
            }
         } )}

         </tr>
        }
        )
        

        // const createRows = tables.map(table => 
        //     {return  <tr> 
        //         {createTD}
        //           {/* <td>Data1{table.name}</td> */}
        //            </tr>
        //     })

        const mapBooking = tables.map(item => {
            return <p>{item.name} || first booking: {item.bookings[0].time}</p>
        })

        const createHeader = bookingSlots.map(item => {
        return <th>{item}</th>
        })

        return(
            <>
            <h3>This is the Graph section</h3>
            <h4> could you please print the table? </h4>
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
            {mapBooking}
            </>
        )
}

export default Graph;