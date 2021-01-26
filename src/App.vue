<template>
  <div>
    {{ model.name }}
    <Name />
  </div>
</template>

<script lang="ts">
import FormFormula from "./Form/FormFormula";
import Name from "./Name.vue";
export default {
  name: "App",
  components: { Name },
  setup() {
    const form = FormFormula();
    return { ...form };
  },
};
</script>

<style>
</style>