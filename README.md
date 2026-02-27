# innoHUB UNIR - Repositorio Web de Formatos Audiovisuales

Sitio estático para convertir la investigación de innoHUB en una biblia operativa de formatos de divulgación científica.

## Contenido

- Visión del proyecto (objetivos transferibles de innoHUB).
- Marco de decisión (pilares, taxonomía y mapa rápido objetivo → formato).
- Catálogo filtrable de formatos con ficha completa.
- Matriz comparativa coste / tiempo / interactividad / escalabilidad.
- Bloque de gobernanza y plantilla estándar para nuevas fichas.

## Estructura

| Archivo       | Descripción                                      |
|---------------|--------------------------------------------------|
| `index.html`  | Layout y secciones                               |
| `styles.css`  | Diseño visual y responsive                       |
| `data.js`     | Base de datos inicial (formatos y metadatos)     |
| `app.js`      | Lógica de filtros, render de tarjetas y matriz   |
| `404.html`    | Página de error para GitHub Pages                |

## Uso local

1. Abre `index.html` en el navegador.
2. Usa búsqueda y filtros en el bloque «Catálogo de formatos audiovisuales».
3. Haz clic en una tarjeta para ver su ficha detallada.

## Publicar en GitHub Pages

El proyecto está preparado para publicarse con **GitHub Actions**.

### Pasos

1. **Sube el repositorio a GitHub** (si aún no lo has hecho).

2. **Activa GitHub Pages desde Actions**
   - Ve a **Settings** → **Pages** del repositorio.
   - En **Build and deployment** → **Source** elige **GitHub Actions**.

3. **Despliegue**
   - Cada push a la rama `main` ejecuta el workflow `.github/workflows/pages.yml` y publica el sitio.
   - También puedes lanzarlo a mano en **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

4. **URL del sitio**
   - Si el repo se llama `innohub_biblia_web`:  
     `https://<usuario-o-org>.github.io/innohub_biblia_web/`
   - Si usas un repositorio llamado `<usuario>.github.io`:  
     `https://<usuario>.github.io/`

### Archivos añadidos para Pages

- **`.nojekyll`**: evita que GitHub trate el sitio con Jekyll (archivos y carpetas con `_` se sirven con normalidad).
- **`.github/workflows/pages.yml`**: workflow que publica el contenido estático en GitHub Pages.
- **`404.html`**: página de error personalizada; el enlace «Ir al inicio» se ajusta solo a la raíz del sitio (repo o usuario).

## Fuente de datos inicial

- `Proyecto innoHUB UNIR.docx` (objetivos y enfoque de transferencia).
- `Biblia formatos audiovisuales.pdf` (catálogo y evidencias).

Esta primera versión normaliza texto extraído del PDF y requiere validación editorial periódica para ampliar y corregir fichas.
