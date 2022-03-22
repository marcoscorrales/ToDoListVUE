<template>
  <div id="app">
    <h2>Lista de tareas</h2>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '../src/components/Todolist.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
