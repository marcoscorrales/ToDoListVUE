<template>
<div>

    <input class="inputTodo" type="text" v-model="newTodoText"/> <!--Variable para añadir la tarea -->
    <button class="boton__add" v-on:click="addTodo">Añadir tarea</button>
    <hr>
    <ul>
        <!-- For que imprime todas las tareas -->
        <div class="todo" v-for=" todo in todos" :key="todo">
            <li>{{todo.text}}</li>
            <!-- Cuando damos click en el boton usamos el metodo delete  -->
            <button class="boton__delete" v-on:click="deleteTodo(todo.id)">Eliminar tarea</button>
        </div>
    </ul>
</div>
</template>

<script>
let nextTodoId =1;

export default{
    name: 'TodoList',
    components:{

    },
    data(){
        return{
            todos: [
                {id: nextTodoId++, text: 'Todo 1'},
                {id: nextTodoId++, text: 'Todo 2'},
                {id: nextTodoId++, text: 'Todo 3'}
            ]
        }
    },
    methods:{
        addTodo: function(){
            if(this.newTodoText){
                const trimmedText = this.newTodoText.trim();
            
                if(trimmedText){
                    this.todos.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = '';
                }

            }
        },
        deleteTodo(idToRemove){ //Elimina la tarea que se ha pasado por parametro 
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove
            });
        }
    }
}
</script>

<style scoped>
    .todo{
        display: flex;
        justify-content: center;
        padding: 8px;
        font-size: 18px;
    }
    .inputTodo{
        padding: 16px;
        font-size: 22px;
        width: 30%;
    }
    .boton__add{
    background-color:#007dc1;
	border-radius:3px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
    }
    .boton__delete{
	background-color:#d0451b;
	border-radius:3px;
	border:1px solid #942911;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
    margin-left: 5px;
    }
</style>