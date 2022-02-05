function comparaNumeros(a, b) {
    let c = a + b;
    let saoIguais = a == b ? '' : 'não '
    let compara10;
    let compara20;
    if (c > 10) {
        compara10 = "maior"
    } else if (c < 10) {
        compara10 = "menor"
    } else {
        compara10 = "igual"
    }
    if (c > 20) {
        compara20 = "maior"
    } else if (c < 20) {
        compara20 = "menor"
    } else {
        compara20 = "igual"
    }
    console.log(`Os números ${a} e ${b} ${saoIguais}são iguais. Sua soma é ${c}, que é ${compara10} que 10 e ${compara20} que 20.`)
}

comparaNumeros(3,5)