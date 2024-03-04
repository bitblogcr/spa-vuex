 <!-- Sael Pasos, Tarea 2 UNED I cuatrimestre -->
<template>
  <div id="app" class="container">
    <br>
    <h2>Lista de Tareas Pendientes</h2>
    
    <!-- Formulario -->
    <form class="form" @submit.prevent="handleSubmit">
      <input v-model="description" type="text" placeholder="¿Qué tarea debo anotar?" class="input-field" />
      <input v-model="date" type="date" class="input-field" />
      <button type="submit" class="btn-submit">Agregar Tarea</button>
    </form>

    <!-- Lista de Tareas pendientes con capacidad de eliminar -->
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        {{ todo.description }} - {{ todo.date }}
        <button @click="handleDelete(todo.id)" class="btn-delete">Eliminar</button>
      </li>
    </ul>
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://1785154.playcode.io/">Tarea 2 Uso de estados para SPA con Vuex</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/sspc/">SPPC</a> is marked with <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>

    <!-- Botón para ir al inicio -->
    <button @click="scrollToTop" class="scroll-button">Ir al inicio</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      date: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    handleSubmit() {
      if (!this.description.trim() || !this.date.trim()) {
        return;
      }
      this.$store.dispatch('addTodo', { description: this.description, date: this.date });
      this.description = '';
      this.date = '';
    },
    handleDelete(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  }
};
</script>

<style scoped>
.container {
  background-color: #e0f2f1;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 20px;
}

.form {
  margin-bottom: 20px;
}

.input-field {
  margin-right: 10px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.btn-submit {
  padding: 5px 10px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.btn-delete {
  padding: 3px 5px;
  border: none;
  background-color: #ff5722;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  margin-top: 10px;
}

.scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.scroll-button:hover {
  background-color: #0056b3;
}

.scroll-button:focus {
  outline: none;
}
</style>
