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
            <input
              onChange={handleChange}
              value={data.assetName}
              name="assetName"
              className="inputStyle2"
              type="text"
              placeholder="Asset Name"
            />
            <input
              onChange={handleChange}
              value={data.description}
              name="description"
              className="inputStyle2"
              type="text"
              placeholder="Description"
            />
            <input
              onChange={handleChange}
              value={data.model}
              name="model"
              className="inputStyle2"
              type="text"
              placeholder="Model"
            />
            <input
              onChange={handleChange}
              value={data.barcode}
              name="barcode"
              className="inputStyle2"
              type="text"
              placeholder="Barcode"
            />
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

            <input
              onChange={handleChange}
              value={data.location}
              name="location"
              className="inputStyle2"
              type="text"
              placeholder="Select Location"
            />
            <input
              onChange={handleChange}
              value={data.area}
              name="area"
              className="inputStyle2"
              type="text"
              placeholder="Area
              "
            />
            <label htmlFor="">
              Select Parent Asset
              <select
                onChange={handleChange}
                value={data.assetCategory}
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
              <select className="browser-default custom-select custom-select-md mb-3">
                <option selected>Assigned Users</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <select className="browser-default custom-select custom-select-md mb-3">
              <option selected>Assigned Teams</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <select className="browser-default custom-select custom-select-md mb-3">
              <option selected>Assigned Vendors</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <select className="browser-default custom-select custom-select-md mb-3">
              <option selected>Assigned Customers</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
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
