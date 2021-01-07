const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    }
const removeOneItem = (state, obj) => {
        localStorage.removeItem(obj.todoItem.item)
        state.todoItems.splice(obj.index, 1);
      }
const toggleOneItem = (state, obj) => {
        state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
        //todoItem.completed = !todoItem.completed;
        localStorage.removeItem(obj.todoItem.item);
        localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
      }    
const clearAllItems = (state) => {
        localStorage.clear();
        state.todoItems = [];
        
      }

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}