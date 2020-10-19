function validar() {
    var p1 = document.getElementById("usuario").value;
    var p2 = document.getElementById("pw").value;
    if (p1.length == ' ' || p2.length == ' ' || p1.indexOf("@") < 0) {
        alert("Alguno de los datos es erroneo, reintente 🤔");
        alert("💡 Recuerde, el mail debe contener @ para ser valido y debe ingresar tanto el usuario como la contraseña para avanzar");
        location.reload();
    }
    else{
        alert("Datos correctos!!!! Bienvenido..." + p1);
    }
}

