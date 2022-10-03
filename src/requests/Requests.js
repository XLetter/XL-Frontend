const requests = {
  fetchAll: `apis/webnovel`,
  fetchOriginals,
  fetchSeries,

  fetchTrending: `apis/webnovel?type=0`,
  fetchNetflixOriginals: `apis/webnovel`,
  fetchTopRated: `apis/webnovel?type=1`,
  fetchActionMovies: `apis/webnovel?type=0&genre=bl`,
  fetchComedyMovies: `apis/webnovel/bookmark?uesrId={userId}&type={type}&genre={genre}`,
  fetchHorrorMovies: `apis/webnovel?type=0&genre=gl`,
  fetchRomanceMovies: `apis/webnovel?type=0&genre=hl`,
  fetchDocumentaries: `apis/webnovel?type=1&genre=bl`,
  fetchNovelInfo: `apis/webnovel/{webnovel_id}`,
};

export default requests;
