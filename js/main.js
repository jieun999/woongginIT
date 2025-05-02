let sub = document.querySelectorAll(".sub");
let subUL = document.querySelectorAll(".sub>ul");
let gnb = document.querySelectorAll(".menu>li");
function myfnc() {
  sub.forEach(function (v, k) {
    v.style.height = 0 + "px";
    v.classList.remove("on");
  });

  document.querySelector(".head").style.height = 80 + "px";
}
gnb.forEach(function (v, k, allitem) {
  v.onmouseenter = function () {
    try {
      let ht = sub[k].querySelector("ul").offsetHeight;
      gnb[k].querySelector(".sub").style.height = ht + "px";
      gnb[k].querySelector(".sub").classList.add("on");
      document.querySelector(".head").style.backgroundColor = "#fff";
      document.querySelector(".head").style.height = 440 + "px";
    } catch (error) {
      document.querySelector(".head").style.height = 80 + "px";
    }
  };
  v.onmouseleave = function () {
    myfnc();
  };
});
document.querySelector(".head ul").onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
  });
  document.querySelector(".head").style.backgroundColor = "#fff";
  //document.querySelector(".head").style.height = 80 + "px";
  //document.querySelector(".logo img").src =
    //"https://www.cuchen.com/img/logo-d.svg";
};
document.querySelector(".head").onmouseleave = function () {
  myfnc();
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
  });
  //document.querySelector(".head").style.backgroundColor = "transparent";
  //document.querySelector(".logo img").src =
    //"https://www.cuchen.com/img/logo.svg";
};