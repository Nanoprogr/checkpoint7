function lasuperoperacion(a, b, c, d) {
    let union1 = a + b;
    let union2 = c + d;
    let resultado = union1 * union2;
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}