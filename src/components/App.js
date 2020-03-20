import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  render() {
    // console.log("App render", this.state, this.temp);
    // console.log("App this", this.state.movies[1].title);
    return (
      <div className="container">
        <div className="row">
          <MovieList movies={this.state.movies} />
          <div className="col-4 col-sm-3 mt-4">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">1111 </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log("MovieList movies", movies);
    return (
      <div className="col-8 col-sm-9">
        <div className="row">
          {movies.map(function(movie) {
            return (
              <div className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4" key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// function App() {
//   return <div>Hello React !</div>;
// }

export default App;
