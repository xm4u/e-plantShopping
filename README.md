# e-plantShopping — Paradise Nursery

Aplicación de compra de plantas de interior creada para el proyecto final **Paradise Nursery Shopping Application**, del curso Developing Front-End Apps with React. Preparada para **Option 1: AI-Graded Submission and Evaluation**.

Basada en la [plantilla oficial de IBM Skills Network](https://github.com/ibm-developer-skills-network/e-plantShopping), conservando los nombres de archivo que evalúa Coursera. El repositorio público de entrega se llama **e-plantShopping**.

## Funcionalidades

- Portada con imagen de fondo, bienvenida, información de la empresa y botón **Get Started**.
- **18 plantas distintas**, agrupadas en tres categorías de seis: Air Purifying Plants, Aromatic Plants y Low Maintenance Plants.
- Cada ficha muestra imagen, nombre, descripción, precio y **Add to Cart**; el botón pasa a **Added to Cart** y queda deshabilitado.
- Redux Toolkit gestiona añadir, eliminar y actualizar cantidades.
- Navegación Home / Plants / Cart; el icono muestra la suma de todas las cantidades.
- Carrito con miniatura, precio unitario, cantidad, subtotal y total general.
- Incremento, decremento, eliminación al llegar a cero y botón Delete. Una planta eliminada puede volver a añadirse.
- **Continue Shopping** vuelve al catálogo y **Checkout** muestra **Coming Soon**.
- Diseño adaptable, controles con etiquetas accesibles y fotos locales.

## Ejecutar localmente

Requisitos: Node.js 22.12 o superior (recomendado Node.js 24) y pnpm 12.4.2.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abre `http://127.0.0.1:5173/`. Si el puerto está ocupado, Vite indicará el puerto disponible.

```sh
pnpm lint
pnpm test
pnpm build
pnpm preview
```

`preview` sirve la compilación existente en `http://127.0.0.1:4173/`; ejecuta `build` primero.

## Enlaces públicos

- Repositorio: https://github.com/xm4u/e-plantShopping
- Aplicación: https://xm4u.github.io/e-plantShopping/

## Entregar la opción 1

Consulta **[docs/ENTREGA_OPCION_1.md](docs/ENTREGA_OPCION_1.md)** para publicar, desplegar y completar el checklist. El fork público está publicado en [xm4u/e-plantShopping](https://github.com/xm4u/e-plantShopping) y la aplicación está desplegada en [GitHub Pages](https://xm4u.github.io/e-plantShopping/). La entrega de los siete enlaces en Coursera queda pendiente.

Los siete archivos que debes entregar mediante sus URLs públicas de GitHub son:

| Archivo | Contenido evaluado |
| --- | --- |
| `README.md` | Nombre e-plantShopping y descripción del proyecto |
| `src/AboutUs.jsx` | Información de Paradise Nursery |
| `src/App.css` | Estilos e imagen de fondo de la portada |
| `src/App.jsx` | Bienvenida y botón Get Started |
| `src/CartSlice.jsx` | Acciones addItem, removeItem y updateQuantity |
| `src/ProductList.jsx` | 3 categorías × 6 plantas, botones y navbar |
| `src/CartItem.jsx` | Cantidades, precios, subtotales, total y acciones |

Una vez configurado el remoto `origin`, genera los enlaces con:

```sh
pnpm submission:links
```

O indicando el repositorio:

```sh
pnpm submission:links https://github.com/TU_USUARIO/e-plantShopping
```

El generador imprime URLs; no crea un repositorio ni confirma que sea público.

## Estructura

```text
src/
  App.jsx            Portada y acceso al catálogo
  App.css            Diseño global y responsive
  AboutUs.jsx        Información de la empresa
  ProductList.jsx    Datos de las 18 plantas, catálogo y navegación
  CartItem.jsx       Pantalla del carrito
  CartSlice.jsx      Estado y acciones Redux
  CartSlice.test.js  Pruebas del carrito
  store.js           configureStore
  main.jsx           Provider y montaje de React
public/images/       Fotos servidas localmente
scripts/             Generador de enlaces de entrega
.github/workflows/   Verificación y despliegue en GitHub Pages
```

## Alcance

Es un proyecto educativo. Checkout muestra un aviso, según el enunciado; no realiza pagos ni crea pedidos. El carrito vive en memoria durante la sesión: se conserva al navegar por las pantallas y se reinicia al recargar.

El checklist específico de la opción 1 en las páginas 25–26 exige seis plantas **por categoría**, por encima del mínimo general mencionado en la introducción. Esta implementación cumple el requisito más estricto.

## Créditos

Plantilla inicial de IBM Skills Network, bajo Apache 2.0 (ver [LICENSE](LICENSE)). Las fotos del catálogo proceden de las URLs de Pixabay y Unsplash incluidas en la plantilla; fuentes en [docs/ASSETS.md](docs/ASSETS.md). La imagen del invernadero y la de Monstera se generaron para este proyecto. Todas se sirven localmente.
