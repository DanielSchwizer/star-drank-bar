/**
 *
 * @param {htmlElement} input
 * esta funcion añade o quita clases al elemento padre del input pasado por parametro
 * dentro tambien se llama a la funcion MostrarMensajeError
 */

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeError(tipoDeInput, input);
  }
}

/**
 * array que contiene strings con el nombre de los tipos de errores
 */
const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch"];

/**
 * objetos que contienen el nombre del input y sus errores especificos
 */
const mensajesDeError = {
  first_name: {
    valueMissing: "El campo NOMBRE no puede estar vacío",
    patternMismatch: "el campo NOMBRE solo acepta letras",
  },
  last_name: {
    valueMissing: "el campo APELLIDO no puede estar vacio",
    patternMismatch: "el campo APELLIDO solo acepta letras",
  },
  email: {
    valueMissing: "El campo CORREO no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },

  phone: {
    valueMissing: "El campo TELEFONO no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },

  text_are:{
    valueMissing: "por favor, introduzca los DETALLES de su reserva"
  }
};

/**
 *
 * @param {htmlElement} tipoDeInput
 * @param {htmlElement} input
 * @returns {String} devuelve el mensaje del error segun el input y el tipo de error que ocurrio
 */
function mostrarMensajeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
