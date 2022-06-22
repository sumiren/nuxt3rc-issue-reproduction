<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log(JSON.stringify(runtimeConfig));
</script>
