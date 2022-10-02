addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let mayor = 500000;
        const iva1 = 0.19;
        let cant = parseFloat(prompt("ingrese la cantida de articulos"));
        for (i = 1; i <= cant; i++) {
            let valor = parseInt(prompt(`Ingrese el valor del árticulo: ${i}`));
            let unidad = parseInt(prompt(`Unidades compradas:`));

            let sub_tot = valor * unidad;
            let iva2 = sub_tot * iva1;
            let tot_pag = sub_tot + iva2;

            if (tot_pag > mayor) {
                let des = tot_pag * 0.15;
                let desc_tot = tot_pag - des;
                document.getElementById("serie").innerHTML = `Su compra supero los 500.000 , El pago con IVA es: ${tot_pag} , El total a pagar es: ${desc_tot}`;
            }
            else {
                document.getElementById("serie").innerHTML = `El subtotal es: ${sub_tot} , El IVA es: ${iva1} , El total a pagar es ${tot_pag}`
            }
        }
    })
})
