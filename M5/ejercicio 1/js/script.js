const modal = document.getElementById("miModal");
const resultado  = document.querySelector("#resultado");
const costoFijo = document.querySelector("#costo_fijo");
const costoVariable = document.querySelector("#costo_variable");
const precioVenta = document.querySelector( "#precio_venta");

function puntoDeEquilibrio(costoFijo, precioVenta, costoVariable) {
    const diferenciaCosto = precioVenta - costoVariable;
    return (diferenciaCosto != 0) ? costoFijo / diferenciaCosto : NaN; 
}

function calcularPuntoDeEquilobrio(costoFijo, precioVenta, costoVariable) {
    let resultado = '';
    
    if (!isNaN(costoFijo) || !isNaN(costoVariable) || !isNaN(precioVenta)) {
        resultado = 'Solo se puede calcular valores numericos.';
    }

    const diferenciaCosto = precioVenta - costoVariable;
    console.log(diferenciaCosto);
    resultado = (diferenciaCosto != 0) ? `El punto de equilibrio es: ${costoFijo / diferenciaCosto}` 
                                       : "No se puede dividor por 0. Verifique los datos ingresados.";
    return resultado;
}

function mostrarModal() {
    
    const puntoEquilibrio = calcularPuntoDeEquilobrio(costoFijo.value, precioVenta.value, costoVariable.value);
    resultado.innerText= puntoEquilibrio;    
    modal.style.display = "block";

}

function cerrarModal() {
    modal.style.display = "none";
}

function reset() {
    costoFijo.value = '';
    costoVariable.value = '';
    precioVenta.value = '';
}

