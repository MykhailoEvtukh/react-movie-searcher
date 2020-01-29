import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={value} type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
