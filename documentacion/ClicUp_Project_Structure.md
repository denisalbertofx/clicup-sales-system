# Estructura de Proyecto Recomendada para ClicUp

Este documento define la estructura de carpetas y la organización del código para el proyecto ClicUp, utilizando **Next.js 14+ (App Router)**.

## Stack Tecnológico Seleccionado

-   **Framework:** Next.js 14+ (App Router)
-   **Lenguaje:** TypeScript
-   **Estilos:** Tailwind CSS
-   **Componentes UI:** Shadcn/UI (basado en Radix UI)
-   **Iconos:** Lucide React
-   **Animaciones:** Framer Motion
-   **Validación de Formularios:** Zod + React Hook Form
-   **Gestión de Estado:** Zustand (si es necesario, aunque Server Components reducen la necesidad)

## Estructura de Carpetas

```
/
├── app/                        # Rutas y layouts de la aplicación (App Router)
│   ├── layout.tsx              # Layout raíz (fuentes, metadata, providers)
│   ├── page.tsx                # Página de inicio (Homepage)
│   ├── globals.css             # Estilos globales y variables de Tailwind
│   ├── soluciones/             # Rutas para páginas de soluciones
│   │   ├── [industry]/         # Ruta dinámica para industrias (ej: /soluciones/salones)
│   │   │   └── page.tsx
│   ├── funcionalidades/        # Rutas para funcionalidades
│   ├── precios/                # Página de precios
│   ├── contacto/               # Página de contacto
│   └── (auth)/                 # Grupo de rutas de autenticación (si se requiere login propio)
│       ├── login/
│       └── register/
│
├── components/                 # Componentes de React
│   ├── ui/                     # Componentes base de Shadcn/UI (Button, Input, Card, etc.)
│   ├── layout/                 # Componentes de estructura (Header, Footer, Sidebar)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/               # Secciones completas de páginas (para mantener page.tsx limpio)
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── PainPoints.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Comparison.tsx
│   │   │   └── FAQ.tsx
│   │   └── shared/             # Secciones reutilizables (ej: CTA final)
│   └── shared/                 # Componentes reutilizables no-UI (ej: Analytics)
│
├── lib/                        # Utilidades y lógica de negocio
│   ├── utils.ts                # Utilidades generales (cn para Tailwind)
│   ├── constants.ts            # Constantes globales (links, precios, config)
│   └── types.ts                # Definiciones de tipos TypeScript globales
│
├── public/                     # Archivos estáticos
│   ├── images/                 # Imágenes optimizadas
│   ├── icons/                  # Iconos SVG personalizados
│   └── fonts/                  # Fuentes locales (si no se usa Google Fonts)
│
├── styles/                     # Archivos de estilos adicionales (si son necesarios)
│
├── hooks/                      # Custom React Hooks
│   ├── use-scroll.ts
│   └── use-media-query.ts
│
├── config/                     # Configuraciones del sitio
│   └── site.ts                 # Metadata del sitio, navegación, etc.
│
├── .eslintrc.json              # Configuración de ESLint
├── next.config.js              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── postcss.config.js           # Configuración de PostCSS
├── tailwind.config.ts          # Configuración de Tailwind CSS (colores, fuentes, plugins)
└── tsconfig.json               # Configuración de TypeScript
```

## Convenciones de Código

### Componentes
-   Usar **Functional Components** con TypeScript.
-   Nombrar archivos en `PascalCase` (ej: `HeroSection.tsx`).
-   Usar exportaciones nombradas (`export function HeroSection...`) para mejor tree-shaking y debugging.

### Estilos
-   Utilizar clases de utilidad de **Tailwind CSS** para la mayoría de los estilos.
-   Para estilos condicionales complejos, usar la utilidad `cn` (clsx + tailwind-merge).
-   Definir colores y variables en `tailwind.config.ts` para mantener consistencia con el diseño "God Tier".

### Rendimiento (Core Web Vitals)
-   Usar el componente `<Image />` de Next.js para todas las imágenes.
-   Cargar fuentes con `next/font`.
-   Usar `loading.tsx` para estados de carga en rutas dinámicas.
-   Implementar `metadata` en cada `page.tsx` para SEO.

## Próximos Pasos para Inicialización

1.  Ejecutar: `npx create-next-app@latest . --typescript --tailwind --eslint`
2.  Inicializar Shadcn/UI: `npx shadcn-ui@latest init`
3.  Instalar dependencias clave: `npm install framer-motion lucide-react`
4.  Configurar `tailwind.config.ts` con la paleta de colores oscuros y premium.
