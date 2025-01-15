const image = document.getElementById("penguin");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.getElementById("calm-audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

audio.addEventListener("pause", function (event) {
  console.log("Pausing", event);
});

audio.addEventListener("ended", function (event) {
  console.log("Ending", event);
});

const video = document.getElementById("penguin-video");
video.addEventListener("time", function (event) {
  console.log("Time event", event);
});

video.addEventListener("pause", function (event) {
  console.log("Pausing", event);
});

video.addEventListener("ended", function (event) {
  console.log("Ended", event);
});
