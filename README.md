# Portafolio Personal — Johan Steven Cuero Rodríguez

Sitio web estático de portafolio personal creado con HTML5, CSS3 y JavaScript vanilla. Diseñado para mostrar perfil profesional, habilidades técnicas, proyectos y datos de contacto, con soporte de modo oscuro/claro y diseño responsive.

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del sitio |
| CSS3 | Diseño, animaciones, responsividad, variables CSS para theming |
| JavaScript vanilla | Menú móvil, dark mode toggle, scroll reveal, smooth scroll |
| Google Fonts | Tipografía Inter + JetBrains Mono |
| Font Awesome | Iconos |
| Git + GitHub | Control de versiones y repositorio remoto |
| GitHub Pages | Hosting y despliegue |

## Características

- **Modo oscuro/claro** con persistencia en `localStorage`
- **Navbar fija** con detección de sección activa por scroll
- **Menú responsive** con animación tipo overlay en móviles
- **Hero** con foto circular, glow animado y gradientes
- **Sección de Skills** con tarjetas categorizadas y animación scroll reveal (Intersection Observer)
- **Sección de Contacto** con enlaces a email, GitHub e Instagram
- **Footer** con redes sociales y copyright
- **Totalmente responsive** en todos los tamaños de pantalla
- **Favicon** personalizado en SVG

## Estructura del proyecto

```
├── index.html              # Página principal
├── styles/
│   └── style.css           # Estilos completos con theming
├── js/
│   └── script.js           # Interactividad y animaciones
├── images/                 # Imágenes del portafolio
│   ├── placeholder.svg     # Placeholder del avatar (reemplazar con foto real)
│   └── foto-*.jpeg         # Fotos personales
├── assets/
│   └── icono.svg           # Favicon personalizado
├── .github/
│   └── workflows/          # (opcional) Para CI/CD futuro
├── .gitignore
├── AGENTS.md               # Instrucciones para asistentes IA
└── README.md
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Git (solo para desarrollo)
- Editor de código (VS Code recomendado)

## Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Jostcuro/Portafolio_Personal_JohanSteven.git

# 2. Entrar al directorio
cd Portafolio_Personal_JohanSteven

# 3. Abrir en el navegador
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

No requiere servidor ni dependencias. Es HTML estático puro.

## Configuración

### Foto personal

1. Coloca tu foto cuadrada en `images/hero-photo.jpg`
2. Dimensiones recomendadas: **400 × 400 píxeles**
3. Actualiza el `src` en `index.html` (líneas ~58 y ~90):
   - Cambia `images/placeholder.svg` por `images/hero-photo.jpg`

### Colores y estilos

Las variables de color están definidas en `styles/style.css` en `:root` (modo claro) y `[data-theme="dark"]` (modo oscuro). Para cambiar el color acento (índigo):

```css
:root {
  --accent: #4F46E5;        /* Indigo 600 */
  --accent-light: #6366F1;  /* Indigo 500 */
  --accent-dark: #4338CA;   /* Indigo 700 */
}
```

### Datos personales

Edita `index.html` para modificar:

- Nombre y título profesional
- Biografía en la sección "Sobre mí"
- Email, GitHub e Instagram en Contacto
- Skills y tecnologías

## Despliegue en GitHub Pages

```bash
# El sitio ya está configurado para GitHub Pages

# 1. Asegúrate de tener los cambios commiteados
git add .
git commit -m "mensaje"

# 2. Sube a GitHub
git push

# 3. En GitHub, ve a Settings > Pages
# 4. Selecciona branch: main, carpeta: / (root)
# 5. El sitio queda disponible en:
#    https://jostcuro.github.io/Portafolio_Personal_JohanSteven
```

## Comandos git útiles

| Comando | Descripción |
|---|---|
| `git status` | Ver estado actual de los archivos |
| `git add .` | Preparar todos los cambios para commit |
| `git commit -m "mensaje"` | Crear commit con mensaje descriptivo |
| `git push` | Subir cambios a GitHub |
| `git pull` | Traer cambios desde GitHub |
| `git log --oneline` | Historial de commits resumido |

## Licencia

© 2026 Johan Steven Cuero Rodríguez. Todos los derechos reservados.
