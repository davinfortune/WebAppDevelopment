export const getMovies = () => {
    var key = "77885d4f621d9af0c6c5c522b1c9df9d";
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    var key = "77885d4f621d9af0c6c5c522b1c9df9d";
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    var key = "77885d4f621d9af0c6c5c522b1c9df9d";
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        key +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  
  export const getMovieImages = (id) => {
    var key = "77885d4f621d9af0c6c5c522b1c9df9d";
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`
    )
      .then((res) => res.json())
      .then((json) => json.posters);
  };