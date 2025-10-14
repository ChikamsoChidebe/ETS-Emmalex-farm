let allHomeGallery = document.querySelector(".home_gallery_pht_1");

let allWorkBtn = document.getElementById("all-work-btn");
let platedGrassBtn = document.getElementById("planted-grass-btn");
let feedBtn = document.getElementById("feed-btn");
let medicineBtn = document.getElementById("medicine-btn");
let stableBtn = document.getElementById("stable-btn");
let abbatoirBtn = document.getElementById("abbatoir-btn");
let cocoaBtn = document.getElementById("cocoa-btn");

let allWork = document.getElementById("all-work");
let abbatoir = document.getElementById("abbatoir");
let farmCrop = document.getElementById("farm-crop");
let feed = document.getElementById("feed");
let medicine = document.getElementById("medicine");
let stable = document.getElementById("stable");
let cocoa = document.getElementById("cocoa");

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");
let fifth = document.querySelector(".fifth");

let pageOne = document.querySelector(".pageOne");
let pageTwo = document.querySelector(".pageTwo");
let pageThree = document.querySelector(".pageThree");
let pageFour = document.querySelector(".pageFour");
let pageFive = document.querySelector(".pageFive");

cocoaBtn.addEventListener("click", () => {
  cocoa.style.display = "flex";
  farmCrop.style.display = "none";
  allWork.style.display = "none";
  abbatoir.style.display = "none";
  feed.style.display = "none";
  medicine.style.display = "none";
  stable.style.display = "none";
  
});

platedGrassBtn.addEventListener("click", () => {
  farmCrop.style.display = "flex";
  allWork.style.display = "none";
  abbatoir.style.display = "none";
  feed.style.display = "none";
  medicine.style.display = "none";
  stable.style.display = "none";
  cocoa.style.display = "none";
});

allWorkBtn.addEventListener("click", () => {
  farmCrop.style.display = "none";
  allWork.style.display = "flex";
  abbatoir.style.display = "none";
  feed.style.display = "none";
  medicine.style.display = "none";
  stable.style.display = "none";
  cocoa.style.display = "none";
});

feedBtn.addEventListener("click", () => {
  farmCrop.style.display = "none";
  allWork.style.display = "none";
  abbatoir.style.display = "none";
  feed.style.display = "flex";
  medicine.style.display = "none";
  stable.style.display = "none";
  cocoa.style.display = "none";
});

medicineBtn.addEventListener("click", () => {
  farmCrop.style.display = "none";
  allWork.style.display = "none";
  abbatoir.style.display = "none";
  feed.style.display = "none";
  medicine.style.display = "flex";
  stable.style.display = "none";
  cocoa.style.display = "none";
});

stableBtn.addEventListener("click", () => {
  farmCrop.style.display = "none";
  allWork.style.display = "none";
  abbatoir.style.display = "none";
  feed.style.display = "none";
  medicine.style.display = "none";
  stable.style.display = "flex";
  cocoa.style.display = "none";
});

abbatoirBtn.addEventListener("click", () => {
  farmCrop.style.display = "none";
  allWork.style.display = "none";
  abbatoir.style.display = "flex";
  feed.style.display = "none";
  medicine.style.display = "none";
  stable.style.display = "none";
  cocoa.style.display = "none";
});

first.addEventListener("click", () => {
  pageOne.style.display = "flex";
  pageTwo.style.display = "none";
  pageThree.style.display = "none";
  pageFour.style.display = "none";
  pageFive.style.display = "none";
});

second.addEventListener("click", () => {
  pageOne.style.display = "none";
  pageTwo.style.display = "flex";
  pageThree.style.display = "none";
  pageFour.style.display = "none";
  pageFive.style.display = "none";
});

third.addEventListener("click", () => {
  pageOne.style.display = "none";
  pageTwo.style.display = "none";
  pageThree.style.display = "flex";
  pageFour.style.display = "none";
  pageFive.style.display = "none";
});

fourth.addEventListener("click", () => {
  pageOne.style.display = "none";
  pageTwo.style.display = "none";
  pageThree.style.display = "none";
  pageFour.style.display = "flex";
  pageFive.style.display = "none";
});

fifth.addEventListener("click", () => {
  pageOne.style.display = "none";
  pageTwo.style.display = "none";
  pageThree.style.display = "none";
  pageFour.style.display = "none";
  pageFive.style.display = "flex";
});
