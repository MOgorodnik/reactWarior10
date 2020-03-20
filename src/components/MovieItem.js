import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }
  render() {
    // console.log(
    //   "MovieItem => this.state",
    //   this.state,
    //   "MovieItem => this.props",
    //   this.props
    // );
    const { movie } = this.props;
    return (
      // return <p> {movie.title} </p>;
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          {/* {console.log("I CAN NOT see this state => ",this.state)} */}
          {/* <p> {this.state.willWatch ? "NOT will" : "will"} </p> */}
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                console.log("Clickkk", this.state.willWatch);
                this.state.willWatch
                  ? this.setState({
                      willWatch: false
                    })
                  : this.setState({
                      willWatch: true
                    });
              }}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
