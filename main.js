addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let f1 = 1;
        let f2 = 0;

        for(let i = 0; i <= 10; i++){
            f2 = f1 + 4;
            f1 = f2 - 2;
            document.write(`${f2} <br>`);
            document.write(`${f1} <br>`);          
        }          
    })
})