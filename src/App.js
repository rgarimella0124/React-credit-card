import React, { Component } from "react";
import CreditCard from "./newcard/Credit";

class PaymentCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    const flipped = !this.state.flipped;
    this.setState({ flipped });
  }

  render() {
    return (
      <div>
        <CreditCard
          name="NEIL GAIMAN"
          number="5241 1734 7629 0435"
          expiry="04/2028"
        />
        <br />
        <button onClick={this.flipCard}>Flip the card</button>
      </div>
    );
  }
}

export default PaymentCardContainer;
