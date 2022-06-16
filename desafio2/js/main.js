alert("Bienvenidos a la Tienda")

const productos=[
    {id:1, nombre:"BuzoOversize", precio:6500, categoria:"Buzos"},
    {id:2, nombre:"BuzoAjustado", precio:6300, categoria:"Buzos"},
    {id:3, nombre:"Remera", precio:3000, categoria:"Remera"},
    {id:4, nombre:"Camperas", precio:7000, categoria:"Campera"},
]
console.log("-------------------------");

console.log(productos)

let comprarProd = prompt("Seleccione el precio del articulo que desea comprar\nBuzo Oversize: $6500\nBuzo Ajustado: $6300\nRemera: $3000\nCampera: $7000 \nAl valor del producto se le aumenta un monto de envio");
comprarProd=parseFloat(comprarProd);

switch (comprarProd){
    case 6500:
    alert("El buzo Oversize cuesta " + comprarProd);
    break;

    case 6300:
    alert("El buzo Ajustado cuesta " + comprarProd);
    break;

    case 3000:
    alert("La remera cuesta " + comprarProd);
    break;

    case 7000:
    alert("La campera cuesta " + comprarProd);
    break;

    default:
    alert("El precio ingresado es incorrecto ");
    break;
}
let precioPagar= comprarProd;
total=0;

function envio (comprarProd) {

total=(comprarProd + 500);
    
    return total;
    
    
}
alert("El precio final a pagar es " + envio(comprarProd) + " (incluye envio)\nGracias por su compra! ");
    
    





