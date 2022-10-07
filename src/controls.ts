import { Sample, Track } from "./types";
import { drag, allowDrop, drop } from "./utilites";

export const playTrack = (track: Track) => {
  track.samples.forEach((sample) => {
    // TODO: Add actual audio playing
    console.log(sample.src);
  });
};

export const addTrack = () => {
  const tracksContainer = document.getElementById("tracks");
  let newTrack = document.createElement("div");

  newTrack.className = "track-container";

  newTrack.addEventListener("ondragover", (event) => {
    console.log("Over");
    event.preventDefault();
  });
  // newTrack.addEventListener("ondrop", (event) => drop(event));

  tracksContainer?.appendChild(newTrack);
};
