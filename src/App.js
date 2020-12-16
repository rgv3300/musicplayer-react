import React, { useState } from "react";
//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
