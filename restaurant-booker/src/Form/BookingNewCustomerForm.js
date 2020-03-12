import React, { useState } from "react";

function BookingNewCustomerForm({
  handleCustomerSubmit,
  handleCustomerName,
  handleCustomerEmail,
  handleCustomerContactNumber
}) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerContactNumber, setcustomerContactNumber] = useState("");

  function handleCustomerNameSelection(event) {
    setCustomerName(event.target.value);
    handleCustomerName(event);
  }

  function handleCustomerEmailSelection(event) {
    setCustomerEmail(event.target.value);
    handleCustomerEmail(event);
  }
  function handlecustomerContactNumberSelection(event) {
    setcustomerContactNumber(event.target.value);
    handleCustomerContactNumber(event);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    handleCustomerSubmit(event);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={handleCustomerNameSelection}
        required
      />
      <input
        type="text"
        placeholder="Email Address"
        value={customerEmail}
        onChange={handleCustomerEmailSelection}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={customerContactNumber}
        onChange={handlecustomerContactNumberSelection}
      />
      {/* <>
      <p>Accessibility Required: </p>
      <input name="customerAccessibility" type="checkbox" checked={this.state.customerAccessibility} onChange={this.handleCustomerAccessibility}/>
      </> */}

      {/* <input type="submit" /> */}
    </form>
  );
}

export default BookingNewCustomerForm;
