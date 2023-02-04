import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const ul = document.querySelector("ul");

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
        .then(res => res.json())
        .then((data) => {
            for (let i = 0; i <= data.results.length - 1; i++) {
                let listItem = document.createElement('li');
                listItem.innerText = data.results[i].name;
                ul.appendChild(listItem);
                
            }

        })







});