import React from "react";
import {
  fontAwesomeIcon,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Libary
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
