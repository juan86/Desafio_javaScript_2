const modal = document.getElementById("miModal");
const resultado  = document.querySelector("#resultado");
const ingresoTotal = document.querySelector("#ingreso_total");

function calcularPresupuesto(ingresoTotal) {
    // Calcula los montos para cada categoría basándose en el porcentaje del ingreso total.
    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroEInversion = ingresoTotal * 0.2;

    // Devuelve un objeto con los montos calculados para cada categoría.
    return {
        gastosNecesarios,
        gastosOpcionales,
        ahorroEInversion
    };
}

function obtenerPresupuestoFormateado(ingresoTotal) {
    let resultado = '';
    console.log(isNaN(ingresoTotal));
    // Verifica si el ingreso total es un número válido y mayor que cero.
    
    if (isNaN(ingresoTotal) || ingresoTotal <= 0 || ingresoTotal == '') {
        return  "Por favor, ingrese un valor mayor cero.";
    }

    // Calcula el presupuesto utilizando la función calcularPresupuesto.
    const presupuesto = calcularPresupuesto(ingresoTotal);

    // Muestra en consola los montos calculados para cada categoría.
    resultado += `Presupuesto basado en el modelo 50-30-20 para un ingreso total de $${ingresoTotal}:\n`;
    resultado += `- Gastos necesarios: $${presupuesto.gastosNecesarios}\n`;
    resultado += `- Gastos opcionales: $${presupuesto.gastosOpcionales}\n`;
    resultado += `- Ahorro e inversión: $${presupuesto.ahorroEInversion}\n`;
    
    return resultado
}

function mostrarModal() {
    
    const presupuesto = obtenerPresupuestoFormateado(ingresoTotal.value);
    resultado.innerText= presupuesto;    
    modal.style.display = "block";

}

function cerrarModal() {
    modal.style.display = "none";
}

function reset() {
    ingresoTotal.value = '';
}

