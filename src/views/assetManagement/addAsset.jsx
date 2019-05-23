import React from "react";

const AddAsset = ({ handleChange, data }) => {
  return (
    <div
      className="modal fade"
      id="assetModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="assetModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title center-align-text " id="assetModalLabel">
              Add New Asset
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
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
                <option value="abuja">abuja</option>
                <option value="lagos">lagos</option>
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
                <option value="">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
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
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label htmlFor="">
            Assigned Users
              <select 
                onChange={handleChange}
                multiple={true}
                value={data.assignedUsers}
                name="assignedUsers"
                className="browser-default custom-select custom-select-md mb-3"              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">three</option>
                <option value="4">four</option>
              </select>
            </label>
            <label htmlFor="">
            Assigned Teams
              <select 
                onChange={handleChange}
                multiple={true}
                value={data.assignedTeams}
                name="assignedTeams"
                className="browser-default custom-select custom-select-md mb-3"              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">three</option>
                <option value="4">four</option>
              </select>
            </label>
            <label htmlFor="">
            Assigned Vendors
              <select 
                onChange={handleChange}
                multiple={true}
                value={data.assignedVendors}
                name="assignedVendors"
                className="browser-default custom-select custom-select-md mb-3"              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">three</option>
                <option value="4">four</option>
              </select>
            </label>
            <label htmlFor="">
            Assigned Customers
              <select 
                onChange={handleChange}
                multiple={true}
                value={data.assignedCustomers}
                name="assignedCustomers"
                className="browser-default custom-select custom-select-md mb-3"              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">three</option>
                <option value="4">four</option>
              </select>
            </label>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-dark fullwidth">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAsset;
