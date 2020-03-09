import React from 'react'

function SearchBox(props) {

    return(
        <>
            <input 
                placeholder="Search bookings..."
                type="text"
                // onChange={props.handleInput}
            ></input>
        </>

    )
}

export default SearchBox;