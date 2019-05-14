import React from "react";

const Create = ({ handleChange, data }) => {
  return (
    <div
      className="modal fade"
      id="createWorkOrders"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createWorkOrdersLabels"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title center-align-text "
              id="exampleModalLabel"
            >
              Create Work Order
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
              value={data.value}
              name="title"
              className="inputStyle2"
              type="text"
              placeholder="Title:"
            />
            <textarea
              onChange={handleChange}
              value={data.description}
              name="description"
              placeholder="Description"
            />
            <span className="wik1">
              <label className="wik1">Due Date / Scheduled On</label>
              <input
                onChange={handleChange}
                value={data.dueDate}
                name="dueDate"
                className="form-control wik1"
                id="date"
                type="date"
              />
            </span>

            <label>
              Recurring Schedule:
              <select
                onChange={handleChange}
                value={data.recurringSchedule}
                name="recurringSchedule"
                className="browser-default custom-select custom-select-md mb-3"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <input
              onChange={handleChange}
              value={data.estimatedDuration}
              name="estimatedDuration"
              className="inputStyle2"
              type="text"
              placeholder="Estimated Duration (hours):"
            />
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
            <label>
              Recurring Schedule
              <select
                onChange={handleChange}
                value={data.recurringSchedule}
                name="recurringSchedule"
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
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label htmlFor="">
              Additional Workers
              <select className="browser-default custom-select custom-select-md mb-3">
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
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </label>
            <label htmlFor="">
              Asset
              <select className="browser-default custom-select custom-select-md mb-3">
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

export default Create;
