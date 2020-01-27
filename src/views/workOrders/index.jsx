import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import CreateWorkOrder from "./createWorkOrder";
import AllParts from "../../utility/allParts";
import WorkOrderTabs from "./workOrderTabs";
import { connect } from "react-redux";
import { _getAssets } from "../../actions/assetActions";
import { _getUsers } from "../../actions/userActions";
import { _getParts } from "../../actions/partActions";
import {
  _addWorkOrder,
  _getWorkOrders,
  _workOrderDetails,
  _updateWorkOrderParts
} from "../../actions/workOrderActions";
import { _getLocations } from "../../actions/locationActions";

import Toast from "../../utility/toast";
import moment from "moment";
import { _getTimeFromObjectID } from "../../utility/functions";

class Index extends Component {
  state = {
    data: {},
    search: "",
    showModal: false,
    TabsModal: false,
    addPartsModal: false,
    modalOpacity: 1,
    workOrderPart: {
      partName: "",
      quantity: 1
    },
    toast: {
      visible: false,
      level: "success",
      message: null
    },
    select: [
      {
        _id: 1,
        selectValue: "select One"
      },
      {
        _id: 2,
        selectValue: "Select Two"
      },
      {
        _id: 3,
        selectValue: "Select Three"
      }
    ]
  };

  handleClose = () => {
    this.setState({ showModal: false, modalOpacity: 1 });
  };

  handleShow = () => {
    this.setState({ showModal: true, modalOpacity: 0.5 });
  };

  addNew = () => {
    this.setState({ showModal: true, modalOpacity: 0.5, data: {} });
  };

  closeTabModal = () => {
    this.setState({ TabsModal: false, data: {} });
  };

  showAddPartsModal = () => {
    this.props.getParts();
    this.setState({ addPartsModal: true, modalOpacity: 0.5 });
  };

  closeAddPartsModal = () => {
    this.setState({ addPartsModal: false, modalOpacity: 1 });
  };

  fetchOneData = id => {
    this.props.details(id);
    this.setState({ TabsModal: true });
  };

  handleUpdate = () => {
  };

  onChange = e => {
    let data = this.state.data;
    if (e.target.multiple === true) {
      let options = e.target.options;
      let value = data[[e.target.name]] || [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected && value.indexOf(options[i].value) === -1) {
          value.push(options[i].value);
        } else if (
          options[i].selected &&
          value.indexOf(options[i].value) !== -1
        ) {
          let index = value.indexOf(options[i].value);
          if (index !== -1) value.splice(index, 1);
        }
      }
      data[[e.target.name]] = value;
    } else {
      data[[e.target.name]] = e.target.value;
    }
    this.setState({
      data: data
    });
  };

  getPartQuantity = e => {
    let data = this.state.data;
    let value = data[[e.target.getAttribute("data-tag")]] || [];
    let obj = value.find(data => data.partName === e.target.id);
    if (obj) {
      obj.quantity = e.target.value;
      this.setState({
        workOrderPart: {
          ...this.state.workOrderPart,
          obj
        }
      });
    } else {
      this.setState({
        workOrderPart: {
          ...this.state.workOrderPart,
          quantity: e.target.value
        }
      });
    }
  };

  alternativeOnChange = e => {
    let data = this.state.data;
    let value = data[[e.target.getAttribute("data-tag")]] || [];
    let obj = value.find(data => data.partName === e.target.value);
    if (obj) {
      let index = value.indexOf(obj);
      if (index !== -1) value.splice(index, 1);
    } else {
      value.push({
        partName: e.target.value,
        quantity: this.state.workOrderPart.quantity
      });
      this.setState({
        workOrderPart: {
          ...this.state.workOrderPart,
          quantity: 1
        }
      });
    }
    data[[e.target.getAttribute("data-tag")]] = value;
    this.setState({
      data: data
    });
  };

  showToast = data => {
    this.setState(
      {
        toast: {
          ...this.state.toast,
          visible: data.success ? true : false,
          message: data.message,
          level: data.success === true ? "success" : "danger"
        }
      },
      () => {
        setTimeout(
          () =>
            this.setState({ toast: { ...this.state.toast, visible: false } }),
          3000
        );
      }
    );
  };

  handleClick = () => {
    this.props.addNewWorkOrder(this.state.data);
  };

  onsearch = (e) => {
    this.setState({ search: e.target.value });

  };

  updateWorkOrderParts = () => {
    this.props.updateWorkOrderParts(this.state.data);
  };

