<template>
  <div id="app">
    <form-conacyt></form-conacyt>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import HelloWorldComponent from "../src/HelloWorldComponent.vue";

export default Vue.extend({
  components: { "form-conacyt": HelloWorldComponent }
});
</script>
