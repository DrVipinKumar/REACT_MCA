import React, { Component } from "react";
import GetAxios from "./GetAxios";
import PostAxios from "./PostAxios";
import DeleteAxios from "./DeleteAxios";
class HomeAxios extends Component {
  state = {
    get: true,
    post: false,
    put: false,
    del: false,
  };
  showGet = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };
  hideGet = () => {
    this.setState({
      get: false,
    });
  };
  showPost = () => {
    this.setState({
      get: false,
      post: true,
      put: false,
      del: false,
    });
  };
  hidePost = () => {
    this.setState({
      post: false,
      get: true,
    });
  };
  showDel = () => {
    this.setState({
      get: false,
      post: false,
      put: false,
      del: true,
    });
  };
  hideDel = () => {
    this.setState({
      del: false,
    });
  };
  showPut = () => {
    this.setState({
      get: false,
      post: false,
      put: true,
      del: false,
    });
  };
  hidePut = () => {
    this.setState({
      put: false,
    });
  };
  render() {
    const { get, post, put, del } = this.state;
    return (
      <div>
        {get && <GetAxios onClose={this.hideGet} />}{" "}
        {post && <PostAxios onClose={this.hidePost} />}
        {del && <DeleteAxios onClose={this.hideDel} />}
        <br />
        <button className="btn btn-primary btn-sm mx-2" onClick={this.showGet}>
          Get Student
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={this.showPost}>
          Insert Student
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={this.showDel}>
          Delete Student
        </button>
        <button className="btn btn-primary btn-sm mx-2" onClick={this.showPut}>
          Update Student
        </button>
      </div>
    );
  }
}

export default HomeAxios;
