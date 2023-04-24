const input = document.getElementById("input");
const button = document.getElementsByClassName("button");
const result = document.getElementsByClassName("result");

const existingArray = JSON.parse(localStorage.getItem("wishlist")) || [];

existingArray.forEach((item) => {
  const list = document.createElement("li");
  list.innerHTML = item;
  result[0].append(list);
});

const addWishList = () => {
  if (input.value !== "") {
    const list = document.createElement("li");
    list.innerHTML = input.value;
    existingArray.push(input.value);
    result[0].append(list);
    localStorage.setItem("wishlist", JSON.stringify(existingArray));
  } else {
    alert("ohho Please add something");
  }
};

button[0].addEventListener("click", addWishList);
