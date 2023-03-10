"use strict";
// create my own little play list
const myPlayList = [
  {
    title: "So What",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1psKF8FESB4U_lb3dqB_BltjR_LO_oMX8",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9",
  },
  {
    title: "The Day That Never Comes",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1gF7aNn-uzgRlHRFN16t9QIS2ev0iKTBA",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1XbXgBvpDkbopg7UZWK9gDDP7vHPJ-Cr8",
  },
  {
    title: "Astronomy",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1j7az9F5647NZw1ezp3ZF2fs5hxnVIH9o",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9",
  },
  {
    title: "The Unforgiven",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1032M4Fzj9IeH6mNkf_TBkUX3SuWdkdea",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1AKbbRlD3YVuDUAMCfEQk6XfEIG36ijBa",
  },
  {
    title: "Whiskey In The Jar",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1uwbehp3_aRp69lwxIEVHimV09LihoW78",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1sV5GlTULNtEdwKXHi1UjM-riHQFAVIt9",
  },
  {
    title: "Seek And Destroy",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1fWv84ky2CxI3sNMgFs-JHGTyRj2hqFJB",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1dhK9fYrfNoPOld0Hz66xMDRXKXVe0dmf",
  },
  {
    title: "Nothing Else Matters",
    artist: "Metallica",
    trackUrl:
      "https://docs.google.com/uc?export=download&id=1WnMqBF1qLfqVBS0vSd8CHMMWyiD5Kz53",
    coverUrl:
      "https://docs.google.com/uc?export=download&id=1AKbbRlD3YVuDUAMCfEQk6XfEIG36ijBa",
  },
];

let currentTrackNumber = 0;

const currentTrackData = {
  title: "",
  artist: "",
  trackUrl: "",
  coverUrl: "",
};
let isPlaying = false;

let { title, artist, trackUrl, coverUrl } = currentTrackData;

const setCurrentTrack = (currentTrackNumber) => {
  title = myPlayList[currentTrackNumber].title;
  artist = myPlayList[currentTrackNumber].artist;
  trackUrl = myPlayList[currentTrackNumber].trackUrl;
  coverUrl = myPlayList[currentTrackNumber].coverUrl;
  trackTitle.innerHTML = title;
  trackArtist.innerHTML = artist;
  trackCover.src = coverUrl;
};
const timeFormat = (time) => {
  if (time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}.${seconds < 10 ? "0" : ""}${seconds}`;
  } else return "0.00";
};
const updateProgressBar = (newLeft) => {
  const trackDuration = audioElement.duration;
  const rect = progressBar.getBoundingClientRect();
  if (typeof newLeft === "number") {
    audioElement.currentTime = (trackDuration * newLeft) / rect.width;
  }
  const currentTime = audioElement.currentTime;
  const progressBarLeftWidth =
    typeof newLeft === "number"
      ? newLeft
      : (currentTime * rect.width) / trackDuration;
  progressBarLeft.style.width = progressBarLeftWidth + "px";
  progressBarRight.style.width = rect.width - progressBarLeftWidth + "px";
  progressBarCenter.style.left = progressBarLeftWidth - 9 + "px";
  songTiming[0].innerHTML = timeFormat(audioElement.currentTime);
  songTiming[1].innerHTML = timeFormat(
    trackDuration - audioElement.currentTime
  );
};

const progressBarClick = (event) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = event.clientX - rect.x;
  updateProgressBar(clickX);
};

const playClickButton = () => {
  isPlaying = !isPlaying;
  playButton.classList.remove("buttonActive");
  playButton.classList.add("buttonDisabled");
  pauseButton.classList.remove("buttonDisabled");
  pauseButton.classList.add("buttonActive");
  trackCover.classList.remove("coverIn");
  trackCover.classList.add("coverOut");
};
const pauseClickButton = () => {
  isPlaying = !isPlaying;
  pauseButton.classList.remove("buttonActive");
  pauseButton.classList.add("buttonDisabled");
  playButton.classList.remove("buttonDisabled");
  playButton.classList.add("buttonActive");
  trackCover.classList.remove("coverOut");
  trackCover.classList.add("coverIn");
};

const playTrack = () => {
  audioElement.play();
  playClickButton();
};
const pauseTrack = () => {
  audioElement.pause();
  pauseClickButton();
};

const playActions = () => {
  setCurrentTrack(currentTrackNumber);
  audioElement.src = trackUrl;
  isPlaying &&
    audioElement.addEventListener("loadeddata", () => {
      if (audioElement.readyState >= 2) {
        audioElement.play();
      }
    });
};

const previousTrack = () => {
  if (currentTrackNumber - 1 > 0) {
    currentTrackNumber--;
  } else currentTrackNumber = myPlayList.length - 1;
  playActions();
};

const nextTrack = () => {
  if (myPlayList.length > currentTrackNumber + 1) {
    currentTrackNumber++;
  } else currentTrackNumber = 0;
  playActions();
};

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const previousTrackButton = document.querySelector(".previousTrack");
const nextTrackButton = document.querySelector(".nextTrack");
const trackTitle = document.querySelector(".title");
const trackArtist = document.querySelector(".artist");
const trackCover = document.querySelector(".cover");
const progressBarLeft = document.querySelector(".progressBarLeft");
const progressBarRight = document.querySelector(".progressBarRight");
const progressBar = document.querySelector(".progressBar");
const progressBarCenter = document.querySelector(".progressBarCenter");
const songTiming = document.querySelectorAll(".songTiming div");

let audioElement = new Audio();
setCurrentTrack(currentTrackNumber);
audioElement.src = trackUrl;

playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
previousTrackButton.addEventListener("click", previousTrack);
nextTrackButton.addEventListener("click", nextTrack);
progressBar.addEventListener("click", progressBarClick);
audioElement.addEventListener("ended", nextTrack);
audioElement.addEventListener("timeupdate", updateProgressBar);
window.addEventListener("resize", updateProgressBar);

progressBarCenter.onpointerdown = (event) => {
  progressBarCenter.setPointerCapture(event.pointerId);
  let shiftX = event.clientX - progressBarCenter.getBoundingClientRect().left;
  let newLeft;
  let newLeftChange
  progressBarCenter.onpointermove = (event) => {
    newLeft = event.clientX - shiftX - progressBar.getBoundingClientRect().left;
    if (newLeft < -9) {
      newLeft = -9;
    }
    let rightEdge = progressBar.offsetWidth - progressBarCenter.offsetWidth;
    if (newLeft > rightEdge + 9) {
      newLeft = rightEdge + 9;
    }
    progressBarCenter.style.left = newLeft + "px";
    if (newLeft !== newLeftChange) {
      updateProgressBar(newLeft + 9);
    }
    newLeftChange = newLeft
  };
  progressBarCenter.onpointerup = () => {
    progressBarCenter.onpointermove = null;
    progressBarCenter.onpointerup = null;
  };
};
