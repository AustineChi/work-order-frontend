import React from "react";
import { Modal } from "react-bootstrap";

const Create = ({
  handleChange,
  handleClick,
  data,
  response,
  users,
  assets,
  locations,
  selectData,
  showModal,
  handleClose
}) => {
  const _users = users.length
    ? users.map(user => (
        <option key={user._id} value={user.name}>
          {user.name}
        </option>
      ))
    : "";
  const _assets = assets.length
    ? assets.map(asset => (
        <option key={asset._id} value={asset.assetName}>
          {asset.assetName}
        </option>
      ))
    : "";
  const _locations = locations.length
    ? locations.map(location => (
        <option key={location._id} value={location.name}>
          {location.name}
        </option>
      ))
    : "";

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data._id ? "Update Work Order" : "Create Work Order"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="">
          Title:
          <input
            onChange={handleChange}
            value={data.title}
            name="title"
            className="inputStyle2"
            type="text"
            placeholder="Title"
          />
        </label>
        <label htmlFor="">
          Description:
          <textarea
            onChange={handleChange}
            value={data.description}
            name="description"
            placeholder="Description"
          />
        </label>
        <label className="wik1">
          Due Date / Scheduled On:
          <input
            onChange={handleChange}
            value={data.dueDate}
            name="dueDate"
            className="form-control wik1"
            id="date"
            type="date"
          />
        </label>
        <label>
          Recurring Schedule:
          <select
            onChange={handleChange}
            value={data.recurringSchedule}
            name="recurringSchedule"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {selectData.map(option => (
              <option key={option._id} value={option.selectValue}>
                {option.selectValue}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="">
          Estimated Duration (hours):
          <input
            onChange={handleChange}
            value={data.estimatedDuration}
            name="estimatedDuration"
            className="inputStyle2"
            type="text"
            placeholder="Enter Estimated Duration (hours):"
          />
        </label>
        <label>
          Priority
          <br />
          <div className="custom-control custom-radio custom-control-inline">
            <input
              onChange={handleChange}
              value="none"
              checked={data.priority === "none"}
              type="radio"
              className="custom-control-input"
              id="priority1"
              name="priority"
            />
            <label className="custom-control-label" for="priority1">
              none
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              onChange={handleChange}
              value="low"
              checked={data.priority === "low"}
              type="radio"
              className="custom-control-input"
              id="priority2"
              name="priority"
            />
            <label className="custom-control-label" for="priority2">
              low
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              onChange={handleChange}
              value="medium"
              checked={data.priority === "medium"}
              type="radio"
              className="custom-control-input"
              id="priority3"
              name="priority"
            />
            <label className="custom-control-label" for="priority3">
              medium
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              onChange={handleChange}
              value="high"
              checked={data.priority === "high"}
              type="radio"
              className="custom-control-input"
              id="priority4"
              name="priority"
            />
            <label className="custom-control-label" for="priority4">
              high
            </label>
          </div>
        </label>
        <label>
          Category
          <select
            onChange={handleChange}
            value={data.category}
            name="category"
            className="browser-default custom-select custom-select-md mb-3"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </label>
        <label htmlFor="">
          Assigned To
          <select
            onChange={handleChange}
            value={data.assignedTo}
            name="assignedTo"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_users}
          </select>
        </label>
        <label htmlFor="">
          Additional Workers:
          <select
            onChange={handleChange}
            multiple={true}
            value={data.additionalWorkers}
            name="additionalWorkers"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_users}
          </select>
        </label>
        <label htmlFor="">
          Location:
          <select
            onChange={handleChange}
            value={data.location}
            name="location"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_locations}
          </select>
        </label>
        <label htmlFor="">
          Asset:
          <select
            onChange={handleChange}
            value={data.asset}
            name="asset"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_assets}
          </select>
        </label>
        <span style={{ color: "red", fontSize: "13px" }}>
          {response.message}
        </span>
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

export default Create;
