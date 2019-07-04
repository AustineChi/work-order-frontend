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
      <div className="side-container">
        <Sidebar />
        <div className="breadcrumb">
          Reports
        </div>
        <div class="card mb-4">
              <h6 class="card-header with-elements">
                <div class="card-header-title">Work Order Statistics</div>
                <div class="card-header-elements ml-auto">
                  <label class="text m-0">
                  
                    <span class="switcher switcher-sm d-inline-block align-middle mr-0 ml-2">
                      <span class="switcher-indicator">
                        <span class="switcher-yes"></span>
                        <span class="switcher-no"></span>
                      </span>
                    </span>
                  </label>
                </div>
              </h6>
              <div class="row no-gutters row-bordered">
                <div class="col-md-8 col-lg-12 col-xl-8">
                  <div class="card-body">
                    <div className="wik2">
                    <div className="wik3">
                    <span style={{'fontSize': '33px'}}>700</span>
                    <span>Total work Orders</span>
                    </div>   
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div class="card-body">

                    <div class="row">
                      <div class="col-6 col-xl-5 text-muted mb-3">Total Cost</div>
                      <div class="col-6 col-xl-7 mb-3">
                        <span class="text-big">N10,332</span>
                      </div>
                      <div class="col-6 col-xl-5 text-muted mb-3">Total Hours</div>
                      <div class="col-6 col-xl-7 mb-3">
                        <span class="text-big">534</span>
                      </div>
                      <div class="col-6 col-xl-5 text-muted mb-3">Avg Time to Complete (hours)</div>
                      <div class="col-6 col-xl-7 mb-3">
                        <span class="text-big">34</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

        <div class="row">
              <div class="col-sm-6 col-xl-3">

                <div class="card mb-4">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="lnr lnr-cart display-4 text-success"></div>
                      <div class="ml-3">
                        <div class="text-muted small">None</div>
                        <div class="text-large">2362</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-sm-6 col-xl-3">

                <div class="card mb-4">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="lnr lnr-earth display-4 text-info"></div>
                      <div class="ml-3">
                        <div class="text-muted small">Low</div>
                        <div class="text-large">687,123</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-sm-6 col-xl-3">

                <div class="card mb-4">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="lnr lnr-gift display-4 text-danger"></div>
                      <div class="ml-3">
                        <div class="text-muted small">Medium</div>
                        <div class="text-large">985</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-sm-6 col-xl-3">

                <div class="card mb-4">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="lnr lnr-users display-4 text-warning"></div>
                      <div class="ml-3">
                        <div class="text-muted small">High</div>
                        <div class="text-large">105,652</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

       <div className="row">
       <div className="col-sm-6">
       <p>USER WO STATS</p>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Closed</th>
      <th scope="col">In Progress</th>
      <th scope="col">On Hold</th>
      <th scope="col">Open</th>
      <th scope="col">Avg WO Complete Time (hr)</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Timothy</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>9</td>
      <td>9</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Pual</td>
      <td>4</td>
      <td>2</td>
      <td>9</td>
      <td>0</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
       </div>
       <div className="col-sm-6">
       <p>LOCATION WO STATS</p>
       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Location</th>
      <th scope="col">Closed</th>
      <th scope="col">In Progress</th>
      <th scope="col">On Hold</th>
      <th scope="col">Open</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sabon Gari</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Iponri</td>
      <td>4</td>
      <td>2</td>
      <td>9</td>
      <td>0</td>

    </tr>
  </tbody>
</table>
       </div>


       <div className="col-sm-6">
       <p>ASSET WO STATS</p>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Closed</th>
      <th scope="col">In Progress</th>
      <th scope="col">On Hold</th>
      <th scope="col">Open</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Asset 1</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Asset 2</td>
      <td>4</td>
      <td>2</td>
      <td>9</td>
      <td>0</td>

    </tr>
  </tbody>
</table>
       </div>
       <div className="col-sm-6">
       <p>TEAM WO STATS</p>
       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Location</th>
      <th scope="col">Closed</th>
      <th scope="col">In Progress</th>
      <th scope="col">On Hold</th>
      <th scope="col">Open</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sabon Gari</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Iponri</td>
      <td>4</td>
      <td>2</td>
      <td>9</td>
      <td>0</td>

    </tr>
  </tbody>
</table>
       </div>

       <div className="col-sm-6">
       <p>CATEGORY WO STATS</p>
       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Location</th>
      <th scope="col">Closed</th>
      <th scope="col">In Progress</th>
      <th scope="col">On Hold</th>
      <th scope="col">Open</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Maintenance</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Installation</td>
      <td>4</td>
      <td>2</td>
      <td>9</td>
      <td>0</td>

    </tr>
  </tbody>
</table>
       </div>
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
