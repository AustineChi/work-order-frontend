import React from "react";
import { Modal } from 'react-bootstrap';

const AddTeam = ({ handleChange, handleClick, data, response,  users, showModal, handleClose }) => {
  const _users = users.length ? (users.map((user) =>
  <option key={user._id} value={user.name}>{user.name}</option>
)):  (
"")
    return (

<Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>  Create Team</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label htmlFor="">
          Team Name:
              <input
                onChange={handleChange}
                value={data.name}
                className="inputStyle2"
                type="text"
                name="name"
                placeholder="Name:"
              />
              </label>

            <label htmlFor="">
             Add Team Members:
              <select 
                onChange={handleChange}
                multiple={true}
                value={data.teamMembers}
                name="teamMembers"
                className="browser-default custom-select custom-select-md mb-3"              >
                <option value="">none</option>
                 {_users}
              </select>
            </label>
            <span style={{ color: "red", fontSize: "13px" }}>
              {response.message}
            </span>
          </Modal.Body>
          <Modal.Footer>
          <button 
              onClick={handleClick}
              type="button" 
              className="btn btn-dark fullwidth"
              >
                Submit
              </button>         
            </Modal.Footer>
        </Modal>
    );
  };
  
  export default AddTeam;