getTimeFromObjectID = (id) => {
}
componentDidMount() {
    this.props.getAssets();
    this.props.getUsers();
    this.props.getWorkOrders();
    this.props.getLocations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response.data) {
      if (this.props.workOrdersData.indexOf(nextProps.response.data) === -1)
        this.props.workOrdersData.unshift(nextProps.response.data);
    }
    if (nextProps.response.success === true) {
      this.setState({ showModal: false, data: {}, modalOpacity: 1 });
      setTimeout(() => this.showToast(nextProps.response), 2000);
    }
    if (nextProps.workOrderDetails) {
      this.setState({ data: nextProps.workOrderDetails });
    }
  }

  render() {
    let filteredWorkOrders = this.props.workOrdersData.filter(workOrder => {
      return workOrder.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    let renData = this.props.workOrdersData.length ? (
      filteredWorkOrders.map(data => {
        return (
          <tr
            onClick={() => this.fetchOneData(data._id)}
            data-toggle="modal"
            data-target="#tabsModal"
          >
            <td>
              <input type="checkbox" name="vehicle2" value="Car" />
            </td>
            <td>{data.title}</td>
            <td>{data.dueDate}</td>
            <td>Open</td>
            <td>{data.priority}</td>
            <td>{data.assignedTo}</td>
            <td>{data.location}</td>
            <td>{moment(data.updated).format("D MMMM YYYY")}</td>
            <td>{this.getTimeFromObjectID(data.created)}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td>
        No Work Orders yet!
        </td>
        </tr>
    );

    return (
      <div className=" side-container">
        <Sidebar />
        <div className="breadcrumb">
          Work Orders
          <button
            type="button"
            className="btn btn-add float-right fs13"
            onClick={this.addNew}
          >
            <i className="fas fa-plus p5" />
            Create Work Order
          </button>
        </div>
        <div>
          <input onChange={this.onsearch}  className="float-right" type="text" name="search" id="" placeholder="search..."/>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="vehicle2" value="Car" />
              </th>
              <th scope="col">WO Title</th>
              <th scope="col">Due</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
              <th scope="col">Assignee(s)</th>
              <th scope="col">Location</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Created</th>
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
        <CreateWorkOrder
          handleChange={this.onChange}
          handleClick={this.handleClick}
          data={this.state.data}
          response={this.props.response}
          users={this.props.users}
          assets={this.props.assets}
          locations={this.props.locations}
          selectData={this.state.select}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        />
        <WorkOrderTabs
          handleUpdate={this.handleUpdate}
          response={this.props.response}
          workOrderDetails={this.props.workOrderDetails}
          handleShow={this.handleShow}
          closeTabModal={this.closeTabModal}
          TabsModal={this.state.TabsModal}
          modalOpacity={this.state.modalOpacity}
          showAddPartsModal={this.showAddPartsModal}
        />
        <AllParts
          parts={this.props.parts}
          addPartsModal={this.state.addPartsModal}
          closeAddPartsModal={this.closeAddPartsModal}
          handleChange={this.alternativeOnChange}
          getPartQuantity={this.getPartQuantity}
          workOrderDetails={this.props.workOrderDetails}
          updateWorkOrderParts={this.updateWorkOrderParts}
        />
        <Toast
          level={this.state.toast.level}
          message={this.state.toast.message}
          visible={this.state.toast.visible}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state._users.users,
  workOrdersData: state._workOrders.workOrders,
  workOrderDetails: state._workOrders.workOrderDetails,
  response: state._workOrders.response,
  assets: state._assets.assets,
  locations: state._locations.locations,
  parts: state._parts.parts
});

const mapDispatchToProps = dispatch => {
  return {
    addNewWorkOrder: data => {
      dispatch(_addWorkOrder(data));
    },
    updateWorkOrderParts: data => {
      dispatch(_updateWorkOrderParts(data));
    },
    getAssets: () => {
      dispatch(_getAssets());
    },
    details: id => {
      dispatch(_workOrderDetails(id));
    },
    getUsers: () => {
      dispatch(_getUsers());
    },
    getWorkOrders: () => {
      dispatch(_getWorkOrders());
    },
    getParts: () => {
      dispatch(_getParts());
    },
    getLocations: () => {
      dispatch(_getLocations());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
