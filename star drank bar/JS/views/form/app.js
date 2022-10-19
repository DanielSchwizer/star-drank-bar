import { valida } from "./validacion.js";

/**
 * variable que trae TODOS los inputs del documento
 */
const inputs = document.querySelectorAll("input");

/**
 * se itera sobre la variable que trae el array de inputs y por cada vuelta en la iteracion hay un listener que
 * ecucha el evento blur y llama a la funcion valida
 */
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
