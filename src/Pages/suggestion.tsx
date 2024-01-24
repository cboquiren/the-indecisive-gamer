import { useState } from "react";
import { allDevelopers, allGenres } from "../all-data";
import { GenreSelect } from "../Components/SPGenre";

export const SuggestionPage = () => {
  const [shouldShowAllGenres, setShouldShowAllGenres] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedDev, setSelectedDev] = useState<string>("any");
  return (
    <div>
      <h1>This is the suggestion Page</h1>
      <p>This has the suggestion form</p>

      <form action="">
        <h2>What are you in the mood to play?</h2>
        <label htmlFor="">Genre Selection:</label>
        <div>
          {!shouldShowAllGenres &&
            allGenres.slice(0, 5).map((genre) => {
              return (
                <GenreSelect
                  genre={genre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={(data) => setSelectedGenres(data)}
                />
              );
            })}
          {shouldShowAllGenres &&
            allGenres.map((genre) => {
              return (
                <GenreSelect
                  genre={genre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={(data) => setSelectedGenres(data)}
                />
              );
            })}
          {!shouldShowAllGenres && (
            <button className="see-btn" onClick={() => setShouldShowAllGenres(true)}>
              Show all
            </button>
          )}
        </div>
        <label htmlFor="">From this Developer:</label>
        <div>
          <select
            name="developer"
            key="developer"
            id="developer"
            value={selectedDev}
            onChange={(e) => setSelectedDev(e.target.value)}
          >
            <option value={"any"}>Any</option>
            {allDevelopers.map((developer) => {
              return (
                <option key={developer} value={developer}>
                  {developer}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};
