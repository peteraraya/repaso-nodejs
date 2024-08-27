const express = require('express')
const hbs = require('hbs');
require('dotenv').config();



const app = express()
const port = process.env.PORT;



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware : servir contenido estático
app.use(express.static('public'))

// Esto ya no es necesario porque se está sirviendo contenido estático
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>')
// })  

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Pedro Araya Gálvez',
    title: 'Curso de Node.js'

  })
})


app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Pedro Araya Gálvez',
    title: 'Curso de Node.js'

  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Pedro Araya Gálvez',
    title: 'Curso de Node.js'

  })
})

app.get('*', (req, res) => {
  res.render('404', {
    name: 'Pedro Araya Gálvez',
    title: 'Curso de Node.js'

  })
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/**
 
 Uso de Handlebars para procesar plantillas HTML sencillas 
 servir contenido dinámico

1. Instalar Handlebars
npm install hbs

2. Configurar Handlebars en Express
app.set('view engine', 'hbs');

3. Crear una carpeta llamada views en la raíz del proyecto

4. Crear un archivo .hbs en la carpeta views

5. Crear una ruta que renderice el archivo .hbs

6. Pasar datos a la vista

7. Mostrar los datos en la vista

8. Crear un layout para reutilizar la estructura de la página

9. Crear un partial para reutilizar bloques de código HTML

10. Crear un archivo 404.hbs y una ruta que renderice el archivo 404.hbs
 

 
 *  */ 