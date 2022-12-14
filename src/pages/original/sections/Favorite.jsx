import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorite(props) {
  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  useEffect(() => {
    const variable = {
      userFrom: props.userFrom,
      movieId: props.movieId,
      movieTitle: props.movieInfo.original_title,
      movieImage: props.movieInfo.backdrop_path,
      movieRunTime: props.movieInfo.runtime,
    };

    axios.post('apis/webnovel/bookmark', variable).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert('Failed to get Favorite Info');
      }
    });
  }, []);

  return (
    <div>
      <button>
        {Favorited ? ' remove from Favortie ' : ' Add to Favorite'}
        {FavoriteNumber}
      </button>
    </div>
  );
}

export default Favorite;
