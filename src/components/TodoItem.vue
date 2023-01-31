<template>
    <span class="flex-item">
      <li @click="purchased=!purchased" :class="{strikeout: purchased}">{{ label }}</li>
      <IconStar @click="highPriority=!highPriority" :class="{priority: highPriority}" class="star" title="High Priority Item"/>
    </span>
    <div class="line-under"></div>
</template>

<script setup lang="ts">
  import IconStar from "@/components/icons/IconStar.vue";

  interface TodoItemModel {
    id: number;
    label: string;
    purchased: boolean;
    highPriority: boolean;
  }

  const todoItemProps = defineProps<TodoItemModel>()
</script>

<style scoped>

</style>