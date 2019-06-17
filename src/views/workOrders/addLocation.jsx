import React from "react";
import { Modal } from "react-bootstrap";

const AddLocation = ({
  handleChange,
  handleClick,
  data,
  response,
  showModal,
  handleClose
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span style={{ color: "red", fontSize: "13px" }}>
          {response.message}
        </span>
        <input
          onChange={handleChange}
          value={data.name}
          className="inputStyle2"
          type="text"
          name="name"
          placeholder="Name:"
        />
        <input
          onChange={handleChange}
          value={data.address}
          className="inputStyle2"
          type="text"
          name="address"
          placeholder="Address:"
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-dark fullwidth"
          onClick={handleClick}
        >
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLocation;
