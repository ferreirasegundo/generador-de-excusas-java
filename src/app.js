import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateExcuse ();
};
function generateExcuse() {
  let who = ["Mi amigo", "La novia", "El hermano", "La mama"];
  let action = ["se durmio", "no lo deja salir", "destrozó", "rompió"];
  let what = ["mi zapato", "mi teléfono", "el coche"];
  let when = ["antes de salir", "mientras dormía", "cuando estaba listo", "durante el almuerzo"];

  let excuse =
  who[Math.floor(Math.random() * who.length)] +
  " " +
  action[Math.floor(Math.random() * action.length)] +
  " " +
  what[Math.floor(Math.random() * what.length)] +
  " " +
  when[Math.floor(Math.random() * when.length)] +
  ".";

  document.getElementById("excuse").innerHTML = excuse;
}