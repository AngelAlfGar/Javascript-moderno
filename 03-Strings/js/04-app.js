const producto = '                    Monitor de 20 pulgadas  ';

console.log(producto);
console.log(producto.length);


// metodo para eliminar del inicio los espacios en blanco
console.log( producto.trimStart() );

// metodo para eliminar del final los espacios en blanco
console.log(producto.trimEnd());

// metodos de forma encadenada (uno despues del otro)
console.log(producto.trimStart().trimEnd());

/* metodo para eliminar espacioes en blanco de ambas direcciones
   (inicio y al final) */
   
console.log(producto.trim());

