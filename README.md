# Festival de Música 🎵

Un sitio web moderno y responsivo dedicado a un festival de música, desarrollado con **HTML5**, **SASS (SCSS)** y automatizado mediante **Gulp**. El proyecto incluye galerías de imágenes optimizadas de forma dinámica y secciones para la venta de boletos, calendario de bandas y videos del evento.

---

## 🛠️ Tecnologías y Herramientas

*   **HTML5** - Estructura semántica del sitio web.
*   **SASS (SCSS)** - Preprocesador para estilos modulares y avanzados.
*   **Node.js** - Entorno de ejecución para la gestión de dependencias.
*   **Gulp.js** - Automatizador de tareas (compilación de SASS, minificación y optimización de recursos).

---

## 📁 Estructura del Proyecto

El repositorio sigue un orden lógico para separar el código fuente de desarrollo y los archivos finales de producción:

```text
FESTIVAL-MUSICA/
├── build/                 # Archivos optimizados generados para producción
│   └── css/               # Hojas de estilo CSS compiladas
├── scss/                  # Archivos fuente de SASS (Módulos y estilos globales)
├── src/
│   └── img/               # Imágenes originales de la galería y diseño
├── video/                 # Recursos multimedia de fondo o promocionales
├── gulpfile.js            # Configuración de tareas automatizadas (Gulp)
├── index.html             # Página principal del sitio web
├── package.json           # Configuración del proyecto y dependencias de Node
└── package-lock.json      # Registro exacto del árbol de dependencias
```

---

## 🚀 Instalación y Configuración

Sigue estos pasos para clonar el repositorio e instalar el entorno de desarrollo local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Natha91-z/FESTIVAL-MUSICA.git
cd FESTIVAL-MUSICA
```

### 2. Instalar dependencias
Asegúrate de tener instalado [Node.js](https://nodejs.org). Luego, ejecuta el siguiente comando en tu terminal para instalar los módulos necesarios descritos en el `package.json`:
```bash
npm install
```

### 3. Ejecutar el automatizador de tareas (Gulp)
Para compilar los archivos SASS de la carpeta `scss/` hacia `build/css/` de forma automática cada vez que realices un cambio, inicia la tarea de desarrollo:
```bash
npm run dev
# o directamente si tienes gulp-cli global:
gulp
```

---

## 💻 Características del Código

*   **SASS Arquitectura:** El diseño utiliza hojas de estilo modulares divididas para facilitar el mantenimiento a gran escala.
*   **Optimización Dinámica:** Las tareas automatizadas integradas en el flujo de trabajo procesan recursos multimedia para mejorar los tiempos de carga en el navegador.
*   **Diseño Adaptable (Responsive Design):** Diseñado bajo prácticas mobile-first para garantizar una excelente visualización en teléfonos móviles, tabletas y computadoras de escritorio.

---

## ✒️ Autor

*   **Natha91-z** - *Desarrollo Inicial* - [@Natha91-z](https://github.com/Natha91-z)
