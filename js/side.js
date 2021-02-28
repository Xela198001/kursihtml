// function Side() {
//   var card = document.querySelectorAll(".listCards .card");
//   var ShowHide = document.querySelector("#hide");
//   var hide = document.querySelector(".button.hide");
//   card.forEach((item) => {
//     item.addEventListener("click", toggleShowHide, false);
//     let cardFixed = item.cloneNode(true);
//     function toggleShowHide() {
//       console.log(cardFixed);
//       if (!ShowHide.classList.contains("show")) {
//         ShowHide.classList.toggle("show");
//         ShowHide.appendChild(cardFixed);
//       }
//       //console.log(item);
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


// function foo(count) {
//   console.log(count);
// };
