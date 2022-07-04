let nombre = prompt("Bienvenido! Ingresa tu nombre");
let decision = parseInt(prompt(`Te presentamos la feria de descuentos de CoderTienda! Porfavor ${nombre} indicanos con un 1 si estás en interesado o un 0 si quieres salir`));

const descuentos = (par1) => {
    switch(par1){
        case 1: 
                
                alert("Los descuentos en Camperas son de un 15%, informate más en https://codertienda.com/camperas");
                break;
        case 2: 
                alert("Los descuentos en Jeans son de un 10%, informate más en https://codertienda.com/jeans");
                break;
        case 3:
                alert("Los descuentos en Remeras son de un 30%, informate más en https://codertienda.com/remeras");
                break;
        case 4:
                alert("Los descuentos en Zapatillas son de un 20%, informate más en https://codertienda.com/zapatillas");
                break;
        case 5:
                alert("Lamentablemente, aquí no tenemos descuentos, pero puedes consultar los precios en: https://codertienda.com/otros");
                break;
        case 6:
                alert(`Has elegido la opción de salir. Vuelve cuando quieras ${nombre}`);
                break;
        default:
                alert(`${nombre}, has ingresado un numero incorrecto, se volverá a desplegar los productos con descuentos para que vuelvas a intentarlo!`)
                producto= parseInt(prompt("Digite el numero del producto deseado y se desplegara su descuento correspondiente. 1 - Camperas, 2 - Jeans, 3 - Remeras, 4 - Zapatillas, 5 - Otros, 6 - Salir" ));
                descuentos(producto);
                break;
    }
}


if (decision === 1){
    let producto= parseInt(prompt("Digite el numero del producto deseado y se desplegara su descuento correspondiente. 1 - Camperas, 2 - Jeans, 3 - Remeras, 4 - Zapatillas, 5 - Otros, 6 - Salir" ));
    descuentos(producto);
} else if (decision === 0){
    alert(`Has elegido la opción de salir. Vuelve cuando quieras ${nombre}`);
} else {
    producto= parseInt(prompt("Digite el numero del producto deseado y se desplegara su descuento correspondiente. 1 - Camperas, 2 - Jeans, 3 - Remeras, 4 - Zapatillas, 5 - Otros, 6 - Salir" ));
    descuentos(producto);
}



