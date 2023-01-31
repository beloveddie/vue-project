<script setup lang="ts">
  import {reactive, ref} from "vue"
  import TodoList from "@/components/TodoList.vue";
  import Button from "@/components/Button.vue";
  import Form from "@/components/Form.vue";
  import type {TodoItemModel} from "@/model/TodoModel";

  const items: TodoItemModel[] = reactive([
    {id: 1, label: "10 party hats", purchased: true, highPriority: false},
    {id: 2, label:"2 board games", purchased: false, highPriority: true},
    {id: 3, label: "20 cups", purchased: true, highPriority: true},
  ])

  const editing = ref(false)

  const saveItem = (newItem: string): void  => {
    items.push({label: newItem, id: items.length + 1, purchased: false, highPriority: false})
  }

</script>


<template>
  <div class="header">
    <h1>Shopping List App</h1>
    <Button :editing="editing" @click="editing = !editing"/>
  </div>
  <main>
    <section>
      <Form :save-item="saveItem" v-if="!editing" :editing="editing"/>
    </section>
    <TodoList :todo-items="items"/>
  </main>
</template>
