let img = document.querySelector(".topdiv>img");
let buttom = document.querySelectorAll("button");
let imgNum = 0;
let imgArr = [
  "https://cdn3.ezmall.com/0/images/banner/JTA1653977829287/r/1400x730/3_bag_benner.jpg",
  "https://cdn3.ezmall.com/0/images/banner/FGZ1643028080247/r/1400x730/Block_print_banner_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/JDP1643028197686/r/1400x730/Blue_Pottery_banner_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/UKC1643028284089/r/1400x730/Chikankari_banner_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/FYL1643028385754/r/1400x730/Meenakari_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/VNS1643030634483/r/1400x730/Marble_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/BUP1643027987840/r/1400x730/Agra_Ka_Petha_banner_new11.jpg",
  "https://cdn3.ezmall.com/0/images/banner/ZAT1653977658926/r/1400x730/1_Banner.jpg",
  "https://cdn3.ezmall.com/0/images/banner/JYP1647241059608/r/1400x730/Sweets_banner.jpg",
  "https://cdn3.ezmall.com/0/images/banner/QOL1643128844507/r/1400x730/24pc_Glass_Choodi_banner1.jpg",
];
buttom[0].addEventListener("click", function () {
  if (imgNum === 0) {
    imgNum = imgArr.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArr[imgNum];
});
buttom[1].addEventListener("click", function () {
  if (imgNum === imgArr.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  img.src = imgArr[imgNum];
});

let link = document
  .querySelector(".topdiv>img")
  .addEventListener("click", function () {
    window.location.href =
      "https://www.ezmall.com/the-authentic-store/accessories/jewellery";
  });
document
  .querySelector("#nav-right-buttons>img+img")
  .addEventListener("click", function () {
    window.location.href =
      "https://www.ezmall.com/faces/fe/jsps/myAccountMain.jsp?tabValue=tab-5";
  });
document
  .querySelector("#nav-right-buttons>img:last-child")
  .addEventListener("click", function () {
    window.location.href =
      "https://www.ezmall.com/faces/fe/jsps/mainShoppingCart.jsp";
  });
document
  .querySelector(".second_2nd>div")
  .addEventListener("click", function () {
    window.location.href =
      "https://www.ezmall.com/watch/live/angoori-petha-500gms/23919/buy/115";
  });
