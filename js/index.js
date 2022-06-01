//Lista de pendientes//
let tareas = prompt("Ingrese sus tareas pendientes (hasta 5) o ESC para ver el resultado");
let pendientes = '';
let i = 0;
while ((tareas != 'ESC') && (i != 5)) {
    i++;
    if (tareas != 'ESC'){
        pendientes += i + ")" + " " + tareas + "\n";
    }
    if (i != 5) {
        tareas = prompt("Ingrese sus tareas pendientes (hasta 5) o ESC para ver el resultado");
    }
}
alert(pendientes);