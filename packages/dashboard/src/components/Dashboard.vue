<template>
  <div>
    <Statistics />
    <Financial />
    <Charts />
  </div>
</template>

<script>
import Charts from "./Charts.vue"
import Financial from "./Financial.vue"
import Statistics from "./Statistics.vue"

export default {
  components: { Financial, Charts, Statistics },
}
</script>

