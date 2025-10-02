let main = document.getElementById("main-image");
let thumbs = document.querySelectorAll(".thumb");


thumbs.forEach(function (el,i) {
  el.addEventListener("click" ,function() {
    main.src = el.src
    thumbs.forEach(function (el) {
      el.classList.remove("selected")
    })
    el.classList.add("selected")
  })
});
