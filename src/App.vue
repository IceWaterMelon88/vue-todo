<template>
  <div id="app">
    <!-- <TodoHeader></TodoHeader>
    <Todoinput v-on:addTodoItem="addOneItem"></Todoinput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    <TodoHeader></TodoHeader>
    <Todoinput></Todoinput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import Todoinput from './components/Todoinput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data(){
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods:{
  //   addOneItem(todoItem){
  //     const obj = {completed: false, item: todoItem};
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     this.todoItems.push(obj);
  //   },
  //   removeOneItem(todoItem, index){
  //     localStorage.removeItem(todoItem.item)
  //     this.todoItems.splice(index,1);
  //   },
  //   toggleOneItem(todoItem, index){
  //     this.todoItems[index].completed = !this.todoItems[index].completed;
  //     //todoItem.completed = !todoItem.completed;
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems(){
  //     localStorage.clear();
  //     this.todoItems = [];
      
  //   }
  // },
  //   created(){
  //   if(localStorage.length > 0){
  //    for (let index = 0; index < localStorage.length; index++) {
  //      if(localStorage.key(index) !== 'loglevel:webpack-dev-server'){
  //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
  //      }
  //    }
  //   }
  // },
  components: {
    TodoHeader,
    Todoinput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}
</style>
