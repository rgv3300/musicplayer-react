import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, id, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
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
