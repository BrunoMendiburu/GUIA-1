//ej 1
const alumnos =[ {
    nombre: "geronimo",
    apellido: "benavidez",
    dni: 45083629,
    anio: 4,
    curso: "A",
    nota: 9,
},
{
    nombre: "ignacio",
    apellido: "de las heras",
    dni: 46205021,
    anio: 3,
    curso: "B",
    nota: 2,
},
{
    nombre: "luka",
    apellido: "curry",
    dni: 47266112,
    anio: 4,
    curso: "A",
    nota: 10,
},
{
    nombre: "federico",
    apellido: "gonzalez",
    dni: 46028554,
    anio: 3,
    curso: "B",
    nota: 1,
},
{
    nombre: "walter",
    apellido: "closs",
    dni: 47192572,
    anio: 4,
    curso: "B",
    nota: 5,
},
{
    nombre: "pablo",
    apellido: "intebizi",
    dni: 45036111,
    anio: 5,
    curso: "A",
    nota: 8,
},
{
    nombre: "gloria",
    apellido: "xeneize",
    dni: 45090923,
    anio: 4,
    curso: "B",
    nota: 6,
},
{
    nombre: "federico",
    apellido: "barro",
    dni: 47999323,
    anio: 5,
    curso: "A",
    nota: 7,
},]

//ej 2 ok
const capitalizar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



//ej 3 ok 
const mostrarAlumno = (alumno) => {
    console.log("DNI: " + alumno.dni.slice(0, 2) + "." + alumno.dni.slice(2,5) + "." + alumno.dni.slice(5,8) + "\n"
    + "Nombre y apellido: " + capitalizar(alumno.nombre) + " " + capitalizar(alumno.apellido)  + "\n"
    + "Curso: " + alumno.anio + "°" + alumno.curso  + "\n" + "Nota: " + alumno.nota)
}


//ej 4
/* const capitizarAlumnos = () => {
    alumnos.map(alumno => {
        console.log( "Nombre: " + capitalizar(alumno.nombre) + ", " + "Apellido: " + capitalizar(alumno.apellido))
        return alumno
    })
}        */

//ej 5
const mostrarAlumnos = () => {
    alumnos.map((alumno) => {
        mostrarAlumnos(alumno.nombre + alumno.apellido);
    } )
}

mostrarAlumnos()

/* 
//ej 6 

const mostrarAprobados = alumnos.filter((alumno) => alumno.nota >= 6);
mostrarAprobados.map((alumno) => {
    console.log("Nombre y apellido: " + capitalizar(alumno.nombre) + " " + capitalizar(alumno.apellido) + " - DNI: " + alumno.dni + " - Curso: " + alumno.anio + "°" + alumno.curso + " - Nota: " + alumno.nota);
} )

//ej 7

const mostrarAnio4 = alumnos.filter((alumno) => alumno.anio === 4);
mostrarAnio4.map((alumno) => {
    console.log("Nombre y apellido: " + capitalizar(alumno.nombre) + " " + capitalizar(alumno.apellido) + " - DNI: " + alumno.dni + " - Curso: " + alumno.anio + "°" + alumno.curso + " - Nota: " + alumno.nota);
} )

//ej 7
const mostrarCursoB = alumnos.filter((alumno) => alumno.curso === "B");
mostrarCursoB.map((alumno) => {
    console.log("Nombre y apellido: " + capitalizar(alumno.nombre) + " " + capitalizar(alumno.apellido) + " - DNI: " + alumno.dni + " - Curso: " + alumno.anio + "°" + alumno.curso + " - Nota: " + alumno.nota);
} )
 */