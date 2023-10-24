const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware para procesar solicitudes POST
server.use(jsonServer.bodyParser);

// Rutas de JSON Server
server.use('/contact_data', router);

// Inicia el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('JSON Server is running');
});

server.post('/contact_data', (req, res) => {
    const data = req.body;

    // Aquí deberías guardar los datos en la base de datos (en db.json)
    const db = router.db; // Obtén una referencia a la base de datos
    db.get('contact_data').push(data).write();

    // Envía una respuesta de éxito
    res.status(200).json({ message: 'Datos del formulario guardados con éxito' });
});
