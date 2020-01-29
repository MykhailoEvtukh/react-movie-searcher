import React, { Component } from "react";
import * as API from "../../services/api";

export default class Cast extends Component {
  state = {
    casts: ""
  };

  componentDidMount() {
    this.searchCast();
  }

  searchCast = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.searchCast(movieId).then(res =>
      this.setState({ casts: res.data.cast })
    );
  };

  render() {
    const { casts } = this.state;
    return (
      <div>
        {casts && (
          <>
            <ul
              style={{
                width: "600px",
                listStyle: "none"
              }}
            >
              {casts.map(el => (
                <li key={el.id}>
                  <img
                    style={{ width: "180px", height: "240px" }}
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    alt={el.original_title}
                  />
                  <p>{el.name}</p>
                  <p>{el.character}</p>
                </li>
              ))}
              )
            </ul>
          </>
        )}
      </div>
    );
  }
}
