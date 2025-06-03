# Slider Infinito

Un slider de imágenes a pantalla completa con efecto de bucle infinito.

## Características

- Slider a pantalla completa
- Bucle infinito de imágenes
- Navegación con botones
- Reproducción automática
- Pausa al pasar el mouse
- Transiciones suaves
- Totalmente responsive

## Cómo usar

1. Reemplaza las URLs de las imágenes en el archivo `index.html` con tus propias imágenes
2. Para agregar más imágenes, simplemente añade más elementos `<div class="slide">` con sus respectivas imágenes
3. Para cambiar el tiempo de transición automática, modifica el valor en `script.js` (actualmente establecido en 5000ms = 5 segundos)

## Personalización

- Para cambiar el tamaño del slider, modifica las propiedades `width` y `height` en el archivo `styles.css`
- Para ajustar la velocidad de las transiciones, modifica el valor de `transition` en `styles.css`
- Para cambiar el estilo de los botones de navegación, modifica las clases `.slider-button` en `styles.css` 