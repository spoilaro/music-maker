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
    let sampleElem = document.createElement("div");

    sampleElem.draggable = true;
    sampleElem.innerHTML = `
        <h2>${sample.name}</h2>
    `;

    sampleElem.addEventListener("dragstart", (event) => {
      drag(event);
    });
    sampleListElement?.appendChild(sampleElem);
  });
};

export const drag = (event: any) => {
  event.dataTransfer?.setData("text", event?.target?.id);
  console.log("Dragging");
};

export const drop = (event: any) => {
  console.log("Dropping");
  event.preventDefault();

  var data = event.dataTransfer.getData("text");
  console.log(data);
  // event.target.appendChild(document.getElementById(data));
};

export const allowDrop = (event: any) => {
  console.log("Hover");

  event.preventDefault();
};
