

//adding elements
//ul.append(li)

//modifying text
/*
const fL = document.querySelector("ul")
const bodyE1 = document.querySelector("body")
const newItem = document.createElement("li");
const heading = document.getElementById("main-heading")
const btn = document.getElementById("btn");
const para = document.getElementById("para")
const menu = document.getElementById("menu");
const selectMenu = document.getElementById("select-menu")
const toggleBtn = document.getElementById("toggle-btn")
selectMenu.addEventListener("change", (event) =>{
    alert(`You selected: ${event.target.value}`)
    console.log(`You selected: ${event.target.value}`)
})
toggleBtn.addEventListener("click", ()=> menu.classList.toggle("show"))
let isBgColorGrey = true;
.addEventListener("")

function toggleColor(){
    bodyE1.style.backgroundColor = isBgColorGrey ? "lightgrey" : "grey";
    isBgColorGrey = !isBgColorGrey;
}
btn.addEventListener("click", toggleColor)
const intervalID = setInterval(toggleColor, 1000)
setTimeout(()=>{clearInterval(intervalID)}, 5000)
heading.setAttribute("class","main-heading")
console.log(`${heading.outerHTML}`)

newItem.textContent = heading.outerHTML ;
fL.appendChild(newItem)

console.log(fL.innerText);
console.log(fL.textContent);
console.log(fL.innerHTML);
//fL.removeChild(newItem)


fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch");
        }
        return response.json();

    })
    .then(data => console.log(data))
    .catch(error  => console.error(error));
*/

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("could not fetch");
        }
        const data = await response.json();
        const sprite = data.sprites.front_default;
        const imgElement = document.getElementById("sprite")
        imgElement.src= sprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
}