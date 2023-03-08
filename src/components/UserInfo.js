import React, { useContext } from "react";
import { AddressContext } from "../config/AppContext";
import UpdateDetails from "./UpdateDetails";
import { Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";

const UserInfo = ({ info }) => {
  const { addressList, filteredAddressList, newSearchFilter, handleOpen } =
    useContext(AddressContext);

  const handleClick = (address) => {
    console.log("index", address);
    handleOpen(address);
  };

  return info.map((address, index) => (
    <div key={address.id} className="single-address address-box">
      <div className="edit-icon-position">
        <div className="margin-5">
          <div className="subtitle">Name</div>
          <div>
            {address.firstName} {address.lastName}
          </div>
        </div>

        <div className="subtitle">Email</div>
        <div>{address.email}</div>
        <FaUserEdit className="edit-icon" onClick={(e) => handleClick(address)} />
      </div>
      {/* <Button onClick={(e) => handleClick(address)}>Open modal</Button> */}
    </div>
  ));
};

export default UserInfo;
