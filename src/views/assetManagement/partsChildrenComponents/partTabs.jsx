import React from "react";
import Details from "./details";
import WorkOrderTab from "../../../utility/workOrderTab";
import AssetTab from "../../../utility/assetTab";
import { Modal, Tab, Tabs } from "react-bootstrap";

const PartTabs = ({
  handleShow,
  closeTabModal,
  TabsModal,
  partDetails,
  modalOpacity
}) => {
  return (
    <Modal show={TabsModal} id="modal-lg" style={{ opacity: modalOpacity }}>
      <Modal.Header>
        <Modal.Title> {partDetails.partName}</Modal.Title>
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
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Details">
            <Details partDetails={partDetails} />
          </Tab>
          <Tab eventKey={2} title="Work Orders">
            No Work Orders associated to this Asset
            <div className="card-box"></div>
          </Tab>
          <Tab eventKey={3} title="Assets">
            <div className="card-box"></div>
            No Subassets assigned to this Asset
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};

export default PartTabs;
