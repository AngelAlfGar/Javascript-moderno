const producto = 'Monitor de 20 pulgadas ';
const precio = '30 USD';

// metodo y formas para concatenar strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento...'));
console.log(producto + 'con un precio de ' + precio);
console.log(producto, 'con un precio de ', precio);


// template strings o template literals
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);