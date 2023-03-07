import React, { useContext, useState } from "react";
import { AddressContext } from "../config/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddDetails = () => {
  const { addressList, addUserAddress } = useContext(AddressContext);
  const [userDetails, setUserDetails] = useState("");
  const [newUserAddress, setNewUserAddress] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id, firstName, lastName, email } = newUserAddress;

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewUserAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid()) {
      // submit form data
      const updatedUserAddress = {
        id: Date.now(),
        firstName,
        lastName,
        email,
      };

      addUserAddress(updatedUserAddress);
      // reset form data
      setNewUserAddress({
        id: Date.now(),
        firstName: "",
        lastName: "",
        email: "",
      });
    }

    // setNewUserAddress({
    //   id: Date.now(),
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // });
  };

  const formIsValid = () => {
    const errors = {};
    // validate first name
    if (!newUserAddress.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    // validate last name
    if (!newUserAddress.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    // validate email
    if (!newUserAddress.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(newUserAddress.email.trim())) {
      errors.email = "Please enter valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="add-address flex-column">
      <div className="sub-heading">
        <h2>Add Contact Details</h2>
      </div>
      <form className="flex-column" onSubmit={handleSubmit}>
        {formErrors.firstName ? (
          <div>
            <label>First Name</label>
            <div className="error">{formErrors.firstName}</div>
            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              name="firstName"
              onChange={handleChange}
              className="error-input"
            />
          </div>
        ) : (
          <div>
            <label>First Name</label>

            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              name="firstName"
              onChange={handleChange}
              className="input-class"
            />
          </div>
        )}

        {formErrors.lastName ? (
          <div>
            <label>Last Name</label>
            <div className="error">{formErrors.lastName}</div>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={lastName}
              className="error-input"
              onChange={handleChange}
            />
          </div>
        ) : (
          <div>
            <label>Last Name</label>

            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={lastName}
              className="input-class"
              onChange={handleChange}
            />
          </div>
        )}

        {formErrors.email ? (
          <div>
            <label>Email</label>

            <div className="error">{formErrors.email}</div>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
              className="error-input"
              //className="error-input"
            />
          </div>
        ) : (
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              className="input-class"
              onChange={handleChange}
            />
          </div>
        )}

        <div className="text-right">
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddDetails;
