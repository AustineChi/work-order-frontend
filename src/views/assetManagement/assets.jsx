import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddAsset from "./addAsset";

class Assets extends Component {
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
        name: "Godzilla and Mothra: The Battle for Earth (Gojira vs. Mosura)",
        id: "755-41-6681",
        location: "Stockton",
        area: "California",
        model: "52664-007",
        barcode: "88-3525031",
        category: "Action|Sci-Fi",
        description: "Aenean fermentum. Donec ut mauris eget massa tempor",
        primary_user: "Lucille Catcheside",
        assigned_users: "April Karpman",
        assigned_teams: "Brainbox",
        assigned_vendors: "karl oo",
        parent_asset:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        date_created: "02.02.2019"
      },
      {
        name: "Gate II: Trespassers, The",
        id: "432-85-5291",
        location: "Schenectady",
        area: "New York",
        model: "0378-0215",
        barcode: "94-7331274",
        category: "Horror",
        description: "‪‪Aenean fermentum. Donec ut mauris eget massa tempor",
        primary_user: "Giffy Bye",
        assigned_users: "Ker Lago",
        assigned_teams: "Vipe",
        assigned_vendors: "hyehl oo",
        parent_asset:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        date_created: "01.06.2018"
      },
      {
        name: "Shrink",
        id: "722-82-3143",
        location: "New Orleans",
        area: "Louisiana",
        model: "57237-053",
        barcode: "07-3637055",
        category: "Drama",
        description: "Aenean fermentum. Donec ut mauris eget massa tempor",
        primary_user: "Bartlet Ray",
        assigned_users: "Ofilia Addenbrooke",
        assigned_teams: "Tambee",
        assigned_vendors: "lioiil oo",
        parent_asset:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        date_created: "03.07.2018"
      },
      {
        name: "The White Sister",
        id: "391-02-1019",
        location: "Wichita Falls",
        area: "Texas",
        model: "50730-1410",
        barcode: "14-2342493",
        category: "Drama|Romance",
        description: "Aenean fermentum. Donec ut mauris eget massa tempor",
        primary_user: "Annora Rapa",
        assigned_users: "Cooper Christian",
        assigned_teams: "Ntag",
        assigned_vendors: "utyut oo",
        parent_asset:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        date_created: "14.09.2018"
      }
    ];
    const renData = data.map(data => {
      return (
        <tr>
          <td height="30px">{data.name}</td>
          <td>{data.id}</td>
          <td>{data.location}</td>
          <td>{data.area}</td>
          <td>{data.model}</td>
          <td>{data.barcode}</td>
          <td>{data.category}</td>
          <td>{data.description}</td>
          <td>{data.primary_user}</td>
          <td>{data.assigned_users}</td>
          <td>{data.assigned_teams}</td>
          <td>{data.assigned_vendors}</td>
          <td>{data.parent_asset}</td>
          <td>{data.date_created}</td>
        </tr>
      );
    });
    return (
      <div className="container side-container">
        <Sidebar />
        <AddAsset handleChange={this.onChange} data={this.state.data} />
        <div className="breadcrumb">
          Assets
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            data-toggle="modal"
            data-target="#assetModal"
          >
            <i className="fas fa-plus p5" />Add Asset
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
                <th scope="col">Barcode</th>
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
      </div>
    );
  }
}

export default Assets;
