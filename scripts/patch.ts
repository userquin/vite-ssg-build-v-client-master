import fs from 'fs'
import path from 'path'

const patchPkg = (name: string, data: any) => {
  const pkgPath = path.resolve('node_modules', name, 'package.json')

  const pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }))

  if (pkg.type === 'module')
    return

  const patchedPkg = {
    ...pkg,
    ...data,
  }

  fs.writeFileSync(pkgPath, JSON.stringify(patchedPkg, null, 2), { encoding: 'utf-8' })
}

patchPkg('3d-force-graph', {
  type: 'module',
  sideEffects: false,
  exports: {
    '.': {
      require: './dist/3d-force-graph.common.js',
      import: './dist/3d-force-graph.module.js',
      types: './dist/3d-force-graph.d.ts',
    },
  },
})

patchPkg('three-forcegraph', {
  type: 'module',
  sideEffects: false,
  exports: {
    '.': {
      require: './dist/three-forcegraph.common.js',
      import: './dist/three-forcegraph.module.js',
      types: './dist/three-forcegraph.d.ts',
    },
  },
})

patchPkg('three-render-objects', {
  type: 'module',
  sideEffects: false,
  exports: {
    '.': {
      require: './dist/three-render-objects.common.js',
      import: './dist/three-render-objects.module.js',
      types: './dist/three-render-objects.d.ts',
    },
  },
})
