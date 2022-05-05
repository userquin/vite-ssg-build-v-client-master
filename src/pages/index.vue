<script setup>
import ForceGraph3D from '3d-force-graph'
onMounted(async () => {
  // const ForceGraph3D = await import('3d-force-graph')
  const N = 300
  const gData = {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  }

  ForceGraph3D()(document.getElementById('3d-graph')).graphData(gData)
})
</script>

<template>
  <div id="3d-graph" />
</template>
