addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let estudiantes = document.getElementById("estudiantes").value;        
        let suma = 0;
        let maximo = 0;
        let mininimo = 0;


        for(let i = 0; i <= estudiantes; i++){
            let calificacion = parseFloat(prompt(`Ingrese la calificacion del estudiante: ${i}`));

            if(calificacion >= 1 && calificacion <= 5){
                suma = calificacion;
            }
            if(calificacion >= maximo){
                maximo = calificacion;
            }
            else if(mininimo >= calificacion){
                mininimo = calificacion;
            }
            
        }
        let promedio = suma / estudiantes;  
        alert(`el promedio de la nota es: ${promedio}`);
        alert(`la nota más alta es: ${maximo}`);
        alert(`la nota más baja es: ${mininimo}`);
    })
})