import React, { Component } from "react";
import { connect } from "react-redux";

export class Stats extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h2 className="text-center">Stats</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost: $ {this.props.total.cost}</li>
          <li className="list-group-item">
            Calories: {this.props.total.calories} kCal
          </li>
          <li className="list-group-item">
            Weight: {this.props.total.weight} mg
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.shoppingReducer.details,
  };
};
export default connect(mapStateToProps)(Stats);
