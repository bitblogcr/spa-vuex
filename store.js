// almacenamiento del SPA
import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: []
  },// to-dos, es decir "tareas"
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  },
  actions: {
    fetchTodos(context) {
      // se simula la lista, como la entregaría el API dentro del app
      const todos = [
        { id: 1, description: 'TEST TEST', date: '2024-03-10' },
        { id: 2, description: 'TEST 2', date: '2024-03-12' },
        { id: 3, description: 'TEST 3', date: '2024-03-15' }
      ];
      context.commit('setTodos', todos);
    },
    addTodo(context, todo) {
      // Se agrega al estado
      context.commit('addTodo', todo);
    },
    deleteTodo(context, id) {
      // Se elimina todo el estado según el contexto
      context.commit('deleteTodo', id);
    }
  }
});
