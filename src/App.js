import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";

class App extends React.Component {
  state = {
    budget: 50,
  }
  updateBudget = (value, item) => {
    const budget = value === "remove" ? this.state.budget - item : this.state.budget + item
    this.setState({ budget })
  };
  render() {
    return (
      <Container>
        <div className="text-center jumbotron">
          <h1>Shopper's Stop</h1>
          <h3>For all your needs</h3>
          <h6>
            {this.state.budget ? (
              <>
                Today's budget is {"  "}
                <Button variant="warning" disabled>
                  $ {this.state.budget}
                </Button>
              </>
            ) : (
              <>
                <Button variant="danger" disabled>
                  Out of Budget !!!!!
              </Button>
              </>
            )}
          </h6>
        </div>
        <Row className="row">
          <Grocery budget={this.state.budget} updateBudget={this.updateBudget} />
          <ShoppingBag updateBudget={this.updateBudget} />
          <Stats />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ totalCost: state.shoppingReducer.details.cost })

export default connect(mapStateToProps)(App);
