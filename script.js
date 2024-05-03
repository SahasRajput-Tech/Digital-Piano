//This is to make the digital piano operational

function playSound(note){

    var audio = new Audio("sounds/" + note + ".mp3");
    audio.play();

}
