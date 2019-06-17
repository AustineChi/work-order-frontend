import React from "react";

const Details = ({ partDetails }) => {
  return (
    <div>
      <h5>Parts Details</h5>
      <div className="row">
        <div className="col-sm-6">
          <label className="label-style">
            Part Name:
            <p>{partDetails.partName}</p>
          </label>
          <label className="label-style">
            Part Description:
            <p>{partDetails.partDescription}</p>
          </label>
          <label className="label-style">
            Quantity:
            <p>{partDetails.quantity}</p>
          </label>
        </div>
        <div className="col-sm-6">
          <label className="label-style">
            ID:
            <p>{partDetails._id}</p>
          </label>
          <label className="label-style">
            Unit Cost:
            <p>{partDetails.unitCost}</p>
          </label>
          <label className="label-style">
            Minimum Quantity:
            <p>{partDetails.minimumPartQuantity}</p>
          </label>
        </div>
      </div>
      <h5>Area Details</h5>
      <div className="row">
        <div className="col-sm-6">
          <label className="label-style">
            Area:
            <p>{partDetails.partArea}</p>
          </label>
        </div>
        <div className="col-sm-6">
          <label className="label-style">
            Assigned Location:
            <p>{partDetails.location}</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Details;
