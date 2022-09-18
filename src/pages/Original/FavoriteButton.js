function SetStateAndToggle(props) {
  const currentlyAFavorite = <FontAwesomeIcon icon={faHeart} />;
  const notCurrentlyAFavorite = <FontAwesomeIcon icon={faHeartBroken} />;

  const [favorite, setFavorite] = useState(props.favBool);

  const toggleFavorite = (recipeId) => {
    setFavorite((favorite) => {
      if (favorite == true) {
        console.log('I clicked unfavorite');
        console.log(props);
        fetch(`/api/users/${props.userId}/recipes/${recipeId}/remove`, { method: 'POST' }).then(
          console.log('This was a favorited recipe, but now it isnt!'),
        );
      }
      if (favorite == false) {
        console.log('I clicked favorite');
        fetch(`/api/users/${props.userId}/recipes/${recipeId}/add`, { method: 'POST' }).then(
          console.log('This was not a favorited recipe. Now it is!'),
        );
      }

      return !favorite;
    });
  };

  return (
    <button
      className={styles['favorite-button']}
      onClick={() => toggleFavorite(props.recipeId)}
      key={props.recipeId}
    >
      {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
    </button>
  );
}

export { FavoriteButton };
