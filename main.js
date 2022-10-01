addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let empleado = document.getElementById("empleado").value;
        for (let i = 0; i < empleado; i++) {
            let nombre = prompt(`Ingrese el nombre del empelado ${i}`);
            let salirio = parseFloat(prompt(`Ingrese el salario del empleado ${nombre}`));
            let tiempo = parseInt(prompt(`Ingrese el tiempo trabajdo en la pempresa del empleado ${nombre}`));

            if (tiempo >= 1 && tiempo < 5) {
                let total = salirio + 100;
                document.getElementById("serie").innerHTML = `El trabajador: ${nombre} ,Tendra un aumento de 100 mil pesos`;
                document.getElementById("serie1").innerHTML = `El salario total es de: ${total} , mil pesos`;
            }
            else if (tiempo >= 5 && tiempo < 10) {
                let total = salirio + 250;
                document.getElementById("serie").innerHTML = `El trabajador: ${nombre} ,Tendra un aumento de 250 mil pesos`;
                document.getElementById("serie1").innerHTML = `El salario total es de: ${total} , mil pesos`;
            }
            else if(tiempo >= 10 && tiempo < 20){
                let total = salirio + 400;
                document.getElementById("serie").innerHTML = `El trabajador: ${nombre} ,Tendra un aumento de 400 mil pesos`;
                document.getElementById("serie1").innerHTML = `El salario total es de: ${total} , mil pesos`;
            }
            else if (tiempo >= 20){
                let total = salirio + 550;
                document.getElementById("serie").innerHTML = `El trabajador: ${nombre} ,Tendra un aumento de 550 mil pesos`;
                document.getElementById("serie1").innerHTML = `El salario total es de: ${total} , mil pesos`;
            }   
        }
    })
})
