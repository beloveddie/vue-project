<template>
  <ul>
    <TodoItem
        v-for="item in todoItems"
        :id="item.id"
        :high-priority="item.highPriority"
        :purchased="item.purchased"
        :label="item.label"
    />
  </ul>
</template>

<script setup lang="ts">
  import TodoItem from "@/components/TodoItem.vue";

  interface TodoItemModel {
    id: number;
    label: string;
    purchased: boolean;
    highPriority: boolean;
  }

  interface TodoListModel {
    todoItems: TodoItemModel[]
  }

  const todoListProps = defineProps<TodoListModel>()
</script>

<style scoped>

</style>