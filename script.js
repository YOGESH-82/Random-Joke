const URL="https://hindi-jokes-api.onrender.com/jokes?api_key=54066a2372e69a7dff3547003646";

const joke = document.querySelector(".joke ");
const btn = document.querySelector(".btn");


const getJoke = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    let theJoke = data.jokeContent;
    console.log(theJoke);
    joke.innerText = theJoke;

}



btn.addEventListener("click", getJoke);

