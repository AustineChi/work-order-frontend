import React from "react";
import Details from "./details";
import PartTab from "../../../utility/parts";
import AssetTab from "../../../utility/assetTab";
import WorkOrderTab from "../../../utility/workOrderTab";
import { Modal, Tab, Tabs } from "react-bootstrap";

const AssetTabs = ({
  handleShow,
  closeTabModal,
  TabsModal,
  assetDetails,
  testing,
  modalOpacity,
  fetchFilteredAssets,
  filteredAssets,
  filteredWorkOrders,
  getParts,
  showAddPartsModal
}) => {
  console.log("wika filica", assetDetails.parts)
  return (
    <Modal show={TabsModal} id="modal-lg" style={{ opacity: modalOpacity }}>
      <Modal.Header>
        <Modal.Title> {assetDetails.assetName}</Modal.Title>
        <div className="fr">
          <span>print</span>
          <span onClick={handleShow}>edit</span>
          <span>delete</span>
          <button type="button" className="close" onClick={closeTabModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey={"details"} animation={false} id="noanim-tab-example" onSelect={(key)  => fetchFilteredAssets({key }, assetDetails.assetName)}
>
          <Tab eventKey={"details"} title="Details">
            <Details assetDetails={assetDetails} />
          </Tab>
          <Tab eventKey={"workorders"} title="Work Orders">
          <WorkOrderTab filteredWorkOrders={filteredWorkOrders}/>
          </Tab>
          <Tab eventKey={"assets"} title="Assets" >
            <AssetTab filteredAssets={filteredAssets}/>
          </Tab>
          <Tab eventKey={"parts"} title="Parts">
          <PartTab parts={assetDetails.parts || []}/>
            <button className="btn btn-white" onClick={showAddPartsModal}>
            <i className="fas fa-plus p5" />Add Parts
          </button>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};

export default AssetTabs;
