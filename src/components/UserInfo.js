import React, { useContext } from "react";
import { AddressContext } from "../config/AppContext";

const UserInfo = ({ info }) => {
  const { addressList, filteredAddressList } = useContext(AddressContext);

  return info.map((address, index) => (
    <div key={address.id} className="single-address address-box">
      <div>
        <div className="margin-5">
          <div className="subtitle">Name</div>
          <div>
            {address.firstName} {address.lastName}
          </div>
        </div>

        <div className="subtitle">Email</div>
        <div>{address.email}</div>
      </div>
    </div>
  ));
};

export default UserInfo;
