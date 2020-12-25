<template>
  <div>
    <Statistics />
    <Financial />
    <Charts />
    <Copyright />
  </div>
</template>

<script>
import Charts from "./Charts.vue"
import Financial from "./Financial.vue"
import Statistics from "./Statistics.vue"
import Copyright from "./Copyright.vue"

export default {
  components: { Financial, Charts, Statistics, Copyright },
}
</script>

