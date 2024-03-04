 <!-- Sael Pasos, Tarea 2 UNED I cuatrimestre -->
 <!--Plantilla -->
<template>
  <div id="app" class="container">
  <br>
    <h2>Lista de To Do's pendientes</h2>
    <!-- Formulario -->
    <form class="form" @submit.prevent="handleSubmit">
      <input v-model="description" type="text" placeholder="Descripción" class="input-field" />
      <input v-model="date" type="date" class="input-field" />
      <button type="submit" class="btn-submit">Agregar una tarea</button>

        <!-- Leyenda de licencia -->
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://1785154.playcode.io/">Tarea 2 Uso de estados para SPA con Vuex</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/sspc/">SPPC</a> is marked with <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>
    </form>
    <!-- Lista de TO - DOs, tareas -->
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        {{ todo.description }} - {{ todo.date }}
        <button @click="handleDelete(todo.id)" class="btn-delete">Completada</button>
      </li>
    </ul>
  </div>
</template>

 <!-- Funciones script acopladas -->
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
  },
};
</script>
 <!-- Stilos acoplados a Vue, con CSS embebido -->
<style scoped>
.container {
  background-color: #f0f8ea; /* Background */
  font-family: 'Roboto', sans-serif; /* Fuente  */
  text-align: center; /* Centrar  */
}

.form {
  margin-bottom: 40px; /* Espacio abajo */
}

.input-field {/* inputs, cajas de form */
  margin-right: 20px; /* Espacios */
  padding: 5px; /* Espaciado  */
  border-radius: 12px; /* Bordes  redondos */
  border: 5px solid #ccc; /* Borde */
}

.btn-submit {
  padding: 5px 10px; /* Espaciado  */
  border: 1px solid #ccc;/* Sin borde */
  background-color: #4caf50; /* Color de fondo verde */
  color: #fff; /* Color de texto blanco */
  border-radius: 15px; /* Bordes redondos */
  cursor: pointer; /* Cursor de apuntar */
}

.btn-delete {
  padding: 3px 5px; /* Espaciado interno */
  border: none; /* Sin borde */
  background-color: #f44336; /* Color de fondo rojo */
  color: #fff; /* Color de texto blanco */
  border-radius: 3px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de apuntar */
}

.todo-list {
  list-style: disc; /*  viñetas */
  padding: 5; /*  relleno */
}

.todo-item {
  margin-top: 10px; /* Espaciado  */
}
</style>
