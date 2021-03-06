import React from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";

const WorkOrderTabs = ({
  handleUpdate,
  response,
  workOrderDetails,
  TabsModal,
  modalOpacity,
  handleShow,
  closeTabModal,
  showAddPartsModal
}) => {
  let workOrderParts = workOrderDetails.parts || [];
  const _parts = workOrderParts.length
    ? workOrderParts.map((part, i) => {
        return (
          <tr className="table__row" key={i}>
            <td className="table__cell">{part.partName}</td>
            <td className="table__cell ">
              <div className="table__cell-wrapper">{part.quantity}</div>
            </td>
            <td className="table__cell ">
              <div className="table__cell-wrapper ">{part.cost}</div>
            </td>
          </tr>
        );
      })
    : "";

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
        <Tabs
          defaultActiveKey={"details"}
          animation={false}
          id="noanim-tab-example"
        >
          <Tab eventKey={"details"} title="Details">
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

            <div className="parts-box shadow-sm">
              <h5>Parts</h5>

              <table className="parts-table">
                <thead className="table__header">
                  <tr className="table__row">
                    <th className="table__header-cell table__header-cell--inner">
                      Part Name
                    </th>
                    <th className="table__header-cell table__header-cell--inner small_table__cell_width">
                      <div className="table__header-cell-wrapper">Qty</div>
                    </th>
                    <th className="table__header-cell table__header-cell--inner small_table__cell_width">
                      <div className="table__header-cell-wrapper">Cost</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table__body">{_parts}</tbody>
              </table>

              <button
                className="btn btn-rensource-blue"
                onClick={showAddPartsModal}
              >
                <i className="fas fa-plus p5" />
                Add Parts
              </button>
            </div>
          </Tab>
          <Tab eventKey={"comments"} title="Comments">
          <div class="card mb-4">
                  <h6 class="card-header">Comments</h6>
                  <div class="card-body">
                    <div class="media pb-1 mb-3">
                      <div class="media-body ml-3">
                        <a href="javascript:void(0)">Amanda Warner</a>
                        
                        <p class="my-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                        <div class="clearfix">
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-down"></span>
                          </a>
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-up mr-2"></span>
                          </a>
                          <span class="float-left text-muted small">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div class="media pb-1 mb-3">
                      <div class="media-body ml-3">
                        <a href="javascript:void(0)">Hallie Lewis</a>
                        <p class="my-1">Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.</p>
                        <div class="clearfix">
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-down"></span>
                          </a>
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-up mr-2"></span>
                          </a>
                          <span class="float-left text-muted small">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-body ml-3">
                        <a href="javascript:void(0)">Alice Hampton</a>
                        <p class="my-1">Eam facilis laboramus reprehendunt ei, ex esse fastidii per.</p>
                        <div class="clearfix">
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-down"></span>
                          </a>
                          <a href="javascript:void(0)" class="float-right text-lightest small">
                            <span class="ion ion-ios-thumbs-up mr-2"></span>
                          </a>
                          <span class="float-left text-muted small">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0)" class="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
                </div>
                <div>
                <textarea
            // onChange={}
            name="comment"
            placeholder="Add comment"
            className="wo-comment-box"
          />
                </div>

          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};

export default WorkOrderTabs;
