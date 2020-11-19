function century(year) {
    let resultado = year / 100;
    if (resultado > 0 ) {
        if (Number.isInteger(resultado)) {resultado-=1;}
        resultado += 1;
        return Math.floor(resultado);
    };
    if (resultado < 0) {
        resultado = year % 100;
        return Math.floor(resultado);
    };
}