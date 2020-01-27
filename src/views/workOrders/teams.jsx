import React, { Component } from "react";
import { connect } from "react-redux";
import { _addTeam, _getTeams } from "../../actions/teamActions";
import { _getUsers } from "../../actions/userActions";
import Sidebar from "../../layout/sidebar";
import AddTeam from "./addTeam";
import Toast from "../../utility/toast";

class Teams extends Component {
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
    if (e.target.multiple === true) {
      let options = e.target.options;
      let value = data[[e.target.name]] || [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected && value.indexOf(options[i].value) === -1) {
          value.push(options[i].value);
        } else if (
          options[i].selected &&
          value.indexOf(options[i].value) !== -1
        ) {
          let index = value.indexOf(options[i].value);
          if (index !== -1) value.splice(index, 1);
        }
      }
      data[[e.target.name]] = value;
    } else {
      data[[e.target.name]] = e.target.value;
    }
    this.setState({
      data: data
    });
  };

  handleClick = () => {
    this.props.addTeam(this.state.data);
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


  componentDidMount() {
    this.props.getTeams();
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.response.data) {
      if (this.props.teamsData.indexOf(nextProps.response.data) === -1)
        this.props.teamsData.unshift(nextProps.response.data);
    }
    if (nextProps.response.success === true) {
      this.setState({ showModal: false });
      setTimeout(() => this.showToast(nextProps.response), 2000);
    }
  }



  render() {

    const teamList = this.props.teamsData.length ? (
      this.props.teamsData.map(team => {
        return (
          <div className="card" key={team.name}>
            <div className="card-header">
              {team.name}
              <i className="fas fa-ellipsis-v fr" />
            </div>
          </div>
        );
      })
    ) : (
      <div>No Teams yet!</div>
    );
    return (
      <div className="side-container">
        <Sidebar />
        <div className="breadcrumb">
          Teams
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            onClick={this.handleShow}
          >
            <i className="fas fa-plus p5" />
            Create New Team
          </button>
        </div>

        <div className="card-box">
          <div className="card">{teamList}</div>
        </div>
        
        <AddTeam
          handleChange={this.onChange}
          handleClick={this.handleClick}
          data={this.state.data}
          response={this.props.response}
          users={this.props.users}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
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
  teamsData: state._teams.teams,
  response: state._teams.response
});

const mapDispatchToProps = dispatch => {
  return {
    addTeam: data => {
      dispatch(_addTeam(data));
    },
    getTeams: () => {
      dispatch(_getTeams());
    },
    getUsers: () => {
      dispatch(_getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
