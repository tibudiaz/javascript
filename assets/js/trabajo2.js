// segunda pre entrega

let autos = [
    {marca: "volkswagen", modelo: "gol", anio: 2020, precio: 3400000},
    {marca: "renault", modelo: "sandero", anio: 2018, precio: 4400000},
    {marca: "chevrolet", modelo: "cruze", anio: 2019, precio: 5400000},
    {marca: "fiat", modelo: "cronos", anio: 2021, precio: 3700000},
    {marca: "volkswagen", modelo: "up", anio: 2015, precio: 3150000},


];
function miFuncion() {

let option = prompt("Elige una opción de búsqueda: 1. Marca 2. Modelo 3. Año");

if (option === "1") {
        let criterio = prompt("Ingresa la marca");
        let result = autos.filter(function(objeto) {
            return objeto.marca.toLowerCase() == criterio;
        });
        if (result.length > 0) {
            let resultado = "";
            result.forEach(function(objeto) {
                resultado += "Nombre: " + objeto.marca + "\nCategoria: " + objeto.modelo + "\nAño: "+ objeto.anio + "\nPrecio: "+ objeto.precio + "\n\n";
            });
            alert(resultado);
        } else {
            alert("No se encontraron resultados");
        }
    } else if (option === "2") {
        let criterio = prompt("Ingresa el modelo");
        let result = autos.filter(function(objeto) {
            return objeto.modelo.toLowerCase() == criterio;
        });
        if (result.length > 0) {
            let resultado = "";
            result.forEach(function(objeto) {
                resultado += "Nombre: " + objeto.marca + "\nCategoria: " + objeto.modelo + "\nAño: "+ objeto.anio + "\nPrecio: "+ objeto.precio + "\n\n";
            });
            alert(resultado);
        } else {
            alert("No se encontraron resultados");
        }
    }else if (option === "3"){
        let criterio = prompt("Ingresa el año");
        let result = autos.filter(function(objeto) {
            return objeto.anio == criterio;
        });
        if (result.length > 0) {
            let resultado = "";
            result.forEach(function(objeto) {
                resultado += "Nombre: " + objeto.marca + "\nCategoria: " + objeto.modelo + "\nAño: "+ objeto.anio + "\nPrecio: "+ objeto.precio + "\n\n";
            });
            alert(resultado);
        } else {
            alert("No se encontraron resultados");
        }
    }


}

function calculate() {
    // Obtener los valores de los campos de entrada
    let monto = document.getElementById("monto").value
    const interes1 = 0.59
    let anios = document.getElementById("anios").value

    let monto1 = parseInt(monto)
    let anios1 = parseInt(anios) 
    // Calcular el interés
    const interes = monto1 * interes1 * anios1
    console.log(`Los intereses son ${interes}`)

    // Calcular el pago mensual
    let pagoMes = (monto1 + interes) / anios1 / 12
    let pagoMes1 = pagoMes.toFixed()
    // Mostrar el resultado al usuario
    document.getElementById("pagoMes").value = pagoMes1
    console.log(`el monto de las cuotas por mes es de: ${pagoMes1}`)

}