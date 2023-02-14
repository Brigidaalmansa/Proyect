const nombre =document.getElementById("myname");
const correo =document.getElementById("email");
const contrasena =document.getElementById("password");
const contrasena2 =document.getElementById("repeatPassword");
const form=document.getElementById ("form");
const listInputs =document.querySelectorAll(".form-input")

<form action="" method="" id="" name="" onsubmit="return validacion()"></form>

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild.innerHTML = "";
    });
  
    if (nombre.value.length < 1 || nombre.value.trim() == "") {
      mostrarMensajeError("myname", "Nombre no valido*");
      condicion = false;
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
      mostrarMensajeError("surname", "Apellido no valido");
      condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
      mostrarMensajeError("email", "Correo no valido*");
      condicion = false;
    }
    
    }
    if (contrasena.value.length < 1 || contrasena.value.trim() == "") {
      mostrarMensajeError("password", "Contraseña no valido*");
      condicion = false;
    }
    if (contrasena2.value != contrasena2.value) {
      mostrarMensajeError("repeatPassword", "Contraseña error*");
   
    }
  function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }
  
  function enviarFormulario() {
    form.click();
    form.lastElementChild.innerHTML = "Listo !!";
  }

  