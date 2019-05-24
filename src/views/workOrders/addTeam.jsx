import React from "react";

const AddTeam = ({ handleChange, data }) => {
    return (
      <div
        className="modal fade"
        id="teamModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title center-align-text "
                id="teamModalLabel"
              >
                Create Team
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
  
  export default AddTeam;