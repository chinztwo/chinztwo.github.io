const load = document.querySelector('.load');
const content = document.querySelector('.wrapper');
const message = document.querySelector('.message');
const generate = document.querySelector('.generate');
const toggf = document.querySelectorAll('.tggl');
const waveshad = document.querySelectorAll('.wave');
// ^-----Variables-----^


//Loading Web Page

window.addEventListener('load',()=>{
    setTimeout(function(){
        load.classList.add('fade');
        content.classList.remove('hide');
        setTimeout(function(){
            load.classList.add('hide');
            content.classList.remove('fade');
        },1000)
    },3500)
})

//Generate Quote. Random index for array from .JSON derulo
generate.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * (31 + 1));
    message.classList.add('fade');
    setTimeout(function(){
        readTextFile("jason derulo/msg.json", function (text) {
            var data = JSON.parse(text);
            message.innerHTML = data[rand];
            message.classList.remove('fade');
        })
    },1000)

});






//ReadTextFile function from StackOverflow...
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var x = 1; //Index value for darkmode
const toggle = document.querySelector('.toggle-dark');
toggle.addEventListener('click',()=>{
    readTextFile("jason derulo/svgswap.json", function (swap) {
        var swapsvg = JSON.parse(swap);
        x = x == 2? 0 : 1;
        toggle.innerHTML = swapsvg[x];
    })
    ++x;
    darkmode();
    console.log(x);
})
//tranisiton
function darkmode(){
    for(var i = 0; i < toggf.length; i++){
        toggf[i].classList.toggle('dark');
    }
    for(var i = 0; i < waveshad.length; i++){
        waveshad[i].classList.toggle('wave-shad');
    }
}


function lightmode(){

}

