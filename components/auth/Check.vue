<script lang="ts" setup>
 const user = useSupabaseUser()
</script>

<template>
  <div>
    <div v-if="user" class="text-6xl font-bold text-white">Am user</div>
    <div v-else class="text-6xl font-bold text-white">Am not user</div>
  </div>
</template>

<style scoped></style>
