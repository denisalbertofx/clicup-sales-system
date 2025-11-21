# Especificaciones de Diseño y Componentes CSS Modernos

## 1. Introducción

Este documento define la identidad visual y las especificaciones de diseño para la construcción de las páginas del embudo de ClicUp en Next.js. El objetivo es crear una interfaz moderna, limpia y profesional que genere confianza y motive la conversión. Las especificaciones se presentan con un enfoque en **Tailwind CSS**, ideal para un desarrollo rápido y consistente en Next.js.

## 2. Sistema de Diseño Global (Design System)

### 2.1. Paleta de Colores

La paleta está diseñada para ser profesional, energética y confiable.

| Rol | Color | Hex | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Primario (Azul ClicUp)** | Azul oscuro | `#0D1B3E` | `bg-blue-950` |
| **Secundario (Verde Acción)** | Verde brillante | `#3DFFB5` | `bg-green-400` |
| **Acento (Gradiente)** | Azul a Verde | `linear-gradient(...)` | `bg-gradient-to-r from-cyan-500 to-green-400` |
| **Fondo Principal** | Gris muy oscuro | `#0A122A` | `bg-gray-950` |
| **Fondo Secundario** | Gris oscuro | `#1A243F` | `bg-gray-800` |
| **Texto Principal** | Blanco | `#FFFFFF` | `text-white` |
| **Texto Secundario** | Gris claro | `#A0AEC0` | `text-gray-400` |
| **Éxito** | Verde | `#2ECC71` | `bg-green-500` |
| **Error** | Rojo | `#E74C3C` | `bg-red-500` |

### 2.2. Tipografía

Se utilizará una combinación de fuentes sans-serif para máxima legibilidad en pantallas.

- **Titulares (Headings):** `Inter` (o una fuente similar como `Poppins`), en negrita (700) o extra-negrita (800).
- **Cuerpo de Texto (Body):** `Inter` (o `Roboto`), en peso normal (400) o medio (500).

**Configuración en Tailwind (`tailwind.config.js`):**
```javascript
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
}
```

### 2.3. Espaciado y Sombras

- **Espaciado:** Se utilizará la escala de espaciado por defecto de Tailwind (múltiplos de 4px) para mantener la consistencia.
- **Bordes:** Radios de borde redondeados para un look suave y moderno (`rounded-lg`, `rounded-xl`).
- **Sombras:** Sombras sutiles para dar profundidad a tarjetas y botones (`shadow-lg`, `shadow-xl`). Se puede añadir un ligero brillo de color para un efecto más moderno.

---

## 3. Especificaciones por Página

A continuación, se detallan los componentes y estilos para cada página del embudo.

### PÁGINA 1: Landing de Lead Magnet

**Layout:** Centrado, una sola columna, con un ancho máximo de `max-w-4xl`.

- **Componente: Hero Section**
  - **Fondo:** `bg-gray-950`.
  - **Titular Principal:** `text-5xl font-extrabold text-white tracking-tight`. Parte del titular puede usar un gradiente: `<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">...</span>`.
  - **Subtitular:** `text-xl text-gray-400 mt-4`.

- **Componente: Formulario de Captura**
  - **Contenedor:** `bg-gray-800 p-8 rounded-xl border border-gray-700 mt-8`.
  - **Inputs:** Campos de texto con fondo oscuro, sin borde visible hasta que están en foco. `bg-gray-900 rounded-md p-3 text-white focus:ring-2 focus:ring-green-400`.
  - **Botón CTA (Call to Action):**
    - **Estilo:** Grande, con gradiente y una sutil animación al pasar el cursor.
    - **Clases Tailwind:** `w-full mt-6 py-4 px-8 rounded-lg text-lg font-bold text-blue-950 bg-gradient-to-r from-cyan-400 to-green-400 hover:scale-105 transition-transform duration-200`.

- **Componente: Sección de Puntos de Dolor**
  - **Layout:** Tres columnas con íconos.
  - **Íconos:** Usar íconos de alta calidad (ej: Heroicons, Lucide). El ícono debe estar dentro de un círculo con gradiente. `bg-gradient-to-r from-cyan-500 to-green-400 p-3 rounded-full`.
  - **Texto:** `text-lg font-semibold text-white mt-4`.

### PÁGINA 2: Thank-You Page + Puente

**Layout:** Muy simple y enfocado. Ancho máximo `max-w-2xl`.

- **Componente: Caja de Confirmación**
  - **Contenedor:** `bg-gray-800 p-8 rounded-xl text-center`.
  - **Ícono de Check:** Un ícono de check grande y verde (`text-green-400 w-16 h-16 mx-auto`).
  - **Titular:** `text-3xl font-bold text-white mt-4`.
  - **Subtitular:** `text-lg text-gray-400 mt-2`.

