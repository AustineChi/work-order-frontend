import React from "react";
import { connect } from "react-redux";

const AddMeter = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title center-align-text "
              id="exampleModalLabel"
            >
              Add New Meter
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
              className="inputStyle2"
              type="text"
              name=""
              placeholder="Meter Brand:"
            />
            <input
              className="inputStyle2"
              type="text"
              name=""
              placeholder="Meter ID:"
            />
            <select className="browser-default custom-select custom-select-lg mb-3">
              <option selected>Meter Color</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <select className="browser-default custom-select custom-select-lg mb-3">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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


export default AddMeter;
