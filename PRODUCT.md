# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 (sitio estático) + Tailwind CSS v4 + GSAP. Código en `src/`, imágenes en `public/`. Los tokens vienen del Design System «Xidoo Rutas» en Claude (https://claude.ai/artifact/MXacJD8xAmBZvK3BXz9yUy), copiados en `src/styles/tokens.css`. Desde nov 2026 ya no hay HTML heredado, Bootstrap ni PHP.

## Users

Principal: usuarios del transporte público de Salamanca (los "salmantinos") que quieren consultar rutas, horarios, estaciones y costos para moverse por la ciudad.
Secundarios: comerciantes locales que quieren darse a conocer (Publicidad Local) y residentes interesados en la cultura de la ciudad (Ruta Cultural).

## Product Purpose

Xidoo Rutas es una app local para moverse por Salamanca: consultar el transporte público (rutas, horarios, estaciones, costos), descubrir sitios emblemáticos y eventos culturales, y encontrar negocios locales. El proyecto se está **relanzando** (nov 2026) después de una etapa de prototipos entre 2020 y 2022. El sitio es la página informativa del producto: explica qué hace y, mientras la app no se puede descargar, lleva al visitante a seguir el proyecto en redes (Instagram @xidoorutas, Facebook XidooRutas, X @RutasXidoo).

## Positioning

Abierto: todavía no se define qué diferencia a Xidoo Rutas frente a Google Maps o Moovit. Hay que evitar afirmar ventajas (por ejemplo, datos exclusivos o cobertura) mientras no se confirmen. Lo que sí es cierto: es una app hecha en Salamanca, por salmantinos y para salmantinos.

## Operating Context

- Se usa en la ciudad, muchas veces desde el celular mientras alguien espera o planea un viaje.
- El sitio tiene cuatro páginas: Inicio, Aplicación (lista de espera), Contacto (formulario) e Iniciar sesión (aviso de «Próximamente» para negocios). `proximamente.html` redirige a Iniciar sesión.
- Por ahora los formularios son de demostración: validan y responden en la página, pero no envían nada. Falta decidir cómo se mandarán los datos.

## Capabilities and Constraints

- Funciones del relanzamiento: **Rutas/horarios/costos**, **Ruta Cultural**, **Comercios Locales** (perfiles de negociantes) y **Anuncios de la Comunidad** (avisos oficiales de la ciudad). Anuncios se había retirado y se reincorporó en nov 2026: el sitio la presenta como el cuarto servicio.
- El inicio de sesión para comerciantes y la descarga de la app todavía no están disponibles. La página tiene que comunicar con honestidad lo que sigue pendiente.
- Decisiones abiertas: la fecha de lanzamiento y las tiendas y plataformas de la app.

## Brand Commitments

- Nombre: Xidoo Rutas (también aparece como "XidooRutas"). Logotipo: autobús en un disco amarillo (`public/favicon.svg`, `src/components/ui/Logo.astro`).
- Hashtag existente: #ConectandoLaCiudad.
- Voz: cercana, local, en español de México y dirigida a "los salmantinos".

## Evidence on Hand

- Trayectoria real (`src/data/home.ts`): idea en sept. 2020; presentación en dic. 2020; desarrollo desde ene. 2021; primer prototipo en jun. 2021; **segundo lugar nacional en CONIES 2021 (edición Tamaulipas), categoría emprendimiento tecnológico, frente a 100 universidades**; exposición en dic. 2021; versión de prueba presentada al público en abr. 2022.
- Equipo de 5 estudiantes de la UTS (las fotos y páginas del equipo se retiraron del sitio en nov 2026; están en el historial de git).
- Capturas de la app en `public/img/app/`.
- No existen: testimonios, cifras de usuarios, alianzas ni datos de cobertura. No se deben inventar.

## Product Principles

1. Primero el viajero: la consulta de rutas es el centro, y todo lo demás la acompaña.
2. Local de verdad: hecho para Salamanca, con nombres, lugares y voz de la ciudad.
3. Honestidad sobre el estado: no prometer funciones ni fechas que no estén confirmadas.
4. Útil en el celular, en la calle, con prisa.
