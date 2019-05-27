import React from "react";
import Details from "./details";
import PartTab from "../../../utility/PartTab";
import WorkOrderTab from "../../../utility/workOrderTab";
import AddAsset from "./addAsset"

const AssetTabs = ({ handleChange, data, testing  }) => {
  return (
    <div
      className="modal fade"
      id="tabsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="tabsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title center-align-text"
              id="tabsModalLabel"
            >
              Asset title 
            </h5>
            <div className="fr">
            <span>print</span>
              <span   
               data-toggle="modal"
               data-target="#assetModal">
               edit
               </span>
              <span>delete</span>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            
          </div>
          <div className="modal-body">
          <ul className="nav nav-tabs" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" href="#details" role="tab" data-toggle="tab">Details</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#workOrders" role="tab" data-toggle="tab">Work Orders</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#assets" role="tab" data-toggle="tab">Assets</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#parts" role="tab" data-toggle="tab">Parts</a>
  </li>
</ul>

<div className="tab-content">
  <div role="tabpanel" className="tab-pane active paper" id="details">
  <Details testing={testing}/>
  </div>
  <div role="tabpanel" className="tab-pane fade paper" id="workOrders">
  No Work Orders associated to this Asset
<WorkOrderTab />
  </div>
  <div role="tabpanel" className="tab-pane fade paper" id="assets">
  No Subassets assigned to this Asset
  </div>
  <div role="tabpanel" className="tab-pane fade paper" id="parts">
  No parts assigned to this Asset
  <PartTab />
  <div className="card-box">

        </div>
  </div>
</div>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
      <AddAsset
      handleChange={handleChange} 
      data={data} 
      /> 
    </div>
  );
};

export default AssetTabs;
