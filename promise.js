const API = "https://api.github.com/users/freeCodeCamp";
// promise

// var promise = new Promise((resolve, reject) => {
//   resolve(" I am rejected");
// })
//   .then((val) => `Hii ${val}`)
//   .catch((error) => console.log(error))
//   .then((val) => console.log(val))
//   .then((val) => console.log("val"));

// const result = fetch(API)
//   .then((response) => response.json())
//   .then((jsonResponse) => console.log(jsonResponse));

// function xyz() {
//   console.log("hii");
// }

// xyz();
// console.log("hello");

// setTimeout(() => {
//   console.log("inside set timeout ");
// });

// var promise = new Promise((resolve, reject) => {
//   resolve("inside promise");
// }).then((val) => console.log(val));

function Delayed(a, b, time) {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, time);
  });
  return promise;
}
Delayed(5, 7, 0).then((val) => console.log(val));
console.log("hello world");

// async await
async function fetchUser() {
  try {
    const response = await fetch(API);
    const jsonResponse = await response.json();
    renderUserInfo(jsonResponse);
    console.log(jsonResponse);
  } catch (error) {
    console.log("this is error", error);
  }
}

fetchUser();

function renderUserInfo(userInfo) {
  const cardDiv = document.createElement("div");
  const userImage = document.createElement("img");
  userImage.src = userInfo.avatar_url;
  const infoDiv = document.createElement("div");
  const name = document.createElement("p");
  name.innerHTML = userInfo.login;
  const bio = document.createElement("p");
  bio.innerHTML = userInfo.bio;
  infoDiv.append(name);
  infoDiv.append(bio);

  cardDiv.append(infoDiv);
  cardDiv.append(userImage);

  console.log("cardDiv", cardDiv);

  document.body.append(cardDiv);
}

const cart = ["shoe", "dress"];

const promise = createorder(cart)
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => console.log(err));

function createorder(cart) {
  const promise = new Promise((resolve, reject) => {
    // let's validate the cart
    if (!validateCart(cart)) {
      console.log("inside reject");
      // const err = new err("Ahha validation failed");
      reject("erroroor");
    }
    orderId = 1234;
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
function validateCart(cart) {
  return false;
}
