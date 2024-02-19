const flujoCaja = [
    {'Enero' :{'ingreso': 1500, 'egreso': 1500}},
    {'Febrero' :{'ingreso': 2500, 'egreso': 2500}},
    {'Marzo' :{'ingreso': 84683, 'egreso': 1155}},
    {'Abril' :{'ingreso': 135353, 'egreso': 1533}},
    {'Mayo' :{'ingreso': 1535, 'egreso': 5434}},
    {'Junio': {'ingreso': 4343354, 'egreso': 5434543}},
    {'Julio' :{'ingreso': 435453, 'egreso': 4543}},
    {'Agosto' :{'ingreso': 78351, 'egreso': 7816}},
    {'Septiembre' :{'ingreso': 1878, 'egreso': 95634}},
    {'Octubre' :{'ingreso': 48483, 'egreso': 9433}},
    {'Noviembre' :{'ingreso': 35483, 'egreso': 53133}},
    {'Diciembre' :{'ingreso': 3843, 'egreso': 348133}},
]


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
        return "El flujo de caja del último año genera ganancias.";
    } else if (totalIngresos < totalEgresos) {
        return "El flujo de caja del último año genera pérdidas.";
    } else {
        return "El flujo de caja del último año se mantiene en equilibrio, no hay ganancias ni pérdidas.";
    }
}

const resultado = verificacionDeFlujoDeCajaAnual( flujoCaja );
console.log(resultado);