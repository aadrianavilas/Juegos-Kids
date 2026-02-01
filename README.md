# Juegos Kids 

## Descripción
Sitio web educativo con juegos y ejercicios para primaria y secundaria. Contiene páginas HTML, estilos CSS y scripts JS organizados por secciones.

## Estructura principal
- [index.html](index.html) — Página principal.
- [index.js](index.js) — Script en la raíz (si aplica).
- [js/main.js](js/main.js) — Lógica principal del sitio.
- [assets/css/estilo-juegos.css](assets/css/estilo-juegos.css)
- [assets/css/estilo.css](assets/css/estilo.css)
- [assets/css/estilos-ejercicios.css](assets/css/estilos-ejercicios.css)
- [assets/css/style.css](assets/css/style.css)
- Carpeta de imágenes: [img/](img/)
- Secciones de contenido:
  - [pages_Primaria/](pages_Primaria/)
    - [pages_Primaria/mayores/lengua.html](pages_Primaria/mayores/lengua.html)
    - [pages_Primaria/mayores/matt.html](pages_Primaria/mayores/matt.html)
    - [pages_Primaria/menores/Lengua_Prim_menor.html](pages_Primaria/menores/Lengua_Prim_menor.html)
  - [pages_principal/](pages_principal/) — ayuda y contacto:
    - [pages_principal/ayuda.html](pages_principal/ayuda.html)
    - [pages_principal/contactos.html](pages_principal/contactos.html)

## Cómo ejecutar (desarrollo)
1. Abrir [index.html](index.html) en un navegador, o
2. Servir el proyecto localmente (recomendado) desde la carpeta del proyecto:
```sh
python -m http.server 8000
# o
npx http-server .
```
y abrir http://localhost:8000

## Cómo contribuir / editar
- Añadir nuevas páginas bajo las carpetas correspondientes en [pages_Primaria/](pages_Primaria/) o [pages_secundaria/](pages_secundaria/).
- Agregar estilos en [assets/css/](assets/css/) o importar nuevos archivos CSS.
- Editar la lógica en [js/main.js](js/main.js) o [index.js](index.js).

## Notas
- Mantén la estructura de carpetas para que los enlaces relativos funcionen correctamente.
- Optimiza las imágenes en [img/](img/) antes de subir.

## Licencia
Proprietary

## Autores
- Adrian Avila
- Angie Mendoza
- Angie Procel
