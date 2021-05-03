//------------
//Query the buttons and areas where i want to display dom elements.
//------------
const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpName = document.getElementById("inpID")
const btnInsert = document.getElementById("btnInsert")
const output = document.querySelector(".output")
let row = document.querySelector(".row")

//-------------
// API CALL arrays
//-------------
let arr = [];
let superheroArr = [];
let html;

btnInsert.addEventListener("click", function () {
    let URL = `https://superheroapi.com/api/3935852106501451/search/${inpName.value}`
    console.log(URL)
    fetch(URL)
    .then(response => response.json())
    .then(data => data.results.map((item) => {
        if (item.name){
            createHTML(data)
            function createHTML() {
                html = `<div id="box"><img id="thumbnails" onclick="clicked()"src="${item.image.url}">${item.name}</div>`
                output.innerHTML += html;
            }
        }
    }));


    let searchPhoto = document.getElementById("thumbnails");
    searchPhoto.addEventListener("click", function(){
        createHTML(data)
        row.innerHTML += html
    })
})