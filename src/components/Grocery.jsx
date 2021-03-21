import { Button, ListGroupItem } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

export class Grocery extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
          {this.props.groceryList.map((item, index) => {
            return (
              <ListGroupItem
                key={index}
                className="list-group-item text-center btn btn-dark"
                variant="secondary"
                disabled={this.props.budget - item.cost < 0}
                onClick={() =>
                  Promise.resolve(
                    this.props.dispatch(actions.removeGrocery(item.id))
                  )
                    .then(() =>
                      this.props.dispatch(actions.addShopping(item.id))
                    )
                    .then(() => this.props.updateBudget("remove", item.cost))
                }
              >
                <Button variant="primary">Cals: {item.calories}</Button>
                <Button variant="warning">Item: {item.name}</Button>
                <Button variant="dark">Cost: {item.cost}</Button>
              </ListGroupItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => {
  return {
    groceryList: state.groceryReducer,
    dispatch,
  };
};

export default connect(mapStateToProps, null)(Grocery);
