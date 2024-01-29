/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PlayButton.css";
function PlayButton({ children, onPlay, onPause }) {
  // let playing = false;    // don't use this approach because it will not change the dom, use useState

  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();

    if (playing) {
      onPause();
    } else onPlay();

    setPlaying(!playing);
  }
  return (
    <>
      <button onClick={handleClick}>
        {children}: {playing ? "▶":"▮"}
      </button>
    </>
  );
}

export default PlayButton;
