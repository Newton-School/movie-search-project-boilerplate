import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        e.preventDefault();
        let matchingMovies = [];
        for (let movie of movies) {
            if (movie.title.toLowerCase() == inputValue.toLowerCase()) {
                matchingMovies.push(movie.title);
            }
        }
        console.log(matchingMovies);
        setResult(matchingMovies);
        setInputValue("");
    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return <div id="main"></div>;
};

export default App;
