import React from "react";
import { Modal } from "react-bootstrap";

const AddAsset = ({
  handleChange,
  handleClick,
  data,
  response,
  users,
  teams,
  locations,
  assets,
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
  const _teams = teams.length
    ? teams.map(team => (
        <option key={team._id} value={team.name}>
          {team.name}
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
        <Modal.Title>{data._id ? "Update Asset" : "Add New Asset"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="">
          Asset Name:
          <input
            onChange={handleChange}
            value={data.assetName}
            name="assetName"
            className="inputStyle2"
            type="text"
            placeholder="Asset Name"
          />
        </label>
        <label htmlFor="">
          Description:
          <input
            onChange={handleChange}
            value={data.description}
            name="description"
            className="inputStyle2"
            type="text"
            placeholder="Description"
          />
        </label>
        <label htmlFor="">
          Model:
          <input
            onChange={handleChange}
            value={data.model}
            name="model"
            className="inputStyle2"
            type="text"
            placeholder="Model"
          />
        </label>
        <label htmlFor="">
          Serial Number:
          <input
            onChange={handleChange}
            value={data.serialNumber}
            name="serialNumber"
            className="inputStyle2"
            type="text"
            placeholder="Serial Number"
          />
        </label>
        <label htmlFor="">
          Asset Category
          <select
            onChange={handleChange}
            value={data.assetCategory}
            name="assetCategory"
            className="browser-default custom-select custom-select-md mb-3"
          >
            <option value="">none</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </label>
        <label htmlFor="">
          Location
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
          Area:
          <input
            onChange={handleChange}
            value={data.area}
            name="area"
            className="inputStyle2"
            type="text"
            placeholder="Area
              "
          />
        </label>
        <label htmlFor="">
          Select Parent Asset
          <select
            onChange={handleChange}
            value={data.parentAsset}
            name="parentAsset"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_assets}
          </select>
        </label>
        <label htmlFor="">
          Primary User
          <select
            onChange={handleChange}
            value={data.primaryUser}
            name="primaryUser"
            className="browser-default custom-select custom-select-md mb-3"
          >
            {_users}
          </select>
        </label>
        <label htmlFor="">
          Assigned Users
          <select
            onChange={handleChange}
            multiple={true}
            value={data.assignedUsers}
            name="assignedUsers"
            className="browser-default custom-select custom-select-md mb-3"
          >
            {_users}
          </select>
        </label>
        <label htmlFor="">
          Assigned Teams
          <select
            onChange={handleChange}
            multiple={true}
            value={data.assignedTeams}
            name="assignedTeams"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {_teams}
          </select>
        </label>
        <label htmlFor="">
          Assigned Customers
          <select
            onChange={handleChange}
            multiple={true}
            value={data.assignedCustomers}
            name="assignedCustomers"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">three</option>
            <option value="4">four</option>
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

export default AddAsset;
