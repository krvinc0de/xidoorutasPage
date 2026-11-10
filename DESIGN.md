---
name: Xidoo Rutas
description: Las rutas de Salamanca, en tu celular. Un parabrisas de camión con letreros de cartulina.
colors:
  glass: "#0e1412"
  glass-2: "#151d1a"
  glass-3: "#1d2824"
  edge: "#2b3a35"
  strip-a: "#0c3a3f"
  strip-b: "#08201f"
  rubber: "#050706"
  ink: "#f3f1ea"
  ink-soft: "#a9b8b1"
  sun: "#ffbd59"
  naranja: "#ff7a2e"
  verde: "#8ce05a"
  rosa: "#ff70b2"
  carton: "#f4efe2"
  tinta: "#17140f"
  tinta-soft: "#4a4337"
  plumon-rojo: "#c8231a"
  cinta: "rgba(236, 226, 196, 0.62)"
typography:
  display:
    fontFamily: "'Londrina Solid', 'Big Shoulders Display', sans-serif"
    fontSize: "clamp(3.3rem, 7.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "0em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline-painted:
    fontFamily: "'Londrina Solid', 'Big Shoulders Display', sans-serif"
    fontSize: "clamp(2.8rem, 5vw, 4.4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0em"
  title:
    fontFamily: "'Londrina Solid', 'Big Shoulders Display', sans-serif"
    fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)"
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: "'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
  marker:
    fontFamily: "'Permanent Marker', 'Comic Sans MS', cursive"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  board: "3px 6px 4px 7px"
  button: "6px"
  photo: "2px"
  windshield: "clamp(18px, 3vw, 40px)"
  sticker: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1240px"
  section: "clamp(72px, 9vw, 128px)"
  head: "clamp(32px, 4vw, 52px)"
  stack: "14px"
  tight: "10px"
components:
  button-social:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.carton}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "56px"
  button-social-hover:
    backgroundColor: "#2e281e"
  sign-destination:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.tinta}"
    typography: "{typography.title}"
    rounded: "{rounded.board}"
    padding: "10px 20px 8px"
    height: "56px"
  sign-tab:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.tinta}"
    typography: "{typography.title}"
    rounded: "{rounded.board}"
    padding: "12px 18px 10px"
    height: "64px"
  board-main:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.board}"
    padding: "clamp(28px, 3.6vw, 52px) clamp(24px, 3.4vw, 48px)"
  board-carton:
    backgroundColor: "{colors.carton}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.board}"
    padding: "34px clamp(20px, 2.4vw, 32px) 26px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  nav-link-active:
    textColor: "{colors.sun}"
  id-card:
    backgroundColor: "{colors.carton}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.button}"
    padding: "0 0 16px"
---

# Design System: Xidoo Rutas

## Overview

**Creative North Star: "Letreros de parabrisas"**

La página es el parabrisas de un camión de Salamanca. El fondo es vidrio laminado oscuro y verdoso, con una franja polarizada arriba donde va la navegación en vinil recortado. Todo lo que se tiene que leer de un vistazo va en cartulinas fluorescentes pegadas detrás del vidrio con cinta: el letrero principal en amarillo Xidoo y los de destino en naranja, verde y rosa. Las notas van en plumón, los avisos impresos y los tarjetones del operador se pegan al vidrio y el texto corrido es Atkinson Hyperlegible.

La densidad es de letrero: pocas palabras y muy grandes. Cada cartulina es un objeto físico con su propio ángulo, su propia cinta y su sombra que la separa del vidrio. Nada flota sin razón. Si algo no está pegado al vidrio, es vinil sobre el vidrio (títulos de sección, navegación) o es el tablero del camión (pie de página).

El movimiento tiene una sola gramática: la cartulina **se coloca**. Cae desde unos píxeles arriba con un pequeño giro extra y se asienta en su ángulo, como cuando el chofer cambia el letrero. El sistema respeta `prefers-reduced-motion` y quita toda animación.

**Key Characteristics:**
- Vidrio oscuro verdoso como único fondo, con un reflejo diagonal tenue.
- Cartulinas fluorescentes inclinadas (entre -1.6° y 2.2°), pegadas con cinta translúcida.
- Cuatro voces tipográficas con papeles fijos: vinil, letra pintada, texto, plumón.
- Amarillo Xidoo y el logo del camión como marca fija.
- Un solo gesto de movimiento: colocar y asentar.

## Colors

Vidrio casi negro y verdoso contra cartulinas fluorescentes saturadas, con plumón negro como tinta.

### Primary
- **Amarillo Xidoo** (`sun`): color fijo de marca. Es la cartulina principal (titular y cierre), el color del círculo del logo, el aro de foco, la selección de texto, el enlace activo de la navegación, el botón de reproducir y la banda del tarjetón del operador. Nunca se cambia de tono.

### Secondary
- **Naranja fosforescente** (`naranja`): cartulina de destino de Rutas y horarios, y la parada actual del itinerario.
- **Verde fosforescente** (`verde`): cartulina de destino de Ruta Cultural.
- **Rosa fosforescente** (`rosa`): cartulina de destino de Publicidad Local.

Cada servicio tiene su color y lo conserva en todas partes: el letrero de arriba, la pestaña y el panel.

### Tertiary
- **Rojo de plumón** (`plumon-rojo`): sólo para notas escritas a mano que avisan algo pendiente o actual ("Todavía no se puede descargar", "Aquí vamos").

### Neutral
- **Vidrio** (`glass`, `glass-2`, `glass-3`): el fondo del parabrisas, en un degradado radial más claro arriba.
- **Empaque de hule** (`rubber`): el fondo del `body` alrededor del vidrio y la pista de la barra de desplazamiento.
- **Canto del vidrio** (`edge`): divisores y bordes sobre fondo oscuro.
- **Franja polarizada** (`strip-a` a `strip-b`): degradado vertical de la navegación; `strip-a` también es el `theme-color`.
- **Vinil blanco** (`ink`) y **vinil gris** (`ink-soft`): texto sobre vidrio; `ink-soft` para entradillas y el pie.
- **Cartulina blanca** (`carton`): avisos, tarjetones, itinerario y el letrero de redes.
- **Plumón negro** (`tinta`) y **plumón gastado** (`tinta-soft`): todo el texto sobre cartulina, los botones de redes y la línea del itinerario.
- **Cinta** (`cinta`): crema translúcida de la cinta adhesiva.

### Named Rules
**La Regla del Color por Servicio.** Naranja es Rutas, verde es Cultural, rosa es Negocios. Un color fluorescente no se usa para otra cosa.

**La Regla del Plumón Sobre Cartulina.** El texto sobre cartulina siempre es `tinta` o `tinta-soft`; el texto sobre vidrio siempre es `ink` o `ink-soft`. Nunca texto claro sobre cartulina.

## Typography

**Display Font:** Londrina Solid 900 (con Big Shoulders Display)
**Vinyl Font:** Big Shoulders Display 700/800/900 (con Arial Narrow)
**Body Font:** Atkinson Hyperlegible 400/700 (con system-ui)
**Marker Font:** Permanent Marker (con Comic Sans MS)

**Character:** Big Shoulders es vinil recortado: condensado, limpio, de máquina. Londrina Solid es la letra pintada a mano en la cartulina: gruesa y un poco irregular. Atkinson se lee con prisa en la calle. Permanent Marker es la nota que alguien escribió después.

### Hierarchy
- **Display** (Londrina 900, `clamp(3.3rem, 7.2vw, 6rem)`, 0.9, mayúsculas, máx. 11ch): el titular de la cartulina principal. Uno por página.
- **Headline** (Big Shoulders 800, `clamp(2.6rem, 5.6vw, 4.6rem)`, 0.92, mayúsculas): títulos de sección en vinil blanco sobre el vidrio.
- **Headline pintado** (Londrina 900, `clamp(2.8rem, 5vw, 4.4rem)`, 0.92, mayúsculas): títulos dentro de una cartulina (panel de servicio, cierre). El título del letrero de redes usa la misma voz en `clamp(2rem, 2.8vw, 2.6rem)`.
- **Title** (Londrina 900, 1.3 a 1.7rem, 1, mayúsculas): el texto de los letreros de destino y pestañas, el nombre en el tarjetón y cada parada del itinerario.
- **Body** (Atkinson 400, 1.0625rem, 1.55): texto corrido. Entradillas de 44 a 60ch.
- **Label** (Big Shoulders 700, 1.05rem, 0.06em, mayúsculas): navegación, botones de redes (800, 1.35rem), fechas del itinerario y la banda del tarjetón.
- **Marker** (Permanent Marker 400, 0.95 a 1.2rem): notas a mano, pies de foto y la lista de lo que trae cada servicio.

### Named Rules
**La Regla de las Cuatro Voces.** Vinil para lo que está sobre el vidrio, letra pintada para lo que está en la cartulina, Atkinson para leer, plumón para anotar. No se intercambian.

**La Regla del Plumón Corto.** Permanent Marker sólo lleva frases cortas (una línea o dos). Nunca un párrafo ni un título.

## Layout

Una columna centrada de `max` (1240px) con `gutter` fluido a los lados. Las secciones se separan con `section` arriba y empiezan con un encabezado en vinil (título y entradilla, máx. 820px) separado del contenido por `head`.

El primer vistazo es una retícula de dos columnas (7fr y 4.4fr): la cartulina principal a la izquierda, el letrero de redes un poco más abajo a la derecha y los letreros de destino en fila debajo. Los letreros intercambiables van en dos columnas (3fr de pestañas y 8fr de panel). El itinerario es una fila de ocho paradas; los tarjetones, una fila de cinco.

Puntos de quiebre observados: 1000px (el itinerario pasa a vertical), 960px y 560px (tarjetones a 3 y 2 columnas), 900px (la navegación se vuelve menú), 860px (primer vistazo, letreros y cierre a una columna), 760px (pie a una columna), 480px (itinerario de una sola columna). Las áreas táctiles miden al menos 44px; los botones de redes y los letreros, 56px o más.

## Elevation & Depth

La profundidad es física: hay tres planos. El vidrio es el fondo. Las cartulinas están pegadas detrás del vidrio y proyectan una sombra suave y difusa hacia abajo (`--board-shadow`). La cinta va sobre la cartulina con una sombra mínima. El vinil está en el vidrio mismo y sólo lleva una sombra de texto de 1px.

### Shadow Vocabulary
- **Cartulina en reposo** (`box-shadow: 0 14px 28px -14px rgba(0,0,0,.75), 0 2px 4px rgba(0,0,0,.35)`): toda cartulina, aviso y tarjetón.
- **Cartulina levantada** (`box-shadow: 0 18px 30px -14px rgba(0,0,0,.8)`): letrero de destino en hover, junto con `translate: 0 -3px`.
- **Letrero elegido** (`box-shadow: 0 26px 38px -14px rgba(0,0,0,.9), 0 4px 8px rgba(0,0,0,.4)`): la pestaña seleccionada, que se adelanta y se endereza.
- **Letrero guardado** (`box-shadow: 0 3px 6px -3px rgba(0,0,0,.6)`): pestaña no seleccionada, pegada al vidrio y un poco más girada.
- **Cinta** (`box-shadow: 0 1px 2px rgba(0,0,0,.15)`).
- **Vinil** (`text-shadow: 0 1px 0 rgba(0,0,0,.45)`).

### Named Rules
**La Regla de la Sombra Difusa.** Las sombras siempre son suaves, caen hacia abajo y tienen difuminado negativo. Nunca una sombra dura desplazada: esto es cartón pegado a un vidrio, no un recorte de papel sobre una mesa.

**La Regla del Grano.** Toda cartulina lleva el ruido neutro `--grain` con `background-blend-mode: soft-light` a 180px. El vidrio no lleva grano.

## Shapes

Las cartulinas tienen esquinas apenas redondeadas y desiguales (`rounded.board`), como cartón cortado a mano. Los botones y tarjetones usan 6px. El parabrisas sólo redondea las esquinas de arriba. El sello de CONIES es el único círculo, con un doble aro interior. La cinta es un polígono con orillas rasgadas (`clip-path`).

Toda cartulina tiene un ángulo propio por `--tilt`, entre -1.6° y 2.2°; los avisos impresos llegan a -2.5° y el sello a 8°. Ningún letrero queda perfectamente derecho, salvo la pestaña elegida.

**La Regla de la Cinta Propia.** Cada cartulina define su par de cintas con `--t1-*` y `--t2-*` (posición, largo, ángulo). Ningún par de cintas se repite entre letreros vecinos.

## Components

### Botones de redes
Tactiles y oscuros, la acción principal de la página.
- **Shape:** 6px, alto mínimo 56px.
- **Primary:** fondo `tinta`, texto `carton` en Big Shoulders 800 1.35rem mayúsculas, ícono de trazo de 24px a la izquierda y el usuario en Atkinson alineado a la derecha.
- **Hover / Focus:** fondo `#2e281e` y sube 2px con `--ease-out`; al presionar baja 1px. Foco con el aro global.

### Letreros de destino y pestañas
Cartulinas fluorescentes con ícono y título pintado.
- **Destino:** enlace en el primer vistazo, 56px de alto. En hover sube 3px con sombra levantada.
- **Pestaña:** botón con `role="tab"`, 64px de alto. Seleccionada: se adelanta (`translate: 16px -4px`), queda derecha y gana la sombra de letrero elegido. Sin seleccionar: más girada (`tilt - 1.5°`) y pegada al vidrio. Funciona con flechas, Inicio y Fin.

### Cartulinas y paneles
- **Corner Style:** `rounded.board`.
- **Background:** `sun`, `carton` o el color del servicio, siempre con grano.
- **Shadow Strategy:** cartulina en reposo.
- **Internal Padding:** de 26 a 52px fluidos.
- **Panel de servicio:** título pintado, texto, notas en plumón con un círculo trazado como viñeta y un aviso impreso pegado con la captura del prototipo. Lo pendiente va tras una línea discontinua.

### Navegación (franja polarizada)
- Pegajosa arriba, 64px. Logo y nombre a la izquierda, vínculos en Big Shoulders 700 mayúsculas al 78% de `ink`; hover a `ink`, actual en `sun`.
- **Móvil (≤900px):** botón "Menú" con borde de 1.5px; el menú cae como lista de vínculos de 52px separados por líneas.

### Tarjetón del operador
Gafete de cartulina blanca con banda amarilla ("Xidoo Rutas · Operador"), foto cuadrada, nombre pintado y puesto. Una sola cinta en diagonal en la esquina inferior, alternando lado. En hover sube 4px.

### Itinerario
La trayectoria como ruta de camión: una línea gruesa de `tinta` con paradas en círculo. La parada destacada se rellena de `sun` y subraya su título; la actual se rellena de `naranja` y la línea sigue punteada. En pantallas angostas la ruta se vuelve vertical.

### Movimiento: colocar
- **place** (0.7s, `--settle`): la cartulina baja 14px y se asienta, partiendo de 2.2° más de giro. Escalonado con `--d`.
- **lift** (0.22s, `--ease-out`) y **drop** (0.62s, `--settle`): el letrero se quita hacia arriba y el nuevo cae y se asienta al cambiar de pestaña.
- Con `prefers-reduced-motion` no hay animación y el cambio es inmediato.

## Do's and Don'ts

### Do:
- **Do** poner cada título de sección en vinil (`headline`) sobre el vidrio y cada titular dentro de una cartulina en letra pintada (`display` o `headline-painted`).
- **Do** darle a cada cartulina nueva su propio `--tilt` (entre -1.6° y 2.2°) y su propio par de cintas `--t1-*`/`--t2-*`.
- **Do** mantener el color de cada servicio: naranja Rutas, verde Cultural, rosa Negocios.
- **Do** usar `--board-shadow` para todo lo que está pegado al vidrio, y el grano `soft-light` en toda cartulina.
- **Do** animar sólo con el gesto de colocar y asentar (`--settle`), y quitarlo con `prefers-reduced-motion`.
- **Do** usar el amarillo Xidoo y el logo del camión sin alterarlos.
- **Do** dibujar los íconos como trazo SVG en cuadrícula de 24 con grosor 1.9 a 2.

### Don't:
- **Don't** poner texto claro sobre cartulina ni texto oscuro sobre el vidrio.
- **Don't** usar sombras duras desplazadas; las cartulinas se separan del vidrio con sombra difusa.
- **Don't** escribir párrafos o títulos en Permanent Marker.
- **Don't** usar un color fluorescente fuera de su servicio ni cambiar el tono del amarillo Xidoo.
- **Don't** inventar otra animación (deslizar, desvanecer, rebotar en escala) fuera de colocar y asentar.
- **Don't** usar emoji ni glifos tipográficos como íconos.
