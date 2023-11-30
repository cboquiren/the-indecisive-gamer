import { Dispatch, SetStateAction } from "react";

export const GenreSelect = ({
  genre,
  selectedGenres,
  setSelectedGenres,
}: {
  genre: string;
  selectedGenres: string[];
  setSelectedGenres: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        key={genre}
        value={genre}
        checked={selectedGenres.includes(genre)}
        onChange={() => {
          if (selectedGenres.includes(genre)) {
            const index = selectedGenres.indexOf(genre);
            const firstHalf = selectedGenres.slice(0, index);
            const secondHalf = selectedGenres.slice(index + 1);
            const newArr = firstHalf.concat(secondHalf);
            setSelectedGenres(newArr);
          } else {
            setSelectedGenres([...selectedGenres, genre]);
          }
        }}
      />
      <label htmlFor="">{genre}</label>
    </div>
  );
};
