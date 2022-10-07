import { Sample, Track } from "./types";

export const playTrack = (track: Track) => {
  track.samples.forEach((sample) => {
    // TODO: Add actual audio playing
    console.log(sample.src);
  });
};

export const addTrack = () => {
  const tracksContainer = document.getElementById("tracks");
  let newTrack = document.createElement("div");
  newTrack.innerHTML = `
  <div class="track-container">
    <label for="track1">${"New Track"}</label><br />
  </div>
  `;

  tracksContainer?.appendChild(newTrack);
};
