import { Sample, Track } from "./types";
import { playTrack, addTrack } from "./controls";
import { fill_sample_library } from "./utilites";
import { SampleTemplate } from "./components";

// Initialize sampler
const initializeSampler = () => {
  fill_sample_library();
};

initializeSampler();

const playButton = document.getElementById("play");
const addTrackButton = document.getElementById("add-track");

playButton?.addEventListener("click", () => null); //FIXME: Add handler for this
addTrackButton?.addEventListener("click", () => addTrack());

const sampleContainer = document.getElementsByClassName("sample-container");

const new_sample = document.createElement("div");
new_sample.innerHTML = SampleTemplate("Piano", 120 * 2);
sampleContainer[0].appendChild(new_sample);
