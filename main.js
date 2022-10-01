addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let suma = 0;
        let A = 0;
        let B = 0;
        let C = 0;
        
        let ventas = document.getElementById("ventas").value;

        for(let i = 0; i <= ventas; i++){
            let Valor = parseFloat(prompt(`Ingrese el precio de la primera venta: ${i}`));

            if(Valor > 1000){
                A = A +1;
            }
            else if (1000 >= Valor && Valor > 500){
                B = B + 1;    
            }
            else{
                C = C + 1;
            }
            suma += Valor;

            document.getElementById("serie").innerHTML = `Ventas Mayores a 1000 son: ${A} `;
            document.getElementById("serie1").innerHTML = `Ventas Mayores a 500 menosres o iguales a 1000 son: ${B} `;
            document.getElementById("serie2").innerHTML = `Ventas Menores o iguales a 500 son: ${C} `;
            document.getElementById("serie3").innerHTML = `Las Ventas totales son: ${suma} `;
        }
    })
})