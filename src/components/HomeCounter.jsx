import React, { Component } from "react";
import Counter from "./Counter";
class HomeCounter extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-success m-4" onClick={this.props.onResetAll}>
          Reset All
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default HomeCounter;
