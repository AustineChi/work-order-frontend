import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddAsset from "./assetsChildrenComponents/addAsset";
import AssetTabs from "./assetsChildrenComponents/assetTabs";
import AddPartsToAssets from "../../utility/addPartsToAssets";
import { connect } from "react-redux";
import {
  _addAsset,
  _getAssets,
  _assetDetails,
  _filterAssets,
  _updateAsset,
  _resetAssetDetails
} from "../../actions/assetActions";
import { _getParts } from "../../actions/partActions";
import { _filterWorkOrders } from "../../actions/workOrderActions";
import { _getUsers } from "../../actions/userActions";
import { _getTeams } from "../../actions/teamActions";
import { _getLocations } from "../../actions/locationActions";
import Toast from "../../utility/toast";

class Assets extends Component {
  state = {
    data: {},
    showModal: false,
    addPartsModal: false,
    TabsModal: false,
    modalOpacity: 1,
    toast: {
      visible: false,
      level: "success",
      message: null
    }
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

  showAddPartsModal = () => {
    this.setState({ addPartsModal: true, modalOpacity: 0.5 });
  };

  closeAddPartsModal = () => {
    this.setState({ addPartsModal: false, modalOpacity: 1 });
  };
  closeTabModal = () => {
    this.setState({ TabsModal: false });
  };
  fetchOneData = id => {
    this.props.details(id);
    this.setState({ TabsModal: true, modalOpacity: 1 });
  };

  fetchFilteredAssets = (id, assetName) => {
    if (id.key == "assets")
      this.props.getFilteredAssets({ parentAsset: assetName });
    if (id.key == "workorders")
      this.props.getFilteredWorkOrders({ asset: assetName });
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

  alternativeOnChange = e => {
    let data = this.state.data;
    let value = data[[e.target.name]] || [];
    if (value.indexOf(e.target.value) === -1) {
      value.push(e.target.value);
    } else if (value.indexOf(e.target.value) !== -1) {
      let index = value.indexOf(e.target.value);
      if (index !== -1) value.splice(index, 1);
    }
    data[[e.target.name]] = value;
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
    this.props.addNewAsset(this.state.data);
  };

  updateAsset = () => {
    this.props.updateAsset(this.state.data);
  };

  componentWillMount() {
    this.props.resetAssetDetails();
  }

  componentDidMount() {
    this.props.getAssets();
    this.props.getUsers();
    this.props.getTeams();
    this.props.getLocations();
    this.props.getParts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response.data) {
      if (this.props.assetsData.indexOf(nextProps.response.data) === -1)
        this.props.assetsData.unshift(nextProps.response.data);
    }
    if (nextProps.response.success === true) {
      this.setState({ showModal: false, data: {}, modalOpacity: 1 });
      setTimeout(() => this.showToast(nextProps.response), 2000);
    }
    if (nextProps.assetDetails) {
      this.setState({ data: nextProps.assetDetails });
    }
    if (nextProps.addPartsModal === true) {
      this.setState({ addPartsModal: false, modalOpacity: 1 });
    }
  }

  render() {
    let id = 1;
    const renData = this.props.assetsData.length ? (
      this.props.assetsData.map(data => {
        return (
          <tr onClick={() => this.fetchOneData(data._id)}>
            <td height="30px">{data.assetName}</td>
            <td>{id++}</td>
            <td>{data.location}</td>
            <td>{data.area}</td>
            <td>{data.model}</td>
            <td>{data.serialNumber}</td>
            <td>{data.assetCategory}</td>
            <td>{data.description}</td>
            <td>{data.primaryUser}</td>
            <td>{data.assignedUsers}</td>
            <td>{data.assignedTeams}</td>
            <td>{data.assignedVendors}</td>
            <td>{data.parentAsset}</td>
            <td>{data._id}</td>
          </tr>
        );
      })
    ) : (
      <div>No Asset yet!</div>
    );

    return (
      <div className="container side-container">
        <Sidebar />
        <div className="breadcrumb">
          Assets
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            onClick={this.addNew}
          >
            <i className="fas fa-plus p5" />
            Add Asset
          </button>
        </div>
        <div className="overflow-x">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Location</th>
                <th scope="col">Area</th>
                <th scope="col">Model</th>
                <th scope="col">Serial Num</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Primary User</th>
                <th scope="col">Assigned Users</th>
                <th scope="col">Assigned Teams</th>
                <th scope="col">Assigned Vendors</th>
                <th scope="col">Parent Asset</th>
                <th scope="col">Date Created</th>
              </tr>
            </thead>
            <tbody>{renData}</tbody>
          </table>
        </div>

        <AddAsset
          handleChange={this.onChange}
          handleClick={this.handleClick}
          data={this.state.data}
          response={this.props.response}
          users={this.props.users}
          teams={this.props.teams}
          locations={this.props.locations}
          assets={this.props.assetsData}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        />

        <AssetTabs
          handleShow={this.handleShow}
          closeTabModal={this.closeTabModal}
          TabsModal={this.state.TabsModal}
          assetDetails={this.state.data}
          modalOpacity={this.state.modalOpacity}
          testing={this.state.testing}
          fetchFilteredAssets={this.fetchFilteredAssets}
          filteredAssets={this.props.filteredAssets}
          filteredWorkOrders={this.props.filteredWorkOrders}
          showAddPartsModal={this.showAddPartsModal}
        />

        <AddPartsToAssets
          handleChange={this.alternativeOnChange}
          parts={this.props.parts}
          addPartsModal={this.state.addPartsModal}
          closeAddPartsModal={this.closeAddPartsModal}
          assetDetails={this.props.assetDetails || []}
          updateAsset={this.updateAsset}
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
  assetsData: state._assets.assets,
  parts: state._parts.parts,
  filteredAssets: state._assets.filteredAssets,
  filteredWorkOrders: state._workOrders.filteredWorkOrders,
  assetDetails: state._assets.assetDetails,
  teams: state._teams.teams,
  response: state._assets.response,
  locations: state._locations.locations
});

const mapDispatchToProps = dispatch => {
  return {
    addNewAsset: data => {
      dispatch(_addAsset(data));
    },
    getAssets: () => {
      dispatch(_getAssets());
    },
    getFilteredAssets: data => {
      dispatch(_filterAssets(data));
    },
    updateAsset: data => {
      dispatch(_updateAsset(data));
    },
    resetAssetDetails: () => {
      dispatch(_resetAssetDetails());
    },
    getParts: () => {
      dispatch(_getParts());
    },
    getFilteredWorkOrders: data => {
      dispatch(_filterWorkOrders(data));
    },
    details: id => {
      dispatch(_assetDetails(id));
    },
    getUsers: () => {
      dispatch(_getUsers());
    },
    getTeams: () => {
      dispatch(_getTeams());
    },
    getLocations: () => {
      dispatch(_getLocations());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assets);
