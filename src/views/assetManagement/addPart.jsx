import React from "react";

const AddPart = ({ handleChange, data }) => {
  return (
    <div
      className="modal fade"
      id="partModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="partModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title center-align-text "
              id="locationModalLabel"
            >
              Add Part / Inventory
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
              value={data.partName}
              className="inputStyle2"
              type="text"
              name="partName"
              placeholder="Enter Part Name"
            />
            <textarea
              onChange={handleChange}
              value={data.partDescription}
              name="partDescription"
              className="wik1"
              placeholder="Enter the Part's description"
            />
            <label>
              Part Category:
              <select
                onChange={handleChange}
                value={data.partCategory}
                name="partCategory"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>

            <input
              onChange={handleChange}
              value={data.unitCost}
              className="inputStyle2"
              type="text"
              name="unitCost"
              placeholder="Mention the Unit Cost"
            />
            <input
              onChange={handleChange}
              value={data.quantity}
              className="inputStyle2"
              type="text"
              name="quantity"
              placeholder="Enter the Quantity"
            />
            <input
              onChange={handleChange}
              value={data.minimumPartQuantity}
              className="inputStyle2"
              type="text"
              name=""
              placeholder="Enter the Minimum Part Quantity"
            />
            <input
              onChange={handleChange}
              value={data.barcode}
              className="inputStyle2"
              type="text"
              name="Barcode"
              placeholder="Enter the Barcode"
            />
            <input
              onChange={handleChange}
              value={data.partArea}
              className="inputStyle2"
              type="text"
              name="partArea"
              placeholder="Enter Part Area"
            />
            <textarea
              onChange={handleChange}
              value={data.additionalDetails}
              name="additionalDetails"
              className="wik1"
              placeholder="Additional Details"
            />
            <label>
              Assigned Users:
              <select
                onChange={handleChange}
                value={data.assignedUsers}
                name="assignedUsers"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label>
              Assigned Teams:
              <select
                onChange={handleChange}
                value={data.assignedTeams}
                name="assignedTeams"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label>
              Assigned Customers:
              <select
                onChange={handleChange}
                value={data.assignedCustomers}
                name="assignedCustomers"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label>
              Select Location:
              <select
                onChange={handleChange}
                value={data.selectLocation}
                name="location"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
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

export default AddPart;
