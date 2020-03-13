$(document).ready(function() {
  $("#guardaRegistro").click(function() {
    regitra();
  });
});

const regitra = () => {
  let expreCorreo = /\w+@\w+\.+[a-z]/;
  let expreDni = /^\d{8}$/;

  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;
  let sexo = document.getElementById("sexo").value;
  let distrito = document.getElementById("distrito").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let dni = document.getElementById("dni").value;
  let ocupacion = document.getElementById("ocupacion").value;

  if (nombre == "") {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese el nombre!"
    });
    return false;
  } else if (apellidos == "") {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese los apellidos!"
    });
    return false;
  } else if (edad == "") {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese la edad!"
    });
    return false;
  } else if (sexo == 0 || sexo == null) {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Seleccione el sexo!"
    });
    return false;
  } else if (distrito == 0 || distrito == null) {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Seleccione el distrito!"
    });
    return false;
  } else if (!expreCorreo.test(correo)) {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese un correo!"
    });
    return false;
  } else if (telefono == "") {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese un teléfono!"
    });
    return false;
  } else if (!expreDni.test(dni)) {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Ingrese un documento de identidad!"
    });
    return false;
  } else if (ocupacion == 0 || ocupacion == null) {
    Swal.fire({
      type: "error",
      title: "Error",
      text: "Seleccione una ocupación!"
    });
    return false;
  }
};