- **Componente: Video Player**
  - **Contenedor:** `mt-8 aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700`.
  - **Estilo:** El video debe ocupar todo el ancho del contenedor.

- **Componente: Botón de Transición**
  - **Estilo:** Debe destacar y tener una animación sutil para atraer la atención.
  - **Clases Tailwind:** `mt-8 py-4 px-8 rounded-lg text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 animate-pulse` (la animación de pulso se puede activar y desactivar para llamar la atención).

### PÁGINA 3: Página de Ventas del Tripwire (Starter)

**Layout:** Página de ventas larga, con secciones bien definidas.

- **Componente: Apilado de Valor (Value Stack)**
  - **Contenedor por item:** `flex items-start space-x-4 p-4 my-2 bg-gray-800 rounded-lg border border-gray-700`.
  - **Ícono de Check:** `text-green-400 w-6 h-6 flex-shrink-0`.
  - **Texto del Item:** `text-lg text-white`.
  - **Valor Percibido:** `ml-auto text-gray-500 line-through`.

- **Componente: Caja de Oferta**
  - **Contenedor:** `bg-gray-900 p-8 rounded-xl border-2 border-green-400 shadow-2xl shadow-green-500/20`.
  - **Texto de Valor Total:** `text-2xl text-gray-500 line-through`.
  - **Texto de Precio Final:** `text-7xl font-extrabold text-white my-4`.
  - **Botón CTA:** Igual que el de la landing page, pero más grande. `text-2xl py-5`.

- **Componente: Caja de Garantía**
  - **Contenedor:** `flex items-center space-x-4 mt-8 bg-blue-950 p-6 rounded-lg border border-cyan-500`.
  - **Ícono de Escudo:** `text-cyan-400 w-12 h-12`.
  - **Texto de Garantía:** `text-lg text-gray-300`.

- **Componente: Order Bump Checkbox**
  - **Contenedor:** `mt-6 p-4 bg-gray-800 border-2 border-dashed border-yellow-400 rounded-lg`.
  - **Checkbox:** `form-checkbox h-5 w-5 text-green-400 bg-gray-700 rounded`.
  - **Titular del Bump:** `font-bold text-yellow-300`.
  - **Descripción:** `text-sm text-gray-300`.

### PÁGINA 5: Upsell 1-Click (Multiplicador)

**Layout:** Extremadamente minimalista para evitar distracciones.

- **Contenedor Principal:** `flex flex-col items-center justify-center min-h-screen bg-gray-950 p-4`.
- **Titular de Interrupción:** `text-center text-4xl font-extrabold text-yellow-300`.
- **Subtitular:** `text-center text-xl text-white mt-2`.
- **Video:** `mt-8 w-full max-w-3xl aspect-video rounded-lg`.
- **Botón de Aceptar (1-Click):**
  - **Estilo:** El botón más prominente de todo el embudo.
  - **Clases Tailwind:** `mt-8 w-full max-w-md py-5 px-8 rounded-lg text-2xl font-bold text-blue-950 bg-gradient-to-r from-green-400 to-lime-300 hover:scale-105 transition-transform`.
- **Enlace de Rechazo:**
  - **Estilo:** Texto simple, sin decoración, para no competir con el botón principal.
  - **Clases Tailwind:** `mt-4 text-sm text-gray-500 hover:text-white underline`.

### PÁGINA 6: Página de Acceso / Onboarding

**Layout:** Tipo dashboard, limpio y funcional.

- **Componente: Tarjeta de Siguientes Pasos**
  - **Contenedor:** `bg-gray-800 p-8 rounded-xl`.
  - **Lista Numerada:** `list-decimal list-inside space-y-4`.
  - **Cada Item:** `text-lg text-gray-300`.
  - **Enlaces/Botones dentro de los items:** `font-bold text-green-400 hover:underline`.

### PÁGINA 8: Página de Ventas Core (Pro / Elite)

**Layout:** Similar a una página de precios de SaaS moderna.

- **Componente: Tabla de Comparación de Planes**
  - **Contenedor:** `bg-gray-800 rounded-xl overflow-hidden`.
  - **Cabecera de Tabla:** `bg-gray-900 font-bold text-white`.
  - **Filas:** `border-b border-gray-700`.
  - **Íconos de Check/Cruz:** `text-green-400` para ✅, `text-red-500` para ❌.
  - **Botones de CTA por plan:** Cada columna de plan debe tener su propio botón de CTA, con el plan recomendado (Pro) destacado con un gradiente o un borde especial.
    - **Botón Destacado:** `bg-gradient-to-r from-cyan-500 to-green-400`.
    - **Botones Normales:** `bg-blue-600 hover:bg-blue-700`.

Estas especificaciones proporcionan una base sólida para que un agente de IA o un desarrollador construya un embudo visualmente atractivo, moderno y coherente, utilizando las mejores prácticas de diseño y Tailwind CSS.
