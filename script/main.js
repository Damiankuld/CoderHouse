/******************Clase_N4_Barrionuebo_Damián******************/
/*
Algoritmo donde se evaluan descuentosc y de una panadería

Por cada 15 tortas compradas el cliente recibe 1 gratis
Al comprar entre 100 y 499 o más tortas el cliente tiene un descuento del 10%
Al comprar 500 o más tortas recibe un descuento del 15%
*/
// variables
let cantidad = 0;
let descuento500 = 0.15;
let descuento100 = 0.1;
let precioTorta = 500;
let total = 0;
let precioUnitarioAPagar = 0;
let promocion = 15;
let tortaGratis = 0;

cantidad = prompt ("¿Cuantas tortas desea comrpar?");

// Cálculo de las tortas gratis
const calcularDescuento = (cantidad) => {
    if (cantidad >= 15) {
        tortaGratis = Math.floor(cantidad / promocion);
        console.log (`Ud recibe ${tortaGratis} tortas gratis, ¡Que la(s) disfrute!.`);
    // No recibe torta gratis
    } else {
        console.log (`Si desea aprovechar la promoción de las tortas gratis debe comprar un mínimo de ${promocion} tortas.`);
    }

// Cálculo de los descuentos
    // Calcular el descuento de 500+ tortas
    if (cantidad >= 500) {
        total = (precioTorta * cantidad) - ((precioTorta * cantidad) * descuento500);
        precioUnitarioAPagar = total / cantidad;

        console.log (`El total a pagar por ${cantidad} tortas es de $${total}, quedándo la unidad a un valor de ${precioUnitarioAPagar}`);
    // Calcular el descuento de 100+ tortas
    } else if (cantidad >= 100) {
        total = (precioTorta * cantidad) - ((precioTorta * cantidad) * descuento100);
        precioUnitarioAPagar = total / cantidad;
        console.log (`El total a pagar por ${cantidad} tortas es de $${total}, quedándo la unidad a un valor de ${precioUnitarioAPagar}`);
    // No recibe descuento
    } else {
        total = precioTorta * cantidad
        console.log (`El total a pagar por ${cantidad} tortas es de $${total}. Para recibir descuentos debe comprar 100 o más tortas.`);
    }
}


calcularDescuento(cantidad);