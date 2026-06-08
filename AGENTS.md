# AGENTS.md — Instrucciones para asistentes de IA

Este archivo guía a asistentes y agentes de inteligencia artificial sobre cómo trabajar con el código de este proyecto.

## Stack del proyecto

- **HTML5** semántico
- **CSS3** con Custom Properties (variables CSS) para theming
- **JavaScript vanilla** (sin frameworks ni librerías externas)
- **Git + GitHub** para control de versiones
- **GitHub Pages** para despliegue

## Convenciones de código

### Generales

- **No añadir comentarios en el código** a menos que sea estrictamente necesario para claridad
- Seguir el patrón y estilo existente en cada archivo
- Usar indentación de 2 espacios
- Mantener las líneas dentro de un ancho legible (80-100 caracteres aprox.)

### HTML

- Usar etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Incluir atributos `alt` descriptivos en todas las imágenes
- Usar `aria-label` en botones con solo icono para accesibilidad
- Cerrar todas las etiquetas correctamente
- Mantener las clases en kebab-case

### CSS

- Usar **CSS Custom Properties** para theming (variables en `:root` y `[data-theme="dark"]`)
- Las propiedades se heredan automáticamente de las variables globales
- Preferir flexbox y grid sobre floats
- Las media queries van al final del archivo, ordenadas por tamaño descendente
- Usar `clamp()` para tamaños de fuente responsivos
- Las animaciones y transiciones deben ser sutiles y respetar el tema actual
- No usar frameworks CSS externos
- Agrupar propiedades relacionadas y dejar una línea en blanco entre grupos

### JavaScript

- Usar **JavaScript vanilla** exclusivamente (sin jQuery, sin frameworks)
- Manejo de errores con optional chaining (`?.`) para elementos del DOM
- Usar `addEventListener` en lugar de atributos `onclick` en HTML
- Preferir `const` sobre `let`, nunca usar `var`
- Usar `querySelector` y `querySelectorAll` para seleccionar elementos del DOM
- Las funciones de interacción deben ser modulares y reutilizables
- Las animaciones deben usar Intersection Observer para scroll reveal
- El código debe funcionar sin errores aunque una funcionalidad específica no tenga soporte (graceful degradation)

## Estructura del proyecto

```
├── index.html              # Página principal
├── styles/
│   └── style.css           # Estilos completos
├── js/
│   └── script.js           # Toda la interactividad
├── images/                 # Imágenes del portafolio
├── assets/
│   └── icono.svg           # Favicon personalizado
├── .github/
│   └── workflows/          # (opcional) Para CI/CD
├── .gitignore
├── AGENTS.md               # Este archivo
└── README.md
```

## Theming (modo oscuro/claro)

- El tema se controla con el atributo `data-theme="dark" | "light"` en `<html>`
- Las variables CSS cambian según el `data-theme` actual
- El JavaScript lee/escribe `localStorage.getItem('theme')` para persistencia
- El botón toggle usa iconos `fa-moon` (dark) y `fa-sun` (light)
- **Siempre** que se agregue un nuevo color, debe definirse tanto en `:root` como en `[data-theme="dark"]`
- Las transiciones entre temas deben usar `transition: background 0.4s ease, color 0.4s ease`

## Patrones de interacción

### Scroll reveal
Los elementos con animación al scroll se manejan desde `js/script.js` usando `IntersectionObserver`. El patrón es:
1. Agregar clase `skill-hidden` (opacity: 0, translateY)
2. Cuando el observer detecta intersección, usar `setTimeout` con el `data-delay` de cada elemento
3. Remover `skill-hidden` y agregar `skill-show` (opacity: 1, translateY: 0)
4. Si no hay soporte para IntersectionObserver, agregar `skill-show` directamente

### Menú móvil
- El botón hamburguesa alterna la clase `active` en el mismo y en `#navMenu`
- Al hacer clic en un link del menú, se cierra automáticamente
- En desktop (>768px), el menú es horizontal en la navbar
- En móvil, el menú es un overlay fullscreen con backdrop-filter

### Navegación activa
- `updateActiveLink()` recorre las secciones y compara `offsetTop` con `window.scrollY`
- La clase `active` se agrega al `nav-link` cuyo `href` coincida con el `id` de la sección visible

## Personalización para el usuario

- **Nombre**: Johan Steven Cuero Rodríguez
- **Rol**: Desarrollador Full Stack
- **Email**: johanstevencr0118@gmail.com
- **GitHub**: Jostcuro
- **Instagram**: @johan_stevencr
- **Paleta**: Monocromática + acento índigo (#4F46E5)
- **Idioma**: Español
- **Tema por defecto**: Dark

## GitHub Pages

- El sitio se despliega desde la rama `main`, carpeta raíz
- No usar preprocesadores ni bundlers
- Las rutas de assets deben ser relativas al proyecto

## Reglas para IA

1. **No añadir dependencias externas** (npm, CDNs no listadas, etc.)
2. **No convertir a framework** (React, Vue, etc.)
3. **Mantener el estilo existente** de indentación y formato
4. **Preservar la estructura de carpetas** actual
5. **No borrar archivos** ni imágenes sin consultar
6. **Documentar en AGENTS.md** cualquier cambio estructural importante
7. **Verificar compatibilidad**: el código debe funcionar en Chrome, Firefox, Edge y Safari
