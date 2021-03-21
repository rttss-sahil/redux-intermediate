import React, { Component } from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import actions from "../redux/actions";

export class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md-3">
        <h2 className="text-center">Shopping Bag</h2>
        <ul className="list-group">
          {this.props.shoppingList.length > 0 ? (
            this.props.shoppingList.map((item, index) => {
              return (
                <ListGroupItem
                  key={index}
                  className="list-group-item text-center btn btn-dark"
                  variant="secondary"
                  onClick={() =>
                    Promise.resolve(
                      this.props.dispatch(actions.addGrocery(item.id))
                    )
                      .then(() =>
                        this.props.dispatch(actions.removeShopping(item.id))
                      )
                      .then(() => this.props.updateBudget("add", item.cost))
                  }
                >
                  <Button variant="primary">Cals: {item.calories}</Button>
                  <Button variant="warning">Item: {item.name}</Button>
                  <Button variant="dark">Cost: {item.cost}</Button>
                </ListGroupItem>
              );
            })
          ) : (
            <ListGroupItem>No items. Please add some</ListGroupItem>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => ({
  shoppingList: state.shoppingReducer.bag,
  dispatch,
});

export default connect(mapStateToProps)(ShoppingBag);
