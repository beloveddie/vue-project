<template>
    <button v-if="editing" class="btn btn-primary">Add Item</button>
    <button class="btn btn-cancel" v-else>Cancel</button>
</template>

<script setup lang="ts">
    interface BtnProps {
      editing: boolean
    }

    const editingProps = defineProps<BtnProps>()
</script>

<style scoped>

</style>