import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Content extends Component {
  componentDidMount() {
    if (window.localStorage.sid != null && window.localStorage.sid !== "") {
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="LJ-class">
      Content
      </div>
    );
  }
}

export default withRouter(Content);