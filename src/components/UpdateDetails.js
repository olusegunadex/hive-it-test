import { useContext, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddressContext } from "../config/AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #297373",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const UpdateDetails = (address) => {
  const {
    open,
    handleOpen,
    handleClose,
    addressList,
    singleUserAddress,
    setUpdateDetails,
    handleDeleteContact,
  } = useContext(AddressContext);

  const [updateData, setUpdateData] = useState({
    id: singleUserAddress.id,
    newFirstName: singleUserAddress.firstName,
    newLastName: singleUserAddress.lastName,
    newEmail: singleUserAddress.email,
  });

  const { id, newFirstName, newLastName, newEmail } = updateData;

  const onChange = (e) => {
    setUpdateData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newuserData = {
      id: singleUserAddress.id,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
    };

    setUpdateDetails(newuserData);

    setUpdateData("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleDeleteContact(singleUserAddress);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={(e) => handleClose(setUpdateData)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <div className="sub-heading">
              <h2>Update or delete details</h2>
            </div>
            <form className="flex-column">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder={singleUserAddress.firstName}
                  value={newFirstName}
                  name="newFirstName"
                  onChange={onChange}
                  className="input-class"
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder={singleUserAddress.lastName}
                  value={newLastName}
                  name="newLastName"
                  onChange={onChange}
                  className="input-class"
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  placeholder={singleUserAddress.email}
                  value={newEmail}
                  name="newEmail"
                  onChange={onChange}
                  className="input-class"
                />
              </div>

              <div className="text-right">
                <button className="update-button" onClick={handleSubmit}>
                  Update{" "}
                </button>
                <button className="delete-button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateDetails;
