import React, { useState } from "react";
import PropertyService from "../services/PropertyService";

function AddProperty({ refresh }) {

  const [propertyName, setPropertyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");

  const saveProperty = (e) => {
    e.preventDefault();

    const property = {
      propertyName: propertyName,
      ownerName: ownerName,
      location: location,
      rentAmount: rentAmount,
      status: status
    };

    PropertyService.addProperty(property).then(() => {
      alert("Property Added Successfully");

      setPropertyName("");
      setOwnerName("");
      setLocation("");
      setRentAmount("");
      setStatus("");

      refresh();
    });
  };

  return (
    <div>
      <h2>Add Property</h2>

      <form onSubmit={saveProperty}>

        <input
          type="text"
          placeholder="Property Name"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
          required
        /><br/>

        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        /><br/>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        /><br/>

        <input
          type="number"
          placeholder="Rent Amount"
          value={rentAmount}
          onChange={(e) => setRentAmount(e.target.value)}
          required
        /><br/>

        <input
          type="text"
          placeholder="Status (Available / Booked)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        /><br/>

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default AddProperty;
