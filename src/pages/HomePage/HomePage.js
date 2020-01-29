import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as API from "../../services/api";

class HomePage extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired
  };

  state = {
    trends: []
  };

  componentDidMount() {
    this.fetchTrendsFunc();
  }

  fetchTrendsFunc = () => {
    API.fetchTrends().then(res => this.setState({ trends: res.data.results }));
  };

  render() {
    const { trends } = this.state;

    return (
      <div>
        <ul>
          {trends.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomePage;
