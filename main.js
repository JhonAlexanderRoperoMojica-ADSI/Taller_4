addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let s = 1;
        const pi = 3.14;

        let numero1 = parseFloat(prompt("Exponentes"))
        let numero2 = parseFloat(prompt("Angulos en radianes"));

        let x = numero2 * (180 / pi);
        let sen = x;
        for (i = 3; i <= numero1 + 1; i++) {

            let a = 1;
            let b = 1;

            while (a <= i) {
                b = b * a;
                a = a + 1;
            }
            if (sig % 2 == 1) {
                sen = sen - ((x * i) / b);
            }
            else {
                sen = sen + ((x * i) / b);
            }
            s += 1;
        }
        document.getElementById("serie").innerHTML = `el seno de ${x} es: ${sen}`;
    })
})
