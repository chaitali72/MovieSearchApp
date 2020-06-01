import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/chaitalimahida/Desktop/Desktop/React + Firebase/MovieSearch/moviesearch/src/style.css';
import SearchMovies from '../src/serchmovie';


class Main extends React.Component {
  render(){
      return (
        <div className="container">
          <h1 className="title">Movie Search React App</h1>
          <SearchMovies />
          </div>
         
      );
  }
}
ReactDOM.render(<Main/> ,document.getElementById('root'));
