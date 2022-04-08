const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();


// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// Configurar midlewares para archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// Especificar motor de plantillas
app.set('view engine', 'pug');

// Rutas
app.use(require('./routes/routes'))


// Asignacion del puerto y levantamiento del servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});