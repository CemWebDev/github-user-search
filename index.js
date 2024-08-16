import { userData } from "./data.js";

const searchBtn = document.querySelector(".search-btn");

const searchUser = () => {
  const username = document.querySelector("#username-input").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching user data", error);
    });
};

searchBtn.addEventListener("click", searchUser);
