const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  10749: "Romance",
  9648: "Mystery",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  37: "Wersten",
  10752: "War",
};

export const getGenreNames = (arr) => {
  return arr.map((n) => genreMap[n]).sort();
};
