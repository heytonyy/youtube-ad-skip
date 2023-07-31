// This script is injected into every page the extension loads
const checkForAdButton = setInterval(handleSkipButton, 1000);

function handleSkipButton() {
  const skipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
  const mainVideoTag = document.getElementsByClassName("html5-main-video")[0];

  if (skipButton) {
    console.log("skip button clicked");
    skipButton.click();
  }
}

function clearHandleSkipButton() {
  clearInterval(handleSkipButton);
}

// const videoId = window.location.search.split("=")[1];

// const player = new YT.Player("video-stream html5-main-video", {
//   videoId: videoId,
//   events: {
//     onStateChange: onPlayerStateChange,
//   },
// });

// function onPlayerStateChange(event) {
//   // event.data contains the current state of the player
//   // 0 = video ended, 1 = video playing, 2 = video paused, 3 = video buffering, 5 = video cued
//   if (event.data === YT.PlayerState.ENDED) {
//     // Video has ended
//     console.log("Video finished playing!");
//   }
// }
