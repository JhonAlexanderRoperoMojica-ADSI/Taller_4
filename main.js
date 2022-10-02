addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let num = parseFloat(prompt("ingrese el valor a calvular"));
        for (i = 1; i <= num; i++) {
            let total1 = i ** 2;
            let total2 = i ** i;

            document.getElementById("serie").innerHTML = `el primer resultado es: ${total1}`;
            document.getElementById("serie1").innerHTML = `el segundo resultado es: ${total2}`;
        }
    })
})
