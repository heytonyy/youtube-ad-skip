Youtube Ad Skip - Chrome Extension

Goal: Make a chrome extension that auto click on the skip button after 5 seconds, and clicks the "Dismiss" button for the Youtube premium free trial modal.

Notes:
Youtube skip button ID : ytp-ad-skip-button
Youtube premium button ID : dismiss-button

Dont need this?

```javascript
const adOverlay = document.getElementsByClassName(
  "ytp-ad-overlay-close-container"
)[0];
if (adOverlay) {
  clearUpdate();
  adOverlay.click();
  console.log("ad overlay clicked");
}
```
