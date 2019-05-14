import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";

class ChangeLog extends Component {
  render() {
    const data = [
      {
        id: 1,
        Date: "2019/04/29",
        Time: "10:30 AM",
        Engineer: "Roselle Trendle",
        old_id: "42254-036",
        new_id: "68258-3037",
        change_type: "decommission"
      },
      {
        id: 2,
        Date: "2019/04/22",
        Time: "1:11 AM",
        Engineer: "Granville Nuscha",
        old_id: "63956-001",
        new_id: "58980-441",
        change_type: "replacement"
      },
      {
        id: 3,
        Date: "2019/04/16",
        Time: "1:38 AM",
        Engineer: "Laurette Balcombe",
        old_id: "11410-901",
        new_id: "62856-246",
        change_type: "replacement"
      },
      {
        id: 4,
        Date: "2019/04/18",
        Time: "8:06 PM",
        Engineer: "Jerrome Nower",
        old_id: "51138-074",
        new_id: "0378-6925",
        change_type: "replacement"
      },
      {
        id: 5,
        Date: "2019/04/21",
        Time: "8:25 PM",
        Engineer: "Lou Izzett",
        old_id: "0409-4778",
        new_id: "62559-159",
        change_type: "replacement"
      }
    ];
    const renData = data.map(data => {
      return (
        <tr>
          <td>{data.Date}</td>
          <td>{data.Time}</td>
          <td>{data.Engineer}</td>
          <td>{data.old_id}</td>
          <td>{data.new_id}</td>
          <td>{data.change_type}</td>
          <td>
            <i className="far fa-eye" />
            <i className="fas fa-pen" />
            <i className="fas fa-trash-alt" />
          </td>
        </tr>
      );
    });
    return (
      <div className="container side-container">
        <Sidebar />
        <div className="breadcrumb">Meter Change Log</div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Engineer</th>
              <th scope="col">Old ID</th>
              <th scope="col">New ID</th>
              <th scope="col">Change Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
      </div>
    );
  }
}

export default ChangeLog;
