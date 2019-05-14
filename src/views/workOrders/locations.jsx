import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddLocation from "./addLocation";

class Locations extends Component {
  state = {
    data: {}
  };

  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
    console.log(this.state.data);
  };
  render() {
    return (
      <div className="container side-container">
        <Sidebar />
        <AddLocation handleChange={this.onChange} data={this.state.data} />
        <div className="breadcrumb">
          Locations
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            data-toggle="modal"
            data-target="#locationModal"
          >
            <i className="fas fa-plus p5" />Add Location
          </button>
        </div>

        <div className="card-box">
          <div className="card">
            <div className="card-header">
              Iponri Market <i className="fas fa-ellipsis-v fr" />
            </div>
            <div className="card-body">
              
              <i className="fas fa-map-marker-alt p5" />Iponri Rd, Alaka, Lagos,
              Nigeria
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Sabon Gari <i className="fas fa-ellipsis-v fr" />
            </div>
            <div className="card-body">
              <i className="fas fa-map-marker-alt p5" /> Sabon Gari Market Kano
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
