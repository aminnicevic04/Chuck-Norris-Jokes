const container = document.querySelector(".container");
const category_container = document.querySelector(".category_container");
const search_container = document.querySelector(".search_container");
const input = document.querySelector("input");

const fetchByCategory = async (category) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  const categotyJoke = await response.json();

  category_container.innerHTML = `
  <h2><span class="orange">Category</span>: ${categotyJoke.categories}</h1>
  <h3><span class="orange">Joke</span>: ${categotyJoke.value}</h3>
  `;
};

const fetchByInput = async () => {
  const inputVal = input.value;
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${inputVal}`
  );
  const inputJoke = await response.json();
  const result = inputJoke.result.map(
    (r) => `<ul class="fromJs">${r.value}</ul>`
  );

  search_container.innerHTML = result;
};

const fetchRandom = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const responseData = await response.json();
  container.innerHTML = `<h3><span class="orange">Random Joke</span>: ${responseData.value}<h3>`;
};
fetchRandom();
