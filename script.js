const menubar = document.querySelector("#bar");
const barlist = document.querySelector("#menu");

menubar.onclick = () => {
  barlist.classList.toggle("disp");
};
