# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Actual: HTML estático + Bootstrap, con PHP (`sc.php`, `scontact.php`) para enviar los formularios por correo. Cada página tiene su propia copia de assets en `src/assets*/`.
Nuevo (nov 2026): Astro, con el código en `site/` y los assets en `public/`. El inicio ya está migrado. Las demás páginas HTML y los PHP se copian sin cambios al build (`astro.config.mjs`) hasta que se migren.

## Users

Principal: usuarios del transporte público de Salamanca (los "salmantinos") que quieren consultar rutas, horarios, estaciones y costos para moverse por la ciudad.
Secundarios: comerciantes locales que quieren darse a conocer (Publicidad Local) y residentes interesados en la cultura de la ciudad (Ruta Cultural).

## Product Purpose

Xidoo Rutas es una app local para moverse por Salamanca: consultar el transporte público (rutas, horarios, estaciones, costos), descubrir sitios emblemáticos y eventos culturales, y encontrar negocios locales. El proyecto se está **relanzando** (nov 2026) después de una etapa de prototipos entre 2020 y 2022. El sitio es la página informativa del producto: explica qué hace y, mientras la app no se puede descargar, lleva al visitante a seguir el proyecto en redes (Instagram @xidoorutas, Facebook XidooRutas, X @RutasXidoo).

## Positioning

Abierto: todavía no se define qué diferencia a Xidoo Rutas frente a Google Maps o Moovit. Hay que evitar afirmar ventajas (por ejemplo, datos exclusivos o cobertura) mientras no se confirmen. Lo que sí es cierto: es una app hecha en Salamanca, por salmantinos y para salmantinos.

## Operating Context

- Se usa en la ciudad, muchas veces desde el celular mientras alguien espera o planea un viaje.
- El sitio actual tiene: Inicio, Empresa (equipo y trayectoria), Aplicación (lista de espera por correo), Nosotros/desarrolladores, Actualizaciones (galería), Contacto (formulario) y Próximamente (inicio de sesión para negocios).
- Los formularios envían correo a la cuenta del proyecto mediante `mail()` de PHP.

## Capabilities and Constraints

- Funciones que se mantienen en el relanzamiento: **Rutas/horarios/costos**, **Ruta Cultural**, **Publicidad Local** (perfiles de negociantes).
- **Anuncios Oficiales se retira** del alcance del relanzamiento. No hay que presentarla como función.
- El inicio de sesión para comerciantes y la descarga de la app todavía no están disponibles. La página tiene que comunicar con honestidad lo que sigue pendiente.
- Decisiones abiertas: la fecha de lanzamiento y las tiendas y plataformas de la app.

## Brand Commitments

- Nombre: Xidoo Rutas (también aparece como "XidooRutas"). Logos en `src/assetsempresa/img/logo.png` y `src/assets/img/BoxLogo.png`.
- Hashtag existente: #ConectandoLaCiudad.
- Voz: cercana, local, en español de México y dirigida a "los salmantinos".

## Evidence on Hand

- Trayectoria real (`empresa.html`): idea en sept. 2020; presentación en dic. 2020; desarrollo desde ene. 2021; primer prototipo en jun. 2021; **segundo lugar nacional en CONIES 2021 (edición Tamaulipas), categoría emprendimiento tecnológico, frente a 100 universidades**; exposición en dic. 2021; versión de prueba presentada al público en abr. 2022.
- Equipo de 5 desarrolladores con fotos (`src/assetsdevs/img/`, `devs/*.html`).
- Capturas de la app (`src/assets/img/`, `src/assetsempresa/img/`, `src/assetsaplicacion/img/celular.png`).
- No existen: testimonios, cifras de usuarios, alianzas ni datos de cobertura. No se deben inventar.

## Product Principles

1. Primero el viajero: la consulta de rutas es el centro, y todo lo demás la acompaña.
2. Local de verdad: hecho para Salamanca, con nombres, lugares y voz de la ciudad.
3. Honestidad sobre el estado: no prometer funciones ni fechas que no estén confirmadas.
4. Útil en el celular, en la calle, con prisa.
