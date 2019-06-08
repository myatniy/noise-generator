var soundWaveLoop = document.getElementById("playWave");
soundWaveLoop.loop = true;

var volumeSlider1 = document.getElementById("volume1");
soundWaveLoop.volume = volumeSlider1.value / 100;

volumeSlider1.oninput = function() {
    soundWaveLoop.volume = this.value / 100;
}

var soundRainLoop = document.getElementById("playRain");
soundRainLoop.loop = true;

var volumeSlider2 = document.getElementById("volume2");
soundRainLoop.volume = volumeSlider2.value / 100;

volumeSlider2.oninput = function() {
    soundRainLoop.volume = this.value / 100;
}

var soundThunderLoop = document.getElementById("playThunder");
soundThunderLoop.loop = true;

var volumeSlider3 = document.getElementById("volume3");
soundThunderLoop.volume = volumeSlider3.value / 100;

volumeSlider3.oninput = function() {
    soundThunderLoop.volume = this.value / 100;
}

var soundWindLoop = document.getElementById("playWind");
soundWindLoop.loop = true;

var volumeSlider4 = document.getElementById("volume4");
soundWindLoop.volume = volumeSlider4.value / 100;

volumeSlider4.oninput = function() {
    soundWindLoop.volume = this.value / 100;
}

var soundBlizzardLoop = document.getElementById("playBlizzard");
soundBlizzardLoop.loop = true;

var volumeSlider5 = document.getElementById("volume5");
soundBlizzardLoop.volume = volumeSlider5.value / 100;

volumeSlider5.oninput = function() {
    soundBlizzardLoop.volume = this.value / 100;
}

var soundNightLoop = document.getElementById("playNight");
soundNightLoop.loop = true;

var volumeSlider6 = document.getElementById("volume6");
soundNightLoop.volume = volumeSlider6.value / 100;

volumeSlider6.oninput = function() {
    soundNightLoop.volume = this.value / 100;
}

var soundHailstormLoop = document.getElementById("playHailstorm");
soundHailstormLoop.loop = true;

var volumeSlider7 = document.getElementById("volume7");
soundHailstormLoop.volume = volumeSlider7.value / 100;

volumeSlider7.oninput = function() {
    soundHailstormLoop.volume = this.value / 100;
}

var soundPinkLoop = document.getElementById("playPink");
soundPinkLoop.loop = true;

var volumeSlider8 = document.getElementById("volume8");
soundPinkLoop.volume = volumeSlider8.value / 100;

volumeSlider8.oninput = function() {
    soundPinkLoop.volume = this.value / 100;
}

function changeSpeakerState() {
    var speakerDir = "file:///H:/html%20and%20shit/volume-icons/speaker-on.png";

    if (document.getElementById("speakerState").src == speakerDir) {
        document.querySelectorAll("audio").forEach( elem => muteAudio(elem) );
        document.getElementById("speakerState").src = "volume-icons/speaker-off.png";
    } else {
        document.querySelectorAll("audio").forEach( elem => unmuteAudio(elem) );
        document.getElementById("speakerState").src = "volume-icons/speaker-on.png";
    }
}

function muteAudio(elem) {
    elem.muted = true;
}

function unmuteAudio(elem) {
    elem.muted = false;
}

function setVisibility(x, y, z) {
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        y.style.opacity = 1;
        z.play();
    } else {
        x.style.visibility = "hidden";
        y.style.opacity = 0.5;
        z.pause();
    }
}

function showVolume1() {
    var volumeSliderVisibility = document.getElementById("volume1");
    var soundIconOpacity = document.getElementById("image1");
    var playSound = document.getElementById("playWave");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume2() {
    var volumeSliderVisibility = document.getElementById("volume2");
    var soundIconOpacity = document.getElementById("image2");
    var playSound = document.getElementById("playRain");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume3() {
    var volumeSliderVisibility = document.getElementById("volume3");
    var soundIconOpacity = document.getElementById("image3");
    var playSound = document.getElementById("playThunder");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume4() {
    var volumeSliderVisibility = document.getElementById("volume4");
    var soundIconOpacity = document.getElementById("image4");
    var playSound = document.getElementById("playWind");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume5() {
    var volumeSliderVisibility = document.getElementById("volume5");
    var soundIconOpacity = document.getElementById("image5");
    var playSound = document.getElementById("playBlizzard");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume6() {
    var volumeSliderVisibility = document.getElementById("volume6");
    var soundIconOpacity = document.getElementById("image6");
    var playSound = document.getElementById("playNight");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume7() {
    var volumeSliderVisibility = document.getElementById("volume7");
    var soundIconOpacity = document.getElementById("image7");
    var playSound = document.getElementById("playHailstorm");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}

function showVolume8() {
    var volumeSliderVisibility = document.getElementById("volume8");
    var soundIconOpacity = document.getElementById("image8");
    var playSound = document.getElementById("playPink");
    setVisibility(volumeSliderVisibility, soundIconOpacity, playSound);
}