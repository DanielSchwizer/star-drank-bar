export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch"];

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
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
