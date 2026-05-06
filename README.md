# GetParaguay.com

## Descripción
GetParaguay.com es un portal digital premium diseñado con un estilo "Quiet Luxury" para atraer a inversores extranjeros de alto nivel interesados en Paraguay. El sitio sirve como un punto de entrada (landing page) que combina contenido de estilo de vida con oportunidades de inversión, dirigiendo el tráfico calificado hacia los servicios exclusivos de **Paraguay Concierge**.

## Estructura del Proyecto
Este proyecto es una Single Page Application (SPA) construida con **React** y **TypeScript**, estilizada con **Tailwind CSS**.

- **Header**: Navegación pegajosa (Sticky) que cambia de estilo al hacer scroll.
- **Hero**: Sección principal con el slogan *"Get to know Paraguay: Your insider access to the heart of South America"*.
- **Contenido**: Secciones divididas en Explore (Estilo de vida), Invest (Inversión) y Settle (Residencia).
- **Integración**: Botón de llamada a la acción (CTA) flotante y persistente que enlaza directamente a [Paraguay Concierge](https://www.paraguayconcierge.com).

## Tecnologías
- React 18
- TypeScript
- Tailwind CSS (vía CDN para prototipado rápido o configuración postcss estándar)
- Google Fonts (Playfair Display & Inter)

## Despliegue Automático en Cloudflare Pages

Este repositorio está optimizado para desplegarse automáticamente utilizando **Cloudflare Pages**. Sigue estos pasos:

1. **Subir a GitHub**:
   - Asegúrate de que este código esté en la rama `main` o `master` de tu repositorio.

2. **Configurar Cloudflare Pages**:
   - Entra a tu dashboard de Cloudflare -> Pages -> "Create a project".
   - Selecciona "Connect to Git" y elige este repositorio.

3. **Configuración de Build**:
   - **Framework Preset**: Create React App (o selecciona None si usas un build custom, pero CRA es estándar).
   - **Build command**: `npm run build`
   - **Build output directory**: `build` (o `dist` dependiendo de tu bundler, por defecto CRA usa `build`).

4. **Variables de Entorno (Opcional)**:
   - Si necesitas configurar claves de API en el futuro, hazlo en la sección de Settings -> Environment Variables.

5. **Deploy**:
   - Haz clic en "Save and Deploy". Cloudflare detectará automáticamente los cambios en la rama `main` y actualizará el sitio en vivo.

---
*Desarrollado para GetParaguay - Insider Access.*