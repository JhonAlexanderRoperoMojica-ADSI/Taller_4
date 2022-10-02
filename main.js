addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let cant = parseFloat(prompt("ingrese la cantida de numeros"));
        for (i=1; i<=cant; i++){
            let num1 = parseInt(prompt(`Ingrese el primer numero ${i}`));
            let num2 = parseInt(prompt(`Ingrese el segundo número:`));

            let suma = num1 + num2;
            let resta = num1-num2;
            let multiplicación = num1 * num2;
            let división = num1 / num2;

            document.getElementById("serie").innerHTML = `la suma es: ${suma}`;
            document.getElementById("serie1").innerHTML = `la resta es: ${resta}`;
            document.getElementById("serie2").innerHTML = `la multiplicación es: ${multiplicación}`;
            document.getElementById("serie3").innerHTML = `la división es: ${división}`;
        }
    })
})
