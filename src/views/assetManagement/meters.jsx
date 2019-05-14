import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddMeter from "./addMeter";
class Index extends Component {
  render() {
    const data = [
      {
        id: 1,
        date: "2/30/2019",
        meterID: "64-3367281",
        color: "Mauv",
        category: "inventory",
        brand: "spark"
      },
      {
        id: 2,
        date: "2/30/2019",
        meterID: "28-9498253",
        color: "Fuscia",
        category: "inventory",
        brand: "spark"
      },
      {
        id: 3,
        date: "2/30/2019",
        meterID: "47-9292841",
        color: "Puce",
        category: "inventory",
        brand: "spark"
      },
      {
        id: 4,
        date: "2/30/2019",
        meterID: "35-0486180",
        color: "Crimson",
        category: "inventory",
        brand: "spark"
      },
      {
        id: 5,
        date: "2/30/2019",
        meterID: "52-8495642",
        color: "Puce",
        category: "deployed",
        brand: "spark"
      }
    ];

    const renData = data.map(data => {
      return (
        <tr>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>{data.date}</td>
          <td>{data.meterID}</td>
          <td>{data.color}</td>
          <td>{data.category}</td>
          <td>{data.brand}</td>
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
              <th scope="col">category</th>
              <th scope="col">brand</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
      </div>
    );
  }
}

export default Index;
