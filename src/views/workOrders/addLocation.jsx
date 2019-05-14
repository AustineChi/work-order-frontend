import React from "react";

const AddLocation = ({ handleChange, data }) => {
  return (
    <div
      className="modal fade"
      id="locationModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="locationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title center-align-text "
              id="locationModalLabel"
            >
              Add Location
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

export default AddLocation;
