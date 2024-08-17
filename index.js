import { userData } from "./data.js";

const searchBtn = document.querySelector(".search-btn");
const githubProfile = document.querySelector(".github-profile");

const searchUser = () => {
  const username = document.querySelector("#username-input").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {

      userData.forEach((item) => {
        const value = data[item.key];
        const element = document.createElement("div");
        element.classList.add("user-data-item");

        if (item.key === "avatar_url") {
          const img = document.createElement("img");
          img.src = value;
          img.alt = `${data.login}'s avatar`;
        } else {
          element.innerHTML = `<div> ${item.label}: ${value} </div>`;
        }

        githubProfile.appendChild(element);
      });
    })
    .catch((error) => {
      console.error("Error fetching user data", error);
    });
};

searchBtn.addEventListener("click", searchUser);
