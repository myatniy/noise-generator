/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

// ********** turn off/on sound **********

// variable below is used for correct execution of ChangeVolumeState(), because i have 2 minutes experience in JS
let cursedSrcOfSpeakerId = document.getElementById('speakerId').src;

speakerId.onclick = function() {
  const srcOfSpeakerId = document.getElementById('speakerId');
  const audio = document.querySelectorAll('audio');

  if (srcOfSpeakerId.src === cursedSrcOfSpeakerId) {
    audio.forEach(elem => muteAudio(elem));
    srcOfSpeakerId.src = 'volume-icons/speaker-off.png';
    cursedSrcOfSpeakerId = 'Sound is off';
  } else {
    audio.forEach(elem => unmuteAudio(elem));
    srcOfSpeakerId.src = 'volume-icons/speaker-on.png';
    cursedSrcOfSpeakerId = srcOfSpeakerId.src;
  }
}

function muteAudio(elem) {
  elem.muted = true;
}

function unmuteAudio(elem) {
  elem.muted = false;
}

// ********** show/hide volume slider + audio volume control **********

function playSound(volumeId, imageId, playSoundId) {
  let volumeSliderVisibility = volumeId;
  let isSoundActive = imageId;
  let playAudio = playSoundId;
  playAudio.loop = true;

  if (volumeSliderVisibility.style.visibility === 'hidden') {
    volumeSliderVisibility.style.visibility = 'visible';
    isSoundActive.style.opacity = 1;
    playAudio.play();
    volumeSliderVisibility.oninput = function () {
      playSoundId.volume = this.value / 100;
    }
  } else {
    volumeSliderVisibility.style.visibility = 'hidden';
    isSoundActive.style.opacity = 0.5;
    playAudio.pause();
  }
}
