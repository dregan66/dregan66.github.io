
/*function color(newColor){
    const elem = document.getElementById("box");
    //elem.style.color = newColor;
    elem.style.backgroundColor = newColor;
}
*/
const button = document.getElementById("box");
button.onclick =function(){
    button.style.backgroundColor = 'blue';
}
function down(){
    document.getElementById("box1").className = "hold";
}
function up(){
    document.getElementById("box1").className = "release"
}
