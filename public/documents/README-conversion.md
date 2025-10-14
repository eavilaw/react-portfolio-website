# Convertir CV HTML a PDF

## Opción 1: Usando el navegador (Recomendado)

1. Abrir el archivo `esteban-avila-cv.html` en Google Chrome o Firefox
2. Presionar `Ctrl + P` (Windows) o `Cmd + P` (Mac)
3. Seleccionar "Guardar como PDF" en destino
4. Configurar:
   - Tamaño: A4
   - Márgenes: Mínimos
   - Opciones: Desmarcar "Encabezados y pies de página"
5. Guardar como `estebanavilaCV.pdf`

## Opción 2: Usando herramientas online

### wkhtmltopdf (Recomendado para mejor calidad)
```bash
wkhtmltopdf --page-size A4 --margin-top 0.5in --margin-right 0.5in --margin-bottom 0.5in --margin-left 0.5in esteban-avila-cv.html estebanavilaCV.pdf
```

### Puppeteer (Node.js)
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///path/to/esteban-avila-cv.html');
  await page.pdf({ 
    path: 'estebanavilaCV.pdf', 
    format: 'A4',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  });
  await browser.close();
})();
```

## Características del CV para IA

✅ **Estructura semántica clara**
✅ **Texto plano sin imágenes de texto**
✅ **Jerarquía HTML apropiada (h1, h2, h3)**
✅ **Contenido bien organizado en secciones**
✅ **Keywords técnicos prominentes**
✅ **Información de contacto clara**
✅ **Fechas en formato estándar**
✅ **Tecnologías y skills explícitas**
✅ **Métricas cuantificables (17 años, 20GB, etc.)**
✅ **Formato responsive para diferentes pantallas**

## Ubicación final

Una vez convertido a PDF, coloca el archivo como:
`public/documents/estebanavilaCV.pdf`

Esto permitirá que el botón de descarga funcione correctamente.