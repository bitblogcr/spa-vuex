 <!-- Sael Pasos, Tarea 2 UNED I cuatrimestre -->
<template>
  <div id="app" class="container">
  <br>
    <h2>Lista de To Do's pendientes</h2>
    <!-- Formulario -->
    <form class="form" @submit.prevent="handleSubmit">
      <input v-model="description" type="text" placeholder="¿Qué tarea debo anotar?" class="input-field" />
      <input v-model="date" type="date" class="input-field" />
      <button type="submit" class="btn-submit">Agregar una tarea</button>
      <div id="app">
    <!-- Aquí va el contenido principal de tu aplicación -->
    
    <!-- Botones para ir al inicio y al final de la página -->
    <div class="scroll-buttons">
      
      <button @click="scrollToBottom">Ir al final</button>
    </div>
  </div>
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
    methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Para hacer el desplazamiento suave
      });
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight, // Altura total del documento
        behavior: 'smooth' // Para hacer el desplazamiento suave
      });
    }
  }
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
  margin-right: 20px; 
  padding: 5px; 
  border-radius: 12px; 
  border: 5px solid #ccc; 
}
.scroll-buttons {
  cursor: pointer; 
  position: fixed;
  bottom: 250px;
}

.scroll-buttons button {
    position: fixed;
  top: 25px;
  right: 20px;
  padding: 5px 10px; 
  border: 1px solid #ccc;
  background-color: #4caf50; 
  color: #fff; 
  border-radius: 15px; 
  cursor: pointer; 
}
.btn-submit {
  padding: 5px 10px; 
  border: 1px solid #ccc;
  background-color: #4caf50;
  color: #fff; 
  border-radius: 15px; 
  cursor: pointer; 
}

.btn-delete {
  padding: 3px 5px;
  border: none; 
  background-color: orange; 
  color: #fff; 
  border-radius: 3px; 
  cursor: pointer; 
}

.todo-list {
  list-style: disc; 
  padding: 5;
}

.todo-item {
  margin-top: 10px; 
}

</style>
