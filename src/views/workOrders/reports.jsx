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
  };


  componentDidMount() {
    this.props.getTeams();
    this.props.getUsers();
  }

  render() {

    return (
      <div className="container side-container">
        <Sidebar />
        <div className="breadcrumb">
          Reports
        </div>

       <div>

       </div>
        
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
