const todo_list = [];
let active = true;

while (active) {
  let input = prompt('What would you like to do?');
  if (input === 'new' || input === 'n') {
    let newTodo = prompt('Enter new todo:');
    todo_list.push(newTodo);
    console.log('Added "' + newTodo + '"');
  } else if (input === 'list' || input === 'l') {
    if (todo_list.length !== 0) {
      console.log('**********');
      for (let i = 0; i < todo_list.length; i++) {
        console.log(i + ': ' + todo_list[i]);
      }
      console.log('**********');
    } else {
      console.log('List is empty');
    }
  } else if (input === 'delete' || input === 'd') {
    let index = parseInt(prompt('Enter index of todo to delete'));
    if (!Number.isNaN(index)) {
      let deleted = todo_list.splice(index, 1);
      console.log('deleted: "' + deleted[0] + '"');
    } else {
      console.log('Not a number!');
    }
  } else if (input === 'quit' || input === 'q') {
    active = false;
  }
}
