import { valida } from "./validacion.js";

/**
 * variables que traen TODOS los inputs y textarea del documento
 */
const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

/**
 * se itera sobre la variable que trae el array de inputs y por cada vuelta en la iteracion hay un listener que
 * ecucha el evento blur y llama a la funcion valida
 */
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

/**
 * se itera sobre la variable que trae el array de textareas y por cada vuelta en la iteracion hay un listener que
 * ecucha el evento blur y llama a la funcion valida
 */
textAreas.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

/**
 * esto sirve para evitar que salga la burbuja con los mensajes de error predeterminados por el navegador
 */
document.addEventListener(
  "invalid",
  (() => {
    return (e) => {
      e.preventDefault();
    };
  })(),
  true
);
