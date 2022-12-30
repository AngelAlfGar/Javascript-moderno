const producto = 'Monitor de 20 pulgadas';

// metodo para reemplazar texto dentro de una cadena
console.log(producto);
console.log(producto.replace('pulgadas','"'));

// metodo para cortar un fragmento de una cadena usando la posicion
console.log(producto.slice(0,7));
console.log(producto.slice(7));

// alternativa a slice
console.log(producto.substring(0,7));
console.log(producto.substring(2,1));

