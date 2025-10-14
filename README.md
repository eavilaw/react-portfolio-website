# React CV Portfolio

Una página web estática moderna y profesional para mostrar tu CV y habilidades, construida con React.js.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones suaves
- **Completamente Responsive**: Se adapta perfectamente a todos los dispositivos
- **Animaciones Interactivas**: Implementadas con Framer Motion para una experiencia fluida
- **Fácil Personalización**: Todos los datos están centralizados en archivos de configuración
- **Optimizado para Performance**: Carga rápida y optimizado para SEO
- **Formulario de Contacto**: Sistema de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **React.js** - Framework principal
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconos modernos
- **CSS3** - Estilos y responsive design
- **React Intersection Observer** - Animaciones on-scroll

## 📱 Secciones Incluidas

1. **Hero/Inicio** - Presentación principal con call-to-action
2. **Sobre Mí** - Descripción personal y estadísticas
3. **Habilidades** - Skills técnicas con barras de progreso animadas
4. **Experiencia** - Timeline de experiencia profesional
5. **Proyectos** - Galería de proyectos destacados
6. **Contacto** - Formulario de contacto y datos de contacto
7. **Footer** - Información adicional

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/react-cv-portfolio.git
cd react-cv-portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Personalización

### 1. Datos Personales
Edita el archivo `src/data/portfolioData.js` para personalizar:
- Información personal (nombre, título, descripción)
- Datos de contacto (email, teléfono, ubicación)
- Enlaces a redes sociales
- Habilidades y niveles
- Experiencia profesional
- Proyectos destacados

### 2. Estilos y Colores
Los estilos principales están en:
- `src/styles/index.css` - Estilos globales
- Cada componente tiene su propio archivo CSS

Para cambiar los colores principales, busca las variables CSS con los gradientes:
```css
background: linear-gradient(45deg, #667eea, #764ba2);
```

### 3. Imágenes
- Agrega tu foto de perfil en `public/profile.jpg`
- Agrega tu CV en `public/cv.pdf`
- Puedes agregar capturas de proyectos en `public/projects/`

## 📦 Build para Producción

Para crear la versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `build/` listos para deploy.

## 🚀 Deploy

Puedes desplegar fácilmente en:

### Netlify
1. Sube la carpeta `build/` a Netlify
2. O conecta tu repositorio de GitHub para deploy automático

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Agrega a package.json:
# "homepage": "https://tu-usuario.github.io/react-cv-portfolio",
# "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }
npm run deploy
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

Tu Nombre - tu.email@ejemplo.com

Link del Proyecto: [https://github.com/tu-usuario/react-cv-portfolio](https://github.com/tu-usuario/react-cv-portfolio)

---

⭐ ¡No olvides darle una estrella al proyecto si te fue útil!