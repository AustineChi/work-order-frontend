import React, { Component } from "react";
import { connect } from "react-redux";
import { _getMeters } from "../../actions/meterActions" ;
import Sidebar from "../../layout/sidebar";
import AddMeter from "./addMeter";

class Index extends Component {

  componentDidMount() {
    this.props.getMeters();
  }

  render() {

    const renData = this.props.meterData.results ? (this.props.meterData.results.map(data => {
      return (
        <tr>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>{data.createdDate}</td>
          <td>{data.identifier}</td>
          <td>{data.colorCode}</td>
          <td>{data.brandCode}</td>
          <td>{data.brandName}</td>
        </tr>
      )
    }) ) : (
      <div>No Meters yet!</div>
    );

    return (
      <div className="container side-container">
        <Sidebar />
        <AddMeter />
        <div className="breadcrumb">
          Meters
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i class="fas fa-plus p5" />Add Meter
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="vehicle2" value="Car" />
              </th>
              <th scope="col">Date</th>
              <th scope="col">meterID</th>
              <th scope="col">color</th>
              <th scope="col">brand Code</th>
              <th scope="col">brand</th>
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meterData: state._meters.metersDetials
});

const mapDispatchToProps = dispatch => {
  return {
    getMeters: () => {
      dispatch(_getMeters());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);