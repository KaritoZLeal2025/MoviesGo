document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btn-enter");
    let checkbox = document.getElementById("aceptar");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            boton.disabled = false;
            boton.classList.add("habilitado");
        } else {
            boton.disabled = true;
            boton.classList.remove("habilitado");
        }
    });

    boton.addEventListener("click", function () {
        if (!boton.disabled) {
            window.location.href = "inicio.html";
        }
    });
});

function verificarTexto(inputId, mensajeId) {
    let input = document.getElementById(inputId);
    let mensaje = document.getElementById(mensajeId);

    if (input.value.trim() === "") {
        mensaje.style.visibility = "visible";
    } else {
        mensaje.style.visibility = "hidden";
    }
}

function togglePassword() {
    let passwordInput = document.getElementById("password");
    let eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.textContent = "visibility_off";
    } else {
        passwordInput.type = "password";
        eyeIcon.textContent = "visibility";
    }
}


