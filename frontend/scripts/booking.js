let LiveDonkeyDetails = document.querySelector(".LiveDonkey");
let DonkeyMeatDetails = document.querySelector(".DonkeyMeat");
let DonkeyMilkDetails = document.querySelector(".DonkeyMilk");

let LiveDonkey = document.querySelector("#live_donkey");
let DonkeyMeat = document.querySelector("#donkey_meat");
let DonkeyMilk = document.querySelector("#donkey_milk");
let Adoption = document.querySelector(".Adoption");
let Excursions = document.querySelector(".Excursions");
let CocoaQua = document.querySelector(".CocoaQua");
let excursionchecked = document.querySelector("#excursion");
let adoptchecked = document.querySelector("#adopt");
let cocoachecked = document.querySelector("#cocoa");

excursionchecked.addEventListener("click", () => {
  if (excursionchecked.checked === true) {
    Excursions.style.display = "flex";
  } else {
    Excursions.style.display = "none";
  }
});
adoptchecked.addEventListener("click", () => {
  if (adoptchecked.checked === true) {
    Adoption.style.display = "block";
  } else {
    Adoption.style.display = "none";
  }
});
cocoachecked.addEventListener("click", () => {
  if (cocoachecked.checked === true) {
    CocoaQua.style.display = "block";
  } else {
    CocoaQua.style.display = "none";
  }
});
LiveDonkey.addEventListener("click", () => {
  if (LiveDonkey.checked === true) {
    LiveDonkeyDetails.style.display = "block";
  } else {
    LiveDonkeyDetails.style.display = "none";
  }
});
DonkeyMeat.addEventListener("click", () => {
  if (DonkeyMeat.checked === true) {
    DonkeyMeatDetails.style.display = "block";
  } else {
    DonkeyMeatDetails.style.display = "none";
  }
});
DonkeyMilk.addEventListener("click", () => {
  if (DonkeyMilk.checked === true) {
    DonkeyMilkDetails.style.display = "block";
  } else {
    DonkeyMilkDetails.style.display = "none";
  }
});
