<template>
  <div @click="setName">{{ name }}</div>
</template>

<script>
import NameFormula from "./Form/NameFormula";
export default {
  name: "testname",
  setup: NameFormula,
};
</script>

<style>
</style>