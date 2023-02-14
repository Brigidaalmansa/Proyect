

let id = (id) =>document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form =id("formulario"),
Repeatpassword = id("Repeatpassword"), 
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener ("submit",(e)=>{
e.preventDefault();



engine(username, 0, "Nombre no puede estar vacio"); 
engine(email, 1, "Email no puede estar vacio"); 
engine(password, 2, "Contraseña no puede estar vacio"); 
engine(Repeatpassword, 3, "Repite contraseña no puede estar vacio");

let engine =(id,serial,message) => {
    if (id.value.trim()=== ""){
        errorMsg[serial].innerHTML= message;
    failureIcon [serial].style.opacity ="1";
    successIcon [serial].style.opacity ="0";
}
else {
    errorMsg[serial].innerHTML ="";
    failureIcon [serial].style.opacity ="0";
    successIcon [serial].style.opacity ="1";
    }
}