// EJERCICIO 1
const verificacionDeFlujoDeCajaAnual = ( flujoCajaAnual ) => {
    let totalIngresos = 0;
    let totalEgresos = 0;
    
    // Sumar todos los ingresos y egresos del año
    for (const mes of flujoCajaAnual) {
        const datosMes = Object.values(mes)[0];
        totalIngresos += datosMes.ingreso;
        totalEgresos += datosMes.egreso;
    }

    // Determinar si se generan pérdidas o no
    if (totalIngresos > totalEgresos) {
        return 1;
    } else if (totalIngresos < totalEgresos) {
        return -1;
    } else {
        return 0;
    }
}

// EJERCICIO 2 YA SE ENCUENTRA RESUELTO , NO HACE FALTA CODIFICAR NADA MAS.