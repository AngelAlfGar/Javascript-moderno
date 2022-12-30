const producto = 'Monitor de 20 pulgadas';

// metodo para repetir una cadena de texto
const texto = ' en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!!!`);

// metodo para poder dividir un string
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar musica, Escribir, Aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo javascript moderno #JSModernoConJuan";
console.log(tweet.split('#'));