import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }
  render() {
    console.log("--- MovieItem ---");
    const { movie, removeMovie, appThis, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    // console.log("appThis", appThis, "single movie", movie);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <p> {this.state.willWatch ? "NOT will" : "will"} </p>
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-3">
            {this.state.willWatch === true ? (<button
              type="button"
              className="btn btn-info btn-sm"
              onClick={() => {
                console.log("Clickkk", this.state.willWatch);
                this.setState({
                  willWatch: false
                });
                removeMovieFromWillWatch(movie);
              }}
            >
              Remove Watch
            </button>) : (<button
              type="button"
              className="btn btn-info btn-sm"
              onClick={() => {
                console.log("Clickkk", this.state.willWatch);
                this.setState({
                    willWatch: true
                  });
                  addMovieToWillWatch.bind(null, movie);
              }}
            >
              Add Watch
            </button>)}
            <button
              type="button"
              title="{movie.title}"
              className="btn btn-danger btn-sm mx-2"
            //   onClick={ () => {console.log(this)} }
              onClick={removeMovie.bind(appThis, movie) }
            //   onClick={removeMovie(this, movie) }
            >
              <span className="material-icons">delete_forever</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
