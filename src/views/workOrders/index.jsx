import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import CreateWorkOrders from "./createWorkOrders";

class Index extends Component {
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
    const data = [
      {
        due: "05.07.2018",
        id: "Jenn",
        title: "Witherop",
        priority: "medium",
        assignee: "Jenn Witherop",
        location: "Kentucky",
        last_updated: "11.06.2018",
        created: "21.03.2019"
      },
      {
        due: "09.12.2018",
        id: "Kristofer",
        title: "Silverthorn",
        priority: "high",
        assignee: "Kristofer Silverthorn",
        location: "California",
        last_updated: "05.11.2018",
        created: "01.05.2019"
      },
      {
        due: "10.03.2019",
        id: "Bobbe",
        title: "Mussettini",
        priority: "medium",
        assignee: "Bobbe Mussettini",
        location: "Indiana",
        last_updated: "27.11.2018",
        created: "17.04.2019"
      },
      {
        due: "15.02.2019",
        id: "Terese",
        title: "Gansbuhler",
        priority: "high",
        assignee: "Terese Gansbuhler",
        location: "California",
        last_updated: "10.05.2018",
        created: "22.08.2018"
      }
    ];
    const renData = data.map(data => {
      return (
        <tr>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>{data.due}</td>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.priority}</td>
          <td>{data.assignee}</td>
          <td>{data.location}</td>
          <td>{data.last_updated}</td>
          <td>{data.created}</td>
          <td>
            <i className="fas fa-pen" />
            <i className="fas fa-ellipsis-v" />
          </td>
        </tr>
      );
    });

    return (
      <div className="container side-container">
        <Sidebar />
        <CreateWorkOrders handleChange={this.onChange} data={this.state.data} />
        <div className="breadcrumb">
          Work Orders
          <button
            type="button"
            className="btn btn-add float-right fs13"
            data-toggle="modal"
            data-target="#createWorkOrders"
          >
            <i className="fas fa-plus p5" />Create Work Order
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="vehicle2" value="Car" />
              </th>
              <th scope="col">Due</th>
              <th scope="col">WO #</th>
              <th scope="col">WO Title</th>
              <th scope="col">Priority</th>
              <th scope="col">Assignee(s)</th>
              <th scope="col">Location</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Created</th>
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
      </div>
    );
  }
}

export default Index;
