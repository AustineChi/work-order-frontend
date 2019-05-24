import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddTeam from "./addTeam";

class Teams extends Component {
  state = {
    data: {}
  };

  onChange = e => {
    let data = this.state.data;
    if (e.target.multiple === true) {
      let options = e.target.options;
      let value = data[[e.target.name]] || [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected && value.indexOf(options[i].value) === -1) {
          value.push(options[i].value);
        }
        else if (options[i].selected && value.indexOf(options[i].value) !== -1){
          let index = value.indexOf(options[i].value);
          if (index !== -1) value.splice(index, 1);
        }
      }
    data[[e.target.name]] = value         
    }
    else {
      data[[e.target.name]] = e.target.value; 
    }
    this.setState({
      data: data
    });
    console.log(this.state.data)
  };

  render() {
    return (
      <div className="container side-container">
        <Sidebar />
        <AddTeam handleChange={this.onChange} data={this.state.data} />
        <div className="breadcrumb">
          Teams
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            data-toggle="modal"
            data-target="#teamModal"
          >
            <i className="fas fa-plus p5" />Create New Team
          </button>
        </div>

        <div className="card-box">
          <div className="card">
            <div className="card-header">
              Team A<i className="fas fa-ellipsis-v fr" />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
             Team B <i className="fas fa-ellipsis-v fr" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
