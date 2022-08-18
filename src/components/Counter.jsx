import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   count: this.props.counter.count,
  // };

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1,
    // });
    //console.log(this.state.count);
  };
  increment = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    //console.log(this.state.count);
  };
  conditionalCSS = () => {
    const { count } = this.props.counter;
    const countCSS = count === 0 ? "btn btn-danger" : "btn btn-warning";
    return countCSS;
  };
  conditionalJSX = () => {
    const { count } = this.props.counter;
    const countJSX = count === 0 ? "Zero" : count;
    return countJSX;
  };
  conditionaNeg = () => {
    const { count } = this.props.counter;
    const countNeg =
      count === 0 ? "btn btn-danger disabled mx-4" : "btn btn-danger mx-4";
    return countNeg;
  };
  // reset = () => {
  //   this.props.counters.count = 0;
  // };
  render() {
    return (
      <div>
        <br />
        <button
          className={this.conditionaNeg()}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <span className={this.conditionalCSS()}> {this.conditionalJSX()}</span>
        <button
          className="btn btn-primary mx-4"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger mx-4"
          onClick={() => this.props.onReset(this.props.counter)}
        >
          Reset
        </button>
        <button
          className="btn btn-danger mx-4"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
