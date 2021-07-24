const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element, then play
async function selectMideaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    //Catch error here
    console.log("Error here...", error);
  }
}


button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMideaStream();