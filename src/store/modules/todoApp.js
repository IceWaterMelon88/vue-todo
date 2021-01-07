const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for (let index = 0; index < localStorage.length; index++) {
              if(localStorage.key(index) !== 'loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
              }
            }
        }
        return arr;
    },
};

const state = {
    headerText: 'TODO it!',
    todoItems: storage.fetch()
};


const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, obj) {
        localStorage.removeItem(obj.todoItem.item)
        state.todoItems.splice(obj.index, 1);
    },
    toggleOneItem(state, obj) {
        state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
        //todoItem.completed = !todoItem.completed;
        localStorage.removeItem(obj.todoItem.item);
        localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];

    }
};


export default{
    state,
    getters,
    mutations
}