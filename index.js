import { userData } from "./data.js";

const searchBtn = document.querySelector(".search-btn");
const profileLink = document.querySelector(".profile-link");

const searchUser = () => {
  const username = document.querySelector("#username-input").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      Array.from(document.getElementsByClassName("user-data-item")).forEach(
        (element) => {
          element.innerHTML = "";
        }
      );

      userData.forEach((item) => {
        const value = data[item.key];
        const element = document.getElementById(item.key);

        if (element) {
          if (item.key === "avatar_url") {
            const img = document.createElement("img");
            img.src = value;
            img.alt = `${data.login}'s avatar`;
            img.classList.add("avatar");
            element.appendChild(img);
          } else if (item.key === "login") {
            element.innerHTML = `<h2>${value}</h2>`;
          } else {
            element.innerHTML = `${item.label}: ${value}`;
          }
        } else {
          console.error(`Element with id ${item.key} not found.`);
        }
       profileLink.href = data.html_url;
      });
    })
    .catch((error) => {
      console.error("Error fetching user data", error);
    });
};

searchBtn.addEventListener("click", searchUser);
