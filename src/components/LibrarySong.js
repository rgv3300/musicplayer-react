import { React, useRef } from "react";
import Song from "./Song";

const LibrarySong = ({ song, songs, setCurrentSong, id, setSongs }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state
    const newSongs = songs.map((song) =>
      song.id === id ? { ...song, active: true } : { ...song, active: false }
    );
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
