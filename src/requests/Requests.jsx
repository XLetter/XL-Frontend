const requests = {
  // fetchTrending: `apis/webnovel?type=0`,
  // fetchNetflixOriginals: `apis/webnovel`,
  // fetchTopRated: `apis/webnovel?type=1`,
  // fetchActionMovies: `apis/webnovel?type=0&genre=bl`,
  fetchBannerInfo: `apis/webnovel/banner`,
  fetchAll: `apis/webnovel`,
  fetchOriginal: `apis/webnovel?type=0`,
  fetchOriginalBL: `apis/webnovel?type=0&genre=bl`,
  fetchOriginalGL: `apis/webnovel?type=0&genre=gl`,
  fetchOriginalHL: `apis/webnovel?type=0&genre=hl`,
  fetchSeries: `apis/webnovel?type=1`,
  fetchSerieseBL: `apis/webnovel?type=1&genre=bl`,
  fetchSerieseGL: `apis/webnovel?type=1&genre=gl`,
  fetchSerieseHL: `apis/webnovel?type=1&genre=hl`,
};

export default requests;
