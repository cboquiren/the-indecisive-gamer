import { useState } from "react";
import { allDevelopers, allGenres } from "../all-data";
import { GenreSelect } from "../Components/SPGenre";

export const SuggestionPage = () => {
  const [shouldShowAll, setShouldShowAll] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedDev, setSelectedDev] = useState<string>("any");
  return (
    <div>
      <h1>This is the search Page</h1>
      <p>This has the search bar and results of search</p>

      <form action="">
        <h2>What are you in the mood to play?</h2>
        <label htmlFor="">Genre Selection:</label>
        <div>
          {!shouldShowAll &&
            allGenres.slice(0, 5).map((genre) => {
              return (
                <GenreSelect
                  genre={genre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={(data) => setSelectedGenres(data)}
                />
              );
            })}
          {shouldShowAll &&
            allGenres.map((genre) => {
              return (
                <GenreSelect
                  genre={genre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={(data) => setSelectedGenres(data)}
                />
              );
            })}
          {!shouldShowAll && <div onClick={() => setShouldShowAll(true)}>Show all</div>}
        </div>
        <label htmlFor="">From this Developer:</label>
        <div>
          <select
            name="developer"
            id="developer"
            value={selectedDev}
            onChange={(e) => setSelectedDev(e.target.value)}
          >
            <option value={"any"}>Any</option>
            {allDevelopers.map((developer) => {
              return <option value={developer}>{developer}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};
