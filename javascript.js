window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}

var kepeim = [{
    eleres: "kepek/kep01.jpg",
    cim: "Állatok",
    leírás: "Kecskék",},
    {
    eleres: "kepek/kep02.jpg",
    cim: "Japán fa",
    leírás: "Szép sétány"
    },
    {
    eleres: "kepek/kep03.jpg",
    cim: "Sárga virágok",
    leírás: "Szép mezőföld"
    },
    {
    eleres: "kepek/kep04.jpg",
    cim: "Tájkép",
    leírás: "Fent a magasban!"
    },
    {
    eleres: "kepek/kep05.jpg",
    cim: "Az út mellet",
    leírás: "Szép fehér virágok az út mellet"
    }]

var kepindex = 0;
function galeria(){
    var txt = "";
for (let index = 0; index < kepeim.length; index++) {
    txt +=`<div class="kep" >  <img id="${index}" src="${kepeim[index].eleres}" alt="${kepeim[index].cim}" > </div>`
}

ID("inp").innerHTML=txt;
for (let index = 0; index < kepeim.length; index++) {
    ID(index).addEventListener("click",kepkivalasztas)
    document.getElementsByClassName("kep")[index].style.border="5px solid red";
    document.getElementsByClassName("kep")[index].className+="kepekformazasa";
    }
function kepkivalasztas(){
    console.log(event.target.id);
    kepindex=Number(event.target.id);
    megjelenit();
}    
}
function init() {
    megjelenit();
    galeria();
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}
function megjelenit() {
    ID("kivalasztott").src = kepeim[kepindex].eleres;
    ID("kivalasztott").alt = kepeim[kepindex].cim;

}
function balra() {
    if(kepindex <= 0){
        kepindex = kepeim.length-1;
    }
    else{
        kepindex -= 1;
    }
    console.log(kepindex);
    megjelenit(kepindex);
}
function jobbra() {
    if(kepindex >= kepeim.length-1){
        kepindex = 0;
    }
    else{
        kepindex ++;
    }
    console.log(kepindex);
    megjelenit(kepindex)
}

function elsokepClick(){
    let text = document.getElementById("elsokep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}
function harkepClick(){
    let text = document.getElementById("harmadikkep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}