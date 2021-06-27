let search = "";
let i = 0;

const hipsterButton = document.getElementById("hipster");
hipster.addEventListener("click", modifyText);
function modifyText() {
  search = "hipster";
  i = 0;
  console.log(search);
}

const historyButton = document.getElementById("history");
historyButton.addEventListener("click", modifyText1);
function modifyText1() {
  search = "history";
  i = 0;
  console.log(search);
}

const beesButton = document.getElementById("bees");
bees.addEventListener("click", modifyText2);
function modifyText2() {
  search = "bees";
  i = 0;
  console.log(search);
}

generate.addEventListener("click", getJokes);

async function getJokes() {
  console.log(search);

  let jokejson;
  let joke;

  try {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    joke = await fetch(
      `https://icanhazdadjoke.com/search?term=${search}`,
      options
    );
    jokejson = await joke.json();
    console.log(jokejson);
  } catch (error) {
    console.log(error.message);
  }

  document.getElementById("joke").innerHTML = jokejson.results[i++].joke;
}
