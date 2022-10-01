addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let pago1 = 10;
        let mes = 20;
        
        document.getElementById("serie").innerHTML = `El valor a pagar es: ${pago1}`;

        for(let i = 2; i <= 20; i++){
            pago1 = pago1 * 2;
            
            document.getElementById("serie2").innerHTML = `El mes ${i} el valor a pagar es ${pago1} peso`;
        }
    })
})