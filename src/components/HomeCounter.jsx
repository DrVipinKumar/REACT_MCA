import React, { Component } from "react";
import Counter from "./Counter";
class HomeCounter extends Component {
  state = {
    counters: [
      { id: 1, count: 3 },
      { id: 2, count: 1 },
      { id: 3, count: 2 },
      { id: 4, count: 0 },
    ],
  };
  delete = (counterid) => {
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({
      counters,
    });
  };
  resetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.count = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };
  reset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].count = 0;
    this.setState({
      counters,
    });
  };
  decrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].count = counters[index].count - 1;
    this.setState({
      counters,
    });
  };
  increment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].count = counters[index].count + 1;
    this.setState({
      counters,
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-success m-4" onClick={this.resetAll}>
          Reset All
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.delete}
            onReset={this.reset}
            onIncrement={this.increment}
            onDecrement={this.decrement}
          />
        ))}
      </div>
    );
  }
}

export default HomeCounter;
