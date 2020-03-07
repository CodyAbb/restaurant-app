import React from 'react'

function Booking ({name, email, phoneNum}){
    return (
        <li>    
            {name}
            {email}
            {phoneNum}
        </li>
    )

}

export default Booking;