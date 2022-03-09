const array = [true, 100, 'Sebastián', null, undefined, {nombre: 'Nicolás', apellido: 'gonzáles'}]

console.log(array) //muestra todos los objetos del array
console.log(array[5]) // muestra objeto número 5
console.log(array.length) // muestra cantidad de objetos del array
console.log(array[array.length - 1]) // muestra último elemento del array
console.log(array.indexOf('Nicolas')) // muestra si el objeto Nicolás se encuentra, como no, muestra en consola -1
console.log(array.indexOf('Sebastián')) //muestra si se encuentra el objeto Sebastián, como sí, muestra el número de orden de objeto que le corresponde

const alumnos = ['Nacho', 'Agus', 'Moni', 'Carlitos']
console.log(alumnos)

alumnos.push('Luismi', 'Flor') //agrega elementos al array
console.log(alumnos)

alumnos.pop() //elimina el último elemento del array
console.log(alumnos)

alumnos.splice(1,2) //elimina elementos específicados por posición y cantidad desde la posición especificada
console.log(alumnos)

alumnos.unshift('Nahuel', 'Nico') //agrega elementos al inicio del array
console.log(alumnos)

const alumnos11i = ['Ale', 'Sil', 'Ceci']

const alumnosJuntos = alumnos.concat(alumnos11i) //concatena dos arrays diferentes con sus objetos
console.log(alumnosJuntos)

console.log(alumnosJuntos.sort()) //ordena alfabéticamente los elementos del array

console.log(alumnosJuntos.reverse()) //ordena en reversa alfabéticamente los elementos de un array

console.log(alumnosJuntos.includes('Maciel')) //incluye un nuevo elemento al array
if (alumnosJuntos.includes('Maciel')) {
  console.log('Maciel sí se encuentra en el array')
} else {
  console.log('Maciel no se encuentra en el array')
}


const gente = ['Ignacio', 'Agustín', 'Mónica', 'Carlitos']
console.log(alumnos.length)

for (let i = 0; i < gente.length; i++) {
  console.log(alumnos[i]);
} //CICLO FOR: recorre un array y muestra enlistado los objetos del mismo


const gente2 = ['Ignacio', 'Agustín', 'Mónica', 'Carlitos']
let numeroUno = 1

while (numeroUno < 1) {
  console.log('Número 1 es menor a 1')
  numeroUno = numeroUno + 1
} // CICLO WHILE: ejecuta una acción mientras se cumpla X condición
do {
  console.log('hola mundo')
} while (numeroUno < 1);


const gente3 = ['Ignacio', 'Agustín', 'Mónica', 'Carlitos']

gente3.splice(0,0,'Juan')// inserta un elemento al principio del array
console.log(gente3)