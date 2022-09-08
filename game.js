const pattern=[];
const userClickedPattern=[];
const Colours=["red","blue","green","yellow"];
let started=false;
var level=1;
$(document).keypress(function(){
    if (!started) {

        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
})
$(".btn").click(function(){
    let userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animate(userChosenColour);

})

function nextSequence(){
    $("#level-title").text("Level " + level);
    level++;
    var random = Math.floor(Math.random()*4);
    const Colour =Colours[random];
    pattern.push(Colour);
    animate(Colour);
    playsound(Colour);
}
function playsound(name){
    const audio= new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animate(name){
     $("#"+ name).fadeIn(100).fadeOut(100).fadeIn(100);
}
