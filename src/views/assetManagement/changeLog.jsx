import React, { Component } from "react";
import Sidebar from "../../layout/sidebar";
import { connect } from "react-redux";
import { _getMeterChangeLog } from "../../actions/meterActions" ;
import moment from "moment";

class ChangeLog extends Component {

  componentDidMount() {
    this.props.getMeterChangeLog();
  }

  render() {
    console.log(this.props)
    
    const renData = this.props.changeLog.results ? (this.props.changeLog.results.map(data => {
      return (
        <tr>
          <td>{moment(data.changeDate).format("D MMMM YYYY")}</td>
          <td>{moment(data.changeDate).format("LT")}</td>
          <td>{data.changeInitiator}</td>
          <td>{data.oldMeterIdentifier}</td>
          <td>{data.newMeterIdentifier}</td>
          <td>{data.changeType}</td>
        </tr>
        )
      }) ) : (
        <div>Meter Change  Log Data Not Available!</div>
      );
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
            </tr>
          </thead>
          <tbody>{renData}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  changeLog: state._meters.changeLog
});

const mapDispatchToProps = dispatch => {
  return {
    getMeterChangeLog: () => {
      dispatch(_getMeterChangeLog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeLog);
