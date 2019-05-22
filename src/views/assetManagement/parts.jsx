import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddPart from "./addPart";

class Parts extends Component {
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
    const data = [
      {
        name: "Korella Gilffilland",
        id: 1,
        quantity: 79,
        cost: "$8.41",
        barcode: "#446",
        area: "57461 Warner Way",
        category: "Alexander & Baldwin Holdings, Inc.",
        description:
          "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
        location: "Michigan",
        date_created: "2018-06-29"
      },
      {
        name: "Tawsha Tollmache",
        id: 2,
        quantity: 35,
        cost: "$9.97",
        barcode: "#0f3",
        area: "7983 Mendota Alley",
        category: "Niagara Mohawk Holdings, Inc.",
        description:
          "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
        location: "Alabama",
        date_created: "2019-03-14"
      },
      {
        name: "Melonie Alliband",
        id: 3,
        quantity: 84,
        cost: "$2.77",
        barcode: "#0ee",
        area: "93 Sutherland Terrace",
        category: "Gores Holdings II, Inc.",
        description:
          "quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
        location: "Kansas",
        date_created: "2019-03-19"
      },
      {
        name: "Simone Dellenbrok",
        id: 4,
        quantity: 51,
        cost: "$4.25",
        barcode: "#a54",
        area: "3 Jackson Hill",
        category: "Active Alts Contrarian ETF",
        description:
          "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
        location: "Iowa",
        date_created: "2019-04-20"
      }
    ];
    const renData = data.map(data => {
      return (
        <tr>
          <td>{data.name}</td>
          <td>{data.id}</td>
          <td>{data.quantity}</td>
          <td>{data.cost}</td>
          <td>{data.barcode}</td>
          <td>{data.area}</td>
          <td>{data.category}</td>
          <td>{data.description}</td>
          <td>{data.location}</td>
          <td>{data.date_created}</td>
        </tr>
      );
    });
    return (
      <div className="container side-container">
        <Sidebar />
        <AddPart handleChange={this.onChange} data={this.state.data} />
        <div className="breadcrumb">
          Parts
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            data-toggle="modal"
            data-target="#partModal"
          >
            <i className="fas fa-plus p5" />Add Part
          </button>
        </div>
        <div className="overflow-x">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Quantity</th>
                <th scope="col">Cost</th>
                <th scope="col">Barcode</th>
                <th scope="col">Area</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Date Created</th>
              </tr>
            </thead>
            <tbody>{renData}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Parts;
