<template> //plantilla de listado, recorrido con un ciclo
  <div>
    <h2>Lista de Pendientes</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.description }} - {{ todo.date }}
        <button @click="deleteTodo(todo.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodoAsync', id);
    },
  },
};
</script>
