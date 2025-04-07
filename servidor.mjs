
import { createServer } from 'node:http';
import { suma, resta, multiplicacion, division } from './calculos.js';

const server = createServer((req, res) => {
 
  const resultSuma = suma(5, 3);
  const resultResta = resta(8, 6);
  const resultMultiplicacion = multiplicacion(30, 5);
  const resultDivision = division(3, 11);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>Resultados de los Cálculos</title>
      </head>
      <body>
        <h1>Resultados de las Operaciones Matemáticas</h1>
        <p><strong>Suma:</strong> ${resultSuma}</p>
        <p><strong>Resta:</strong> ${resultResta}</p>
        <p><strong>Multiplicación:</strong> ${resultMultiplicacion}</p>
        <p><strong>División:</strong> ${resultDivision}</p>
      </body>
    </html>
  `);
});

// Inicia el servidor en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});
