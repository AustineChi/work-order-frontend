import React from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";

const WorkOrderTabs = ({
  handleUpdate,
  response,
  workOrderDetails,
  TabsModal,
  modalOpacity,
  handleShow,
  closeTabModal
}) => {
  return (
    <Modal show={TabsModal} id="modal-lg" style={{ opacity: modalOpacity }}>
      <Modal.Header>
        <Modal.Title> {workOrderDetails.title}</Modal.Title>
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
            <div className="mb2">{workOrderDetails.description}</div>
            <div className="dropdown mb2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Open
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Open
                </a>
                <a className="dropdown-item" href="#">
                  In Progress
                </a>
                <a className="dropdown-item" href="#">
                  On Hold
                </a>
                <a className="dropdown-item" href="#">
                  Completed
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label className="label-style">
                  Priority:
                  <p>{workOrderDetails.priority}</p>
                </label>
                <label className="label-style">
                  Due Date:
                  <p>{workOrderDetails.dueDate}</p>
                </label>
                <label className="label-style">
                  Category:
                  <p>{workOrderDetails.category}</p>
                </label>
                <label className="label-style">
                  Assigned To:
                  <p>{workOrderDetails.assignedTo}</p>
                </label>
              </div>
              <div className="col-sm-6">
                <label className="label-style">
                  Location:
                  <p>{workOrderDetails.location}</p>
                </label>
                <label className="label-style">
                  Asset:
                  <p>{workOrderDetails.asset}</p>
                </label>
                <label className="label-style">
                  Created:
                  <p>{workOrderDetails.updated}</p>
                </label>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};

export default WorkOrderTabs;
