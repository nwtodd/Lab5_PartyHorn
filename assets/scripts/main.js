// main.js

// Input Field Handling

// Make variables
let volumeinput = document.getElementById('volume-number');
let volumeslider = document.getElementById('volume-slider');
let volumeimage = document.getElementById('volume-image');
let hornaudio = document.getElementById('horn-sound');
let radioairhorn = document.getElementById('radio-air-horn');
let radiocarhorn = document.getElementById('radio-car-horn');
let radiopartyhorn = document.getElementById('radio-party-horn');
let audioimage = document.getElementById('sound-image');
let honker = document.getElementById('honk-btn');
let form = document.getElementById('party-horn-form');

// Add event listeners for changing slider based on text and vice versa
volumeinput.addEventListener("input", function(){
    volumeslider.value = volumeinput.value;
    updateVolumeIcon();
    updateAudioLevel();
    updateHonkButton();
});

volumeslider.addEventListener("input", function(){
    volumeinput.value = volumeslider.value;
    updateVolumeIcon();
    updateAudioLevel();
    updateHonkButton();
});

// Function used to update the volume icon
function updateVolumeIcon(){
    if (volumeslider.value >= 67){
      volumeimage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (volumeslider.value >= 34){
      volumeimage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (volumeslider.value >= 1){
      volumeimage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
      volumeimage.src = "./assets/media/icons/volume-level-0.svg";
    }
}

// Update the audio level based on slider and input values (should be identical)
function updateAudioLevel(){
    hornaudio.volume = volumeinput.value / 100;
}

// Update the honk button based on volume
function updateHonkButton(){
    if (volumeslider.value == 0){
        honker.disabled = true; 
    }
    else {
        honker.disabled = false;
    }
}

// Add event listeners to radio button
radioairhorn.addEventListener("change", function(){
    hornaudio.src = "./assets/media/audio/air-horn.mp3";
    audioimage.src = "./assets/media/images/air-horn.svg";
});

radiocarhorn.addEventListener("change", function(){
    hornaudio.src = "./assets/media/audio/car-horn.mp3";
    audioimage.src = "./assets/media/images/car.svg";
});

radiopartyhorn.addEventListener("change", function(){
    hornaudio.src = "./assets/media/audio/party-horn.mp3";
    audioimage.src = "./assets/media/images/party-horn.svg";
});

// Add event listener to honker
honker.addEventListener("click", function(){
    console.log('vibe check')
    hornaudio.play();
});

form.addEventListener("submit", function(event){
    event.preventDefault();
});