import React, { useContext, useState } from "react";
import UserInfo from "./UserInfo";
import { AddressContext } from "../config/AppContext";
import UpdateDetails from "./UpdateDetails";

const AddressBook = () => {
  const {
    addressList,
    setFilterValue,
    filterValue,
    addUserAddress,
    searchInit,
    setSearchInit,
    newSearchFilter,
    setNewSearchFilter,
    updateSearchFilter,
  } = useContext(AddressContext);
  const [newUserAddress, setNewUserAddress] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    updateSearchFilter();
  };

  const clearFilter = () => {
    setFilterValue("");
    updateSearchFilter();

    setNewSearchFilter("");
  };

  return (
    <div className="address-book">
      <div>
        <form onSubmit={handleSearch}>
          <div className="margin-bottom-10 font-400">Search address book</div>
          <div className="search-box">
            <input
              type="search"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <button>Search</button>
          </div>
          {newSearchFilter && filterValue ? (
            <div className="filter-info">
              Search filtered by keyword: <b> "{filterValue}" </b> -{" "}
              <span className="filter-clear" onClick={clearFilter}>
                Clear Filter
              </span>
            </div>
          ) : null}
        </form>
      </div>

      <div>
        {addressList ? (
          <div className="flex-wrap margin-50">
            {!newSearchFilter ? (
              <UserInfo info={addressList} />
            ) : (
              <UserInfo info={newSearchFilter} />
            )}
          </div>
        ) : (
          <div className="address-list justify-center">
            <p>Please add your first contact</p>
          </div>
        )}
      </div>

      <UpdateDetails />
    </div>
  );
};

export default AddressBook;
