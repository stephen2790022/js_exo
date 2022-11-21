// Fonctionnalité 1 --- Fonctionnalité 1-bis :
var clickCount = 0
document.getElementsByTagName("footer")[0]
.addEventListener("click", () => {
  clickCount ++;
  console.log("clic numéro " + clickCount);
});

// Fonctionnalité 2 :
document.querySelector("button.navbar-toggler")
  .addEventListener("click", () => {
    document.querySelector("#navbarHeader").classList.toggle("collapse");
  });

// Fonctionnalité 3 :
let card1 = document.querySelectorAll(".card")[0]
let editButton1 = card1.querySelectorAll("button")[1]
editButton1.addEventListener("click", () => {
  card1.style.color = "red";
});

// Fonctionnalité 4 :
let card2 = document.querySelectorAll(".card")[1]
let editButton2 = card2.querySelectorAll("button")[1]
editButton2.addEventListener("click", () => {
  if (card2.style.color === "green") {
    card2.style.color = "";
  } else {
    card2.style.color = "green";
  }
});

// Fonctionnalité 5 :
document.querySelector(".navbar")
.addEventListener("dblclick", () => {
  let styleSheet = document.styleSheets[0];
  if (styleSheet.disabled === true) {
    styleSheet.disabled = false;
  } else {
    styleSheet.disabled = true;
  }
});

// Fonctionnalité 6 :
document.querySelectorAll(".card")
.forEach((card) => {
  card.querySelector("button")
  .addEventListener("mouseover", () => {
    card.querySelector("p")
    .classList.toggle("collapse");
    let img = card.querySelector("img");
    if (img.style.width === "20%") {
      img.style.width = "100%";
    } else {
      img.style.width = "20%";
    }
  });
});

// Fonctionnalité 7 :
document.querySelectorAll("section a")[1]
.addEventListener("click", () => {
  let row = document.querySelector(".album .row")
  row.insertBefore(
    row.lastElementChild,
    row.firstChild
  );
})

// Fonctionnalité 8 :
document.querySelectorAll("section a")[0]
.addEventListener("click", (ev) => {
  ev.preventDefault(); 
  let row = document.querySelector(".album .row")
  row.appendChild(
    row.firstElementChild
  );
})

// Fonctionnalité 9 :
document.querySelector(".navbar-brand")
.addEventListener("keypress", (ev) => {
  let body = document.body
  switch (ev.key) {
    case "a":
      body.classList = ""
      body.classList.add("col-4")
      break;
    case "y":
      body.classList = ""
      body.classList.add("col-4","offset-md-4")
      break;
    case "p":
      body.classList = ""
      body.classList.add("col-4","offset-md-8")
      break;
    case "b":
      body.classList = ""
      break;
  }
})