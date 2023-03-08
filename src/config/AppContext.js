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
  const [contactDeleted, setContactDeleted] = useState(false);

  const [open, setOpen] = useState(false);
  const [updateToStore, setUpdateToStore] = useState(false);

  const [singleUserAddress, setSingleUserAddress] = useState("");

  // Add new contact to storage
  const addUserAddress = (updatedUserAddress) => {
    setAddressList((prevAddressList) => [...prevAddressList, updatedUserAddress]);
    localStorage.setItem("addressList", JSON.stringify([...addressList, updatedUserAddress]));
    setContactAdded(true);
  };

  // Function to control the component which opens a prompt to add another contact
  const addNewContact = () => {
    setContactAdded(false);
  };

  useEffect(() => {
    const storedAddressList = JSON.parse(localStorage.getItem("addressList"));
    if (storedAddressList) {
      setAddressList(storedAddressList);
    }
  }, []);

  // Commented out but the function below was to filter in real time as soon as the filter value changes

  //   const filteredAddressList = addressList.filter(
  //     (item) =>
  //       item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       item.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //       item.email.toLowerCase().includes(filterValue.toLowerCase())
  //   );

  // Filter result by filter value. Updates when the search button is clicked
  const updateSearchFilter = () => {
    const newFilter = addressList.filter(
      (item) =>
        item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.email.toLowerCase().includes(filterValue.toLowerCase())
    );
    setNewSearchFilter(newFilter);
  };

  // Open the material UI modal for Update and Delete actions
  const handleOpen = (address) => {
    setOpen(true);
    setSingleUserAddress(address);
  };

  // Close the material UI modal for Update and Delete actions
  const handleClose = (setUpdateData) => {
    setOpen(false);
    setSingleUserAddress({});
    setUpdateData({});
  };

  // Function to set update details
  const setUpdateDetails = (newUserData) => {
    setAddressList((prevAddressList) =>
      prevAddressList.map((address) =>
        singleUserAddress.id === address.id ? newUserData : address
      )
    );

    if (newSearchFilter) {
      setNewSearchFilter((prevAddressList) =>
        prevAddressList.map((address) =>
          singleUserAddress.id === address.id ? newUserData : address
        )
      );
    }

    //  Boolean to save the updated addresslist to storage
    setUpdateToStore(true);
  };

  // Function to delete using the ID
  const handleDeleteContact = (singleUserAddress) => {
    const updatedContacts = addressList.filter((data) => data.id !== singleUserAddress.id);
    setAddressList(updatedContacts);

    if (newSearchFilter) {
      const updatedContacts = newSearchFilter.filter((data) => data.id !== singleUserAddress.id);
      setAddressList(updatedContacts);
    }

    //  Boolean to save the updated addresslist to storage

    setUpdateToStore(true);
    contactDeleted(true);
  };

  // Controller for the update and the delete function
  // Update to store when the address list is updated
  useEffect(() => {
    localStorage.setItem("addressList", JSON.stringify(addressList));
    setUpdateToStore(null);
    setOpen(false);
  }, [updateToStore]);

  console.log("address list", addressList);

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
        handleOpen,
        handleClose,
        open,
        singleUserAddress,
        setUpdateDetails,
        handleDeleteContact,
        contactDeleted,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
