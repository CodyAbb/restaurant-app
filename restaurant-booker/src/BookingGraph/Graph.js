import React, { Component, useState, useEffect } from "react";
import "./Graph.css";
import GraphTableRow from "./GraphTableRow.js";

function Graph({ bookings, bookingSlots, tables, displayDate }) {
  // const [displayDate, setdisplayDate] = useState("2020-03-06");

  // function getToday(){
  //     const date = new Date();

  // }

  // function handleChangeDate(event) {
  //   return setdisplayDate(event.target.value);
  // }

  //   function filterTablesByBookingDate(tables) {
  //     if (!tables) {
  //       tables.bookings.filter(({ date }) => {
  //         return date === displayDate;
  //       });
  //     }
  //   }

  //   function getEndTime(timeString, duration = 1) {
  //     let timeIncreasedInt = parseInt(timeString.split(":")[0]) + duration;
  //     let timeIncreasedInString = `${timeIncreasedInt}:00`;
  //     return timeIncreasedInString;
  //   }

  const createHeader = bookingSlots.map(item => {
    return <th style={{ backgroundColor: "lightblue" }}> {item}</th>;
  });

  return (
    <>
      {/* <input
        className="date"
        type="date"
        value={displayDate}
        onChange={handleChangeDate}
      /> */}
      <table>
        <tbody>
          <tr style={{ backgroundColor: "orange" }}>
            <th></th>
            {createHeader}
          </tr>
          <GraphTableRow
            tables={tables}
            bookingSlots={bookingSlots}
            displayDate={displayDate}
          />
          {/* {createTD} */}
        </tbody>
      </table>
    </>
  );
}

export default Graph;
