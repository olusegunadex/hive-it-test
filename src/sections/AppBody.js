import React, { useContext, useState } from "react";
import AddDetails from "../components/AddDetails";
import AddressBook from "../components/AddressBook";
import { AddressContext } from "../config/AppContext";
import AddNew from "../components/AddNew";

const AppBody = () => {
  const { contactAdded } = useContext(AddressContext);

  console.log(contactAdded);

  return (
    <div className="justify-center">
      <div className="app-body">
        {contactAdded === false ? <AddDetails /> : <AddNew />}

        <AddressBook />
      </div>
    </div>
  );
};

export default AppBody;
