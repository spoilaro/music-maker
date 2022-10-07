import { Sample, Track } from "./types";

const sample1: Sample = {
  src: "../audio/piano.mp3",
  name: "Piano",
};
const sample2: Sample = {
  src: "../audio/bass.mp3",
  name: "Bass",
};

const sample_list: Sample[] = [sample1, sample2];

export const fill_sample_library = () => {
  const sampleListElement = document.getElementById("sample-list");

  sample_list.forEach((sample) => {
    let sampleElem = document.createElement("li");

    sampleElem.draggable = true;
    sampleElem.innerHTML = `
    <li>
      <div draggable="true" >
        <h2>${sample.name}</h2>
      </div>
    </li>
    `;

    sampleListElement?.appendChild(sampleElem);
  });
};
