const load = document.querySelector('.load');
const content = document.querySelector('.wrapper');
window.addEventListener('load',()=>{
    setTimeout(function(){
        load.classList.add('fade');
        content.classList.remove('hide');
        setTimeout(function(){
            load.classList.add('hide');
            content.classList.remove('fade');
        },1000)
    },5000)
})


const message = document.querySelector('.message');
const generate = document.querySelector('.generate');
generate.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * (30 + 1));
    message.classList.add('fade');
    setTimeout(function(){
        readTextFile("jason derulo/msg.json", function (text) {
            var data = JSON.parse(text);
            message.innerHTML = data[rand];
            message.classList.remove('fade');
        })
    },1000)

});

//message.innerHTML = msgs[rand];





//ReadTextFile from StackOverflow
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

//tranisiton


