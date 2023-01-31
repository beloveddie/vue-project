<template>
  <form @submit.prevent="() => {saveItem(newItem); newItem=''}" class="add-item-form">
    <div>
      <input v-model="newItem" name="label">
      <button class="btn">Save Item</button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  const formProps = defineProps<{saveItem: (item: string) => void, editing: boolean}>()

  const newItem = ref<string>("" );

</script>

<style scoped>

</style>