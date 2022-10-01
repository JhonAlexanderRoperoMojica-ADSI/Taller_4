addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = parseInt(prompt("Digite un numero entero positivo: "));
        for(let i = 0; i <= 12; i++){
            document.write(`${numero} X ${i} = ${numero * i} <br>`);
        }
        
    })
})