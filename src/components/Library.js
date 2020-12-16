import React from "react";
import LibrarySong from "./LibrarySong";
import { faDollyFlatbed } from "@fortawesome/free-solid-svg-icons";

const Library = ({ songs, setCurrentSong, id, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            id={song.id}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
