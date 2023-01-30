import "./libs/lib.js";
import axios from "axios";

window.addEventListener("DOMContentLoaded", function (e) {
     const form = document.querySelector("form");

     function req(e) {
          e.preventDefault();

          let formData = new FormData(form);
          formData.append("id", Math.random() + 1);

          const obj = {};
          formData.forEach((value, key) => {
               obj[key] = value;
          });

          // --Отправка при помощи библиотеки "Axios" --
          axios({
               method: "post",
               url: "./assets/server.php",
               data: formData,
               headers: {
                    "content-type": "multipart/form-data"
               }
          })
               .then(data => console.log(data.data));

          // --Отправка при помощи fetch--
          getResourse("./assets/server.php", formData)
               .then(data => console.log(data))
               .catch(err => console.error(err));

          // --Отправка XMLHttpRequest--
          let request = new XMLHttpRequest();
          request.open("POST", "./assets/server.php");
          // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
          request.send(formData);
          request.addEventListener("load", (e) => {

               if (request.status == 200) {
                    let data = request.response;
                    console.log(data)
                    data.forEach(item => {

                         let card = document.createElement("div");
                         card.classList.add("card");

                         let sex = (item.sex === "male") ? "мужчины" : "девушки";
                         card.innerHTML = `
                            <div>Фото ${sex} </div>
                            <img src="${item.photo}">
                        `;

                         document.body.prepend(card);
                    });
               } else {
                    console.error("Что то пошло не так");
               }
          });
     }

     async function getResourse(url, data) {
          let response = await fetch(url, {
               method: "POST",
               headers: {
                    "Content-type": "multipart/form-data"
               },
               body: data
          });

          if (!response.ok) {
               throw new Error("Coud't load this content!");
          }

          return await response.text();
     }

     function reqAxios(url, data) {
          let obj = axios(url, {
               method: "POST",
               headers: {
                    "Content-type": "application/json"
               },
               body: JSON.stringify(data)
          });

          return obj.data;
     }

     form.addEventListener("submit", (e) => req(e));
});