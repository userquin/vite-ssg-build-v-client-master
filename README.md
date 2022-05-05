# [#230](https://github.com/antfu/vite-ssg/issues/230) vite-ssg minimal reproduction

This is just the [vitesse-lite](https://github.com/antfu/vitesse-lite) with `vite-ssg` installed and a few unnecessary things blown away.

## Problem

In `src/pages/index.vue` I am importing the esm output file of the `3d-force-graph` lib (unimportant). This has three.js as a dependency which uses window. 

> note: I am able to fully build this using `vite-ssg` if I import the UMD output file for `3d-force-graph` instead of `3d-force-graph/dist/3d-force-graph.module.js`.

The main problem now is that I would expect the `mock` flag in config to come to my aid when three.js (or whichever client side lib) tries to use `window`.

Am I misunderstanding the `mock` feature?

try: `pnpm build`