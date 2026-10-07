# Guía de entrega — Opción 1

Referencia: Final_Project-Paradise_Nursery_Shopping_Application.pdf, páginas 2, 5 y 25–26. Entrega **siete URLs públicas de GitHub que apunten directamente a archivos**; el repositorio debe llamarse exactamente `e-plantShopping`.

## Estado actual

- Fork público: https://github.com/xm4u/e-plantShopping
- Aplicación publicada: https://xm4u.github.io/e-plantShopping/
- Los siete enlaces de la sección 3 responden sin autenticación.
- GitHub Actions ha completado instalación, lint, cuatro tests, build y deploy.
- Solo queda enviar los enlaces en los campos correspondientes de Coursera.

Los pasos de publicación siguientes quedan documentados para reproducir la configuración. El remoto `origin` ya está configurado y GitHub Pages ya está activado.

## 1. Publicar el repositorio

El PDF indica hacer un fork de la plantilla oficial. Esta carpeta ya contiene una copia de su historial y las modificaciones completas.

1. Entra en https://github.com/ibm-developer-skills-network/e-plantShopping.
2. Pulsa **Fork** y crea tu fork público, conservando el nombre **e-plantShopping**.
3. En una terminal situada en esta carpeta, añade tu fork como `origin`:

```sh
git remote add origin https://github.com/xm4u/e-plantShopping.git
git remote -v
```

`upstream` ya apunta a la plantilla oficial; `origin` debe apuntar a tu cuenta. Si `origin` ya existe, comprueba su URL y usa `git remote set-url origin ...` si necesitas corregirla.

4. Comprueba y guarda tus cambios locales:

```sh
git status
```

Si existen cambios sin confirmar:

```sh
git add .
git commit -m "Complete Paradise Nursery shopping application"
```

5. Sube la rama principal:

```sh
git push -u origin main
```

Si GitHub rechaza el push porque el remoto avanzó, revisa los cambios remotos antes de integrar; no fuerces el push.

## 2. Activar GitHub Pages

Aunque la entrega de opción 1 solicita enlaces a los archivos, las notas generales también piden una URL desplegada. Se incluye `.github/workflows/deploy.yml` para atenderlo.

1. En tu fork: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Si GitHub mantiene los workflows desactivados por tratarse de un fork, habilítalos en la pestaña **Actions**.
3. En **Actions**, ejecuta **Deploy Paradise Nursery to GitHub Pages → Run workflow**, seleccionando `main`, o realiza un nuevo push.
4. Espera a que los trabajos build y deploy terminen correctamente.
5. Abre la URL publicada por el trabajo deploy. La URL de este proyecto es `https://xm4u.github.io/e-plantShopping/`.
6. Prueba portada, catálogo y carrito en la URL pública. Los assets relativos permiten servir la aplicación desde la subcarpeta del repositorio; la navegación usa hashes y no necesita reglas de reescritura.

El workflow instala con pnpm y exige lint, tests y build antes del despliegue.

## 3. Obtener los siete enlaces

```sh
pnpm submission:links
```

O, antes de configurar `origin`:

```sh
pnpm submission:links https://github.com/xm4u/e-plantShopping
```

Entrega estos enlaces en los campos correspondientes de Coursera:

```text
https://github.com/xm4u/e-plantShopping/blob/main/README.md
https://github.com/xm4u/e-plantShopping/blob/main/src/AboutUs.jsx
https://github.com/xm4u/e-plantShopping/blob/main/src/App.css
https://github.com/xm4u/e-plantShopping/blob/main/src/App.jsx
https://github.com/xm4u/e-plantShopping/blob/main/src/CartSlice.jsx
https://github.com/xm4u/e-plantShopping/blob/main/src/ProductList.jsx
https://github.com/xm4u/e-plantShopping/blob/main/src/CartItem.jsx
```

Abre cada enlace en una ventana privada sin iniciar sesión: debe mostrar el archivo, no un error 404 ni una solicitud de autenticación. No envíes rutas locales ni enlaces a la plantilla de IBM.

## 4. Checklist funcional

- [ ] README incluye exactamente `e-plantShopping`.
- [ ] AboutUs incluye información de la empresa.
- [ ] App.css define la imagen de fondo y App.jsx muestra bienvenida y Get Started.
- [ ] Hay 3 categorías con 6 plantas distintas cada una (18 en total).
- [ ] Cada planta tiene imagen, nombre, descripción, precio y Add to Cart.
- [ ] Añadir cambia el botón a Added to Cart y lo deshabilita.
- [ ] Home, Plants y Cart aparecen en catálogo y carrito.
- [ ] El contador suma cantidades, no solamente plantas diferentes.
- [ ] Snake Plant ($15) + Lavender ($20) = $35 y 2 plantas.
- [ ] Incrementar Snake Plant da $30 de subtotal, $50 de total y 3 plantas.
- [ ] Decrementar actualiza subtotal, total y contador; de 1 a 0 elimina la fila.
- [ ] Delete elimina la planta y permite volver a añadirla en el catálogo.
- [ ] Continue Shopping vuelve al catálogo; Checkout muestra Coming Soon.
- [ ] `pnpm lint`, `pnpm test` y `pnpm build` pasan.
- [ ] Repositorio público, archivos confirmados y subidos a main.
- [ ] Los siete enlaces abren sin iniciar sesión.
- [ ] Despliegue público funciona, incluidas sus imágenes.

## Estado de preparación

La aplicación, las fotos locales, las pruebas, el generador de enlaces y el workflow están incluidos y publicados. El fork, el push, la activación de Pages y el despliegue están completados. Solo queda enviar los siete enlaces en Coursera. La publicación no equivale a una entrega enviada ni a una calificación garantizada.
