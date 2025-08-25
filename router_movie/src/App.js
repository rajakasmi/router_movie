import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieDescription from "./MovieDescription";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterTitle: "",
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.setState({
  movies: [
    {
      id: 1,
      title: "Inception",
      description: "Un voleur entre dans les rêves pour voler des secrets.",
      posterURL: "https://media.senscritique.com/media/000012872128/0/inception.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0", // 👈 bande-annonce
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Des explorateurs voyagent à travers un trou de ver.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman affronte le Joker, un criminel imprévisible qui sème le chaos à Gotham.",
      posterURL: "https://fr.web.img3.acsta.net/medias/nmedia/18/83/56/27/20158098.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id: 4,
      title: "Avatar",
      description: "Un marine paralysé est envoyé sur une planète extraterrestre.",
      posterURL: "https://www.humanite.fr/wp-content/uploads/2023/08/315082.HR_.jpg?w=1024",
      rating: 4,
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
    {
      id: 5,
      title: "Titanic",
      description: "Une romance naît à bord du tristement célèbre paquebot.",
      posterURL: "https://i.pinimg.com/originals/77/81/0d/77810de24f9779ad122de1f07966fade.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    },
  ],
});


    // ⏳ démarrer le compteur
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setFilterTitle = (value) => {
    this.setState({ filterTitle: value });
  };

  render() {
    const { movies, filterTitle, timeElapsed } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    );

    return (
      <Router>
        <Navbar setFilterTitle={this.setFilterTitle} />
        <div style={{ padding: "20px" }}>
          <p>⏳ Temps passé sur l’app : {timeElapsed} secondes</p>
          <Routes>
            <Route path="/" element={<MovieList movies={filteredMovies} />} />
            <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

