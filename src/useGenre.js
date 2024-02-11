const useGenre = (selectedGenres) => {
  if (selectedGenres.selectedGenres < 1) return "";
  const GenreIds = selectedGenres.map((g) => g.id);
  if(GenreIds.length === 0)return "";
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;