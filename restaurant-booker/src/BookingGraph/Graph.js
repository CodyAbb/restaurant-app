import React, { Component, useState } from "react";

function Graph ({bookings, bookingSlots}) {
    const [tables, setTables] = useState([
        {id: 1, name: "table1", pax: 2, priority: 1, duration: 1, accessibility: true, bookings: 
            [{id:1, time: "19:00", date: "01/01/2020", numberOfPeople: 2}]
        },
        {id: 2, name: "table2", pax: 4, priority: 1, duration: 1, accessibility: false, bookings: 
        [{id:3, time: "19:00", date: "06/01/2020", numberOfPeople: 3}]
    }
    ]);

//  debugger
    const createTD = tables.map(table => 
        {
return <tr>
        {bookingSlots.map(bookingSlot => {
            if(table.bookings.find(({time}) => time === bookingSlot)) {
                console.log(table.bookings.find(({time}) => time === bookingSlot))
                
            return <td>{table.name}</td>
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

        return(
            <>
            <h3>This is the Graph section</h3>
            <h4> could you please print the table? </h4>
            <table> 
                <tbody>
                    <tr>
                        <th>One </th>
                        <th>Two </th>
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