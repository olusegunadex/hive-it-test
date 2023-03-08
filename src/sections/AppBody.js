import React, { useContext, useState } from "react";
import AddDetails from "../components/AddDetails";
import AddressBook from "../components/AddressBook";
import { AddressContext } from "../config/AppContext";
import AddNew from "../components/AddNew";
import ContactDeleted from "../components/ContactDeleted";

const AppBody = () => {
  const { contactAdded, contactDeleted } = useContext(AddressContext);

  console.log(contactAdded);

  return (
    <div className="justify-center">
      <div className="app-body">
        {contactAdded === false && contactDeleted === false ? (
          <AddDetails />
        ) : contactAdded === true && contactDeleted === false ? (
          <AddNew />
        ) : contactAdded === false && contactDeleted === true ? (
          <ContactDeleted />
        ) : (
          <AddDetails />
        )}

        <AddressBook />
      </div>
    </div>
  );
};

export default AppBody;
