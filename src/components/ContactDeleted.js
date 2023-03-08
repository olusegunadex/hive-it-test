import React, { useContext, useState } from "react";
import { AddressContext } from "../config/AppContext";
import { v4 as uuidv4 } from "uuid";

const ContactDeleted = () => {
  const { contactAdded, addNewContact, setContactAdded } = useContext(AddressContext);

  const handleClick = () => {
    addNewContact();
  };

  return (
    <div className="add-another text-center">
      <div>
        <h4>Your contact was deleted</h4>
      </div>
      <div>
        <button onClick={handleClick}>Add New</button>
      </div>
    </div>
  );
};

export default ContactDeleted;
