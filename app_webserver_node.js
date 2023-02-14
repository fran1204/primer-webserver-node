const http = require('http');

http.createServer((req, res) => {

    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' }); //La web descarga un archivo
    /*const persona = {
        id: 1,
        nombre: 'Fran'
    };*/


    //res.write('Hola mundo');
//    res.write(JSON.stringify(persona)); //Write muestra un string
    res.write('1, Fran\n');
    res.write('2, Fati\n');
    res.end();

})
    .listen(8080);

console.log('Escuchando el puerto', 8080);