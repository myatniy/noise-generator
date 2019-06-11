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

// ********** modal image **********

function fullscreen(modalId, imgGalleryId, imgGalleryModalId, close) {
  let modal = modalId;
  let img = imgGalleryId;
  let modalImg = imgGalleryModalId;
  let span = close;

  img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }
}

// ********** timer and shit **********
let showReset = document.getElementById('reset');
let showTime = document.getElementById('time');
let setUpTimeButton = document.getElementById('setUpTimeButtonId');
let timeInput = document.getElementById('timeId');

function setUpTimer(timerTime) {
  let time = timerTime.value;
  let hh = parseInt(time.slice(0, 2));
  let mm = parseInt(time.slice(3));

  if (!(isNaN(hh) && isNaN(mm))) {
    let timeParsed = hh * 60 * 60 + mm * 60;
    let display = document.querySelector('#time');
    startTimer(timeParsed, display);

    timeInput.style.display = 'none';
    setUpTimeButton.style.display = 'none';
    showReset.style.display = 'inline';
    showTime.style.display = 'inline';
  } else {
    alert('Неверно задано время, для того, чтобы избежать этой ошибки, окно ввода времени должно состоять из чисел.');
  }
}

function startTimer(duration, display) {

  reset.onclick = function () {
    timeInput.style.display = 'inline';
    setUpTimeButton.style.display = 'inline';
    showReset.style.display = 'none';
    showTime.style.display = 'none';

    clearInterval(countdown);
  }

  let timer = duration; let hours; let minutes; let seconds; let m; let lastAction;
  let countdown = setInterval(function () {
    m = parseInt(timer / 60);
    seconds = parseInt(timer % 60);
    hours = parseInt(m / 60);
    minutes = parseInt(m % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerText = hours + ':' + minutes + ':' + seconds;

    if (--timer < 0) {
      timer = duration;
      console.log(timer);
    }

    lastAction = duration--;
    console.log(lastAction);
    if (lastAction === 0) {
      const srcOfSpeakerId = document.getElementById('speakerId');
      const audio = document.querySelectorAll('audio');

      audio.forEach(elem => muteAudio(elem));
      srcOfSpeakerId.src = 'volume-icons/speaker-off.png';

      timeInput.style.display = 'inline';
      setUpTimeButton.style.display = 'inline';
      showReset.style.display = 'none';
      showTime.style.display = 'none';

      clearInterval(countdown);
    }
  }, 1000);
}