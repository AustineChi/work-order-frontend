import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import AddPart from "./partsChildrenComponents/addPart";
import PartTabs from "./partsChildrenComponents/partTabs";
import { connect } from "react-redux";
import { _addPart, _getParts, _PartDetails} from "../../actions/partActions";
import { _getUsers } from "../../actions/userActions";
import { _getTeams } from "../../actions/teamActions";
import { _getLocations } from "../../actions/locationActions";
import Toast from "../../utility/toast";

class Parts extends Component {
  state = {
    data: {},
    showModal: false,
    TabsModal: false,
    modalOpacity: 1,
    toast: {
      visible: false,
      level: "success",
      message: null
    },
    testing: "carl"
  };

  handleClose = () => {
    this.setState({ showModal: false, modalOpacity: 1 });
  }

  handleShow = () => {
    this.setState({ showModal: true, modalOpacity: 0.5 });
  }
  addNew = () => {
    this.setState({ showModal: true, modalOpacity: 0.5, data: {} });
  }
  closeTabModal = () => {
    this.setState({ TabsModal: false });
  }

  fetchOneData = (id) => {
    this.props.details(id);
    this.setState({ TabsModal: true });
  }

  tableData =(prop) =>{
    let id = 1;
   const renData = prop.partsData.length ? (prop.partsData
    .map(data => {
      return (
        <tr 
        onClick={() => this.fetchOneData(data._id)}
        >
          <td>{data.partName}</td>
          <td>{id++}</td>
          <td>{data.quantity}</td>
          <td>{data.unitCost}</td>
          <td>{data.serialNumber}</td>
          <td>{data.partArea}</td>
          <td>{data.partCategory}</td>
          <td>{data.partDescription}</td>
          <td>{data.location}</td>
          <td>{data._id}</td>
        </tr>
      );
    })
    ) : (
      <div>No Inventory yet!</div>
    )
    return renData
    }

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
    this.props.addPart(this.state.data);
  };

  componentDidMount() {
    this.props.getParts();
    this.props.getUsers();
    this.props.getTeams();
    this.props.getLocations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response.data) {
      if (this.props.partsData.indexOf(nextProps.response.data) === -1) this.props.partsData.unshift(nextProps.response.data);
    }
    if (nextProps.response.success === true) {
      this.setState({ showModal: false, data: {}, modalOpacity: 1 });
      setTimeout(() => this.showToast(nextProps.response), 2000);
    }
    if (nextProps.partDetails) {
      this.setState({ data: nextProps.partDetails });
    }
  }

  
  render() {
    console.log("my", this.props)    
    return (
      <div className="container side-container">
        <Sidebar />
      <div className="breadcrumb">
          Parts
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            onClick={this.addNew}
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
                <th scope="col">Serial Num</th>
                <th scope="col">Area</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Created</th>
              </tr>
            </thead>
            <tbody>{this.tableData(this.props)}</tbody>
          </table>
        </div>
        <AddPart 
        handleChange={this.onChange} 
        handleClick={this.handleClick}
        data={this.state.data}
        response={this.props.response}
        users={this.props.users}
        teams={this.props.teams} 
        locations={this.props.locations}  
        showModal={this.state.showModal}
        handleClose={this.handleClose}             
         />
        <PartTabs 
       handleShow={this.handleShow}
       closeTabModal={this.closeTabModal}
       TabsModal={this.state.TabsModal}
       modalOpacity={this.state.modalOpacity}
       partDetails={this.props.partDetails}               
        testing={this.state.testing}
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
  teams: state._teams.teams,
  partsData: state._parts.parts,
  partDetails: state._parts.partDetails,
  response: state._parts.response,
  locations: state._locations.locations
});

const mapDispatchToProps = dispatch => {
  return {
    addPart: data => {
      dispatch(_addPart(data));
    },
    getParts: () => {
      dispatch(_getParts());
    },
    details: (id) => {
      dispatch(_PartDetails(id));
    },
    getUsers: () => {
      dispatch(_getUsers());
    }, 
    getTeams: () => {
      dispatch(_getTeams());
    }
    , 
    getLocations: () => {
      dispatch(_getLocations());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parts);
