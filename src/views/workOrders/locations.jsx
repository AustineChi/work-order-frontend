import React, { Component } from "react";
import { connect } from "react-redux";
import { _addLocation, _getLocations } from "../../actions/locationActions";
import Sidebar from "../../layout/sidebar";
import AddLocation from "./addLocation";
import Toast from "../../utility/toast";

class Locations extends Component {
  state = {
    data: {},
    showModal: false,
    toast: {
      visible: false,
      level: "success",
      message: null
    }
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };
  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  handleClick = () => {
    this.props.addLocation(this.state.data);
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
          4000
        );
      }
    );
  };

  componentDidMount() {
    this.props.getLocations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response.data) {
      if (this.props.locationsData.indexOf(nextProps.response.data) === -1)
        this.props.locationsData.unshift(nextProps.response.data);
    }
    if (nextProps.response.success === true) {
      this.setState({ showModal: false, data: {} });
      setTimeout(() => this.showToast(nextProps.response), 2000);
    }
  }

  render() {
    const locationList = this.props.locationsData.length ? (
      this.props.locationsData.map(location => {
        return (
          <div className="card" key={location.name}>
            <div className="card-header">
              {location.name} <i className="fas fa-ellipsis-v fr" />
            </div>
            <div className="card-body">
              <i className="fas fa-map-marker-alt p5" /> {location.address}
            </div>
          </div>
        );
      })
    ) : (
      <div>No Locations yet!</div>
    );
    return (
      <div className="container side-container">
        <Sidebar />
        <AddLocation
          handleChange={this.onChange}
          handleClick={this.handleClick}
          data={this.state.data}
          response={this.props.response}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        />
        <div className="breadcrumb">
          Locations
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            onClick={this.handleShow}
          >
            <i className="fas fa-plus p5" />
            Add Location
          </button>
        </div>

        <div className="card-box">{locationList}</div>
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
  locationsData: state._locations.locations,
  response: state._locations.response
});

const mapDispatchToProps = dispatch => {
  return {
    addLocation: data => {
      dispatch(_addLocation(data));
    },
    getLocations: () => {
      dispatch(_getLocations());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
