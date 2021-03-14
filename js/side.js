// function Side() {
//   var card = document.querySelectorAll(".listCards .card");
//   var ShowHide = document.querySelector("#hide");
//   var hide = document.querySelector(".button.hide");
//   card.forEach((item) => {
//     item.addEventListener("click", toggleShowHide, false);
//     let cardFixed = item.cloneNode(true);
//     function toggleShowHide() {
//       if (!ShowHide.classList.contains("show")) {
//         ShowHide.classList.toggle("show");
//         ShowHide.appendChild(cardFixed);
//       }
//     }

//     hide.addEventListener("click", handleHide, false);
//     function handleHide() {
//       if (ShowHide.classList.contains("show")) {
//         ShowHide.classList.remove("show");
//         ShowHide.children[1].remove();
//       }
//     }
//   });
// }

