function gracias(nombre){
    alert("Gracias por utilizar nuestra aplicacion, buenos vientos " + nombre + "!!!");
    console.log("Gracias por ver mi codigo programador ;)");
}
const nombre = prompt("Ingrese su nombre")
let nudos = prompt("Ingresa en numeros la cantidad de nudos que sopla en tu spot.");

if ((nudos === "") || (nudos === " ")){
    alert("Actualize la pagina e ingrese en numeros la intensidad del viento.");
}
else if (nudos <= 10){
    alert("Hay muy poco viento, espera a otro dia que sople, no seas manija.");
}
else if ((nudos >= 11) && (nudos <= 19)){
    alert("Usa el kite 12 de metros.");
}
else if ((nudos >= 20) && (nudos <= 23)){
    alert("Usa el kite de 10 metros.");
}
else if ((nudos >= 24) && (nudos <= 28)){
    alert("Usa el kite de 9 metros.");
}
else if ((nudos >= 29) && (nudos <= 35)){
    alert("Usa el kite de 7 metros.");
}
else {
    alert("Peligro!!! Hay mucho mucho viento.");
}

gracias(nombre);
