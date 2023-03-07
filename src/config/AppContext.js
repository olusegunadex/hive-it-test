import { createContext, useState, useEffect, useContext } from "react";

export const AddressContext = createContext({
  addressList: null,
  filterValue: null,
  searchInit: false,
  newSearchFilter: null,
});

export function AddressContextProvider({ children }) {
  const [addressList, setAddressList] = useState("");

  const [filterValue, setFilterValue] = useState("");
  const [searchInit, setSearchInit] = useState(false);
  const [newSearchFilter, setNewSearchFilter] = useState("");

  const [contactAdded, setContactAdded] = useState(false);

  const addUserAddress = (updatedUserAddress) => {
    setAddressList((prevAddressList) => [...prevAddressList, updatedUserAddress]);
    localStorage.setItem("addressList", JSON.stringify([...addressList, updatedUserAddress]));
    setContactAdded(true);
  };

  const addNewContact = () => {
    setContactAdded(false);
  };

  useEffect(() => {
    const storedAddressList = JSON.parse(localStorage.getItem("addressList"));
    if (storedAddressList) {
      setAddressList(storedAddressList);
    }
  }, []);

  //   const filteredAddressList = addressList.filter(
  //     (item) =>
  //       item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       item.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       item.email.toLowerCase().includes(filterValue.toLowerCase())
  //   );

  const updateSearchFilter = () => {
    const newFilter = addressList.filter(
      (item) =>
        item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.email.toLowerCase().includes(filterValue.toLowerCase())
    );
    setNewSearchFilter(newFilter);
  };

  console.log("address list", newSearchFilter);

  return (
    <AddressContext.Provider
      value={{
        addressList,
        addUserAddress,
        // filteredAddressList,
        filterValue,
        setFilterValue,
        searchInit,
        setSearchInit,
        newSearchFilter,
        updateSearchFilter,
        contactAdded,
        addNewContact,
        setContactAdded,
        setNewSearchFilter,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
