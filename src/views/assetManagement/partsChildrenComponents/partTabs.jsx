import React from "react";
import Details from "./details";
import WorkOrderTab from "../../../utility/workOrderTab";
import AssetTab from "../../../utility/assetTab";
import AddPart from "./addPart";



const PartTabs = ({ handleChange, data, testing  }) => {
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
              parts title 
            </h5>
            <div className="fr">
            <span>print</span>
              <span   
               data-toggle="modal"
               data-target="#partModal">
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
</ul>

<div className="tab-content">
  <div role="tabpanel" className="tab-pane active paper" id="details">
  <Details testing={testing}/>
  </div>
  <div role="tabpanel" className="tab-pane fade paper" id="workOrders">
  No Work Orders associated to this Asset
  <div className="card-box">
        <WorkOrderTab />
        <WorkOrderTab />
        <WorkOrderTab />

        </div>
  </div>
  <div role="tabpanel" className="tab-pane fade paper" id="assets">
  No assets assigned to this Asset
  <div className="card-box">
        <AssetTab />
        </div>
  </div>
</div>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
      <AddPart 
      handleChange={handleChange} 
      data={data} 
      /> 
    </div>
  );
};

export default PartTabs;
