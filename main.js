
let nombreTutor = prompt("Ingrese su nombre:");
nombreTutor = nombreTutor.toLowerCase();
if (nombreTutor === "joaquin") {
    alert("¡Hola tutor!");
    let respuesta = prompt("¿Quieres corregir mi entrega?");
    respuesta = respuesta.toLowerCase();
    if (respuesta === "si") {
        alert("¡Aquí está, adelante!");
    } else if (respuesta === "no") {
        alert(":(");
    } else {
        alert("Por favor, responde con Si o No.");
    }
} else {
    alert("Lo siento, tú no eres mi tutor.");
}
