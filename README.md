# Amitie Estudio

Este proyecto esta destinado a la creaccion del sitio web de la empresa Amitie Estudio.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira Deployment para conocer como desplegar el proyecto.

### Pre-requisitos 📋

- Descargar e instalar Node.js: https://nodejs.org/en/

- Instale tailwindcss a través de npm y cree su archivo tailwind.config.js

```sh
npm install -D tailwindcss
npx tailwindcss init
```

- Agregue las rutas a todos sus archivos de plantilla en su archivo tailwind.config.js:

```sh
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}
```

- Agregue las directivas @tailwind para cada una de las capas de Tailwind a su archivo CSS principal:

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Agregue su archivo CSS compilado a <head> y comience a usar las clases de utilidad de Tailwind para diseñar su contenido:

```html
<link href="/dist/output.css" rel="stylesheet" />
```

### Despliegue 📦

- Crear una carpeta "build" y copiar dentro los archivos que se encuentran en la carpeta src.
- Obtener el archivo minificado de Tailwind ejecutando el comando:

```sh
  npx tailwindcss -o build.css --minify
```

- Pegar el archivo "build.css" obtenido en el paso anterior, dentro de la carpeta build y remplazar la ruta en el archivo index.html:

```html
<link href="../dist/output.css" rel="stylesheet" />
```

Cambiar por:

```html
<link href="build.css" rel="stylesheet" />
```

## Construido con 🛠️

Taildwind - https://tailwindcss.com/
Flowbite - https://flowbite.com/

> Muchas gracias 🎁
