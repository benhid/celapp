# WAC<sup>3</sup>

## Manual de usuario

La página principal de nuestra web (`/index.html`) contiene información básica de uso e
información sobre los servicios que ofrecemos.

En ella, contamos con dos botones que nos redireccionan a los formularios de celiaquía.

Además, desde contamos con una página de inicio de sesión (`/login.html`) que permitirá
al administrador acceder al panel de administración (`/adminpanel.html`). De cualquier otra forma,
el panel mostrará un mensaje de error (*404*).

   Nota: Las credenciales de acceso se encuentran en el código fuente de la aplicación
   (`src/server.js` > `app.get('/login')`).

Del mismo modo, el usuario podrá cerrar sesión (`/logout.html`).

## Manual de desarrollo

Para iniciar el servidor, primero hay que instalar las dependencias
de la aplicación con `npm`:

```shell
$ npm install
```

Tras ello, podemos desplegarla usando:

```shell
$ npm start
```

El servidor se iniciará en `http://localhost:8090/`.

### Configuración
Podemos cambiar el puerto de conexión desde `src/server.js`:

```javascript
// Start server
let server = app.listen(8090, function () { });
```

Las respuestas de los formularios se guardarán en una base de datos MongoDB.
En `src/server.js` debemos especificar la dirección de conexión a nuestra base de datos:

```javascript
let db = mongoose.connect('mongodb://<ip>:<puerto>/', function(err, response){ });
```

### Plantillas

Nuestra aplicación usa un sistema de plantillas (EJS) para renderizar la interfaz de usuario.
La base se encuentra en `/views/base_layout.ejs`. En ella, podemos agregar
los componentes de React contenidos en `src/components/*.js`.

En esa carpeta podemos encontrar un fichero por cada página que podrá ser visualizada en nuestra
web (por ejemplo, `Index.js` será `/index.html`) y una carpeta por cada página con sus
componentes de React individuales.

Para agregar una página, bastará con añadir esos ficheros en `src/componentes/` y editar el archivo
`src/server.js` y añadir las siguientes líneas de código:

```javascript
import Pagina from './components/Pagina';

app.get('/<ruta>', function (req, res) {
  res.render('base_layout.ejs', {
    contenido: renderToString(<Pagina/>)
   })
});
```

### Producción

Esta aplicación puede ser fácilmente desplegada en  [Heroku](https://www.heroku.com/).

## Equipo de desarrollo

* Antonio Benítez <antonio.b@uma.es>
* Daniel Torres <dantorram@uma.es>
* César Lobato <ceslobfer95@uma.es>
* Maria José Muñoz <marmungon@uma.es>
* Miguel Ángel Gallardo <miggalrui@uma.es>
