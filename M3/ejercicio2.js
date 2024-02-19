const planesDeCredito = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23 }
];

const calcularInteres = (capital, plazo, tasa) => {
    return (capital * plazo * tasa) / 100;
};

const generarOfertaCreditos = (planes) => {
    const oferta = [];

    return planes.map( plan => {
        const interes = calcularInteres(plan.capital, plan.plazo, plan.tasa);
        return { ...plan, interes };
    });
};

const ofertaCreditosConInteres = generarOfertaCreditos(planesDeCredito);
console.log(ofertaCreditosConInteres);
