const form = document.getElementById('form');
const input = document.getElementById('inputText');
const todos = document.getElementById('todos');
const inputBtn = document.getElementById('inputBtn');
const allBtn = document.getElementById('allBtn');
const completedBtn = document.getElementById('completedBtn');
const uncompletedBtn = document.getElementById('uncompletedBtn');

// TAKE A INPUT AND ADD IT TO THE LIST
inputBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const todo = input.value;
    if(todo) {
        addTodoItem(todo);
    }
});

// SHOW COMPLETED ITEMS
completedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    updateTodoItemDisplay(true);

    allBtn.classList.remove('active');
    uncompletedBtn.classList.remove('active');
    completedBtn.classList.add('active');
})

//SHOW UNCOMPLETED ITEMS
uncompletedBtn.addEventListener('click', (e) => {
    e.preventDefault();

    updateTodoItemDisplay(false);

    allBtn.classList.remove('active');
    uncompletedBtn.classList.add('active');
    completedBtn.classList.remove('active');
})

//SHOW ALL ITEMS
allBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const todoItems = Array.from(document.getElementsByTagName('li'));
    todoItems.forEach(todoItem => {
        todoItem.style.display = 'block';
    });

    allBtn.classList.add('active');
    uncompletedBtn.classList.remove('active');
    completedBtn.classList.remove('active');
})

//HELPER FUNCTION TO ADD ITEM INTO LIST
function addTodoItem(todo) {

    // CREATE HTML ELEMENTS TO ADD ITEM
    const todoEl = document.createElement('li');
    const todoLabel = document.createElement('label');
    const todoButton = document.createElement('button');

    // SET VALUES TO HTML ELEMENTS
    todoLabel.innerText = todo;
    todoButton.innerHTML = `<i class="fas fa-times-circle"></i>`;
    todoButton.classList.add('delete');
    todoButton.classList.add('hidden');

    // APPEND HTML ELEMENTS TO LIST
    todoEl.appendChild(todoLabel);
    todoEl.appendChild(todoButton);
    todos.appendChild(todoEl);

    // EVENT LISTENERS FOR THE LIST ITEM

    todoEl.addEventListener('click', (e) => {
        todoEl.classList.toggle('completed');
    })

    // WHEN MOUSE ENTER TO LIST ITEM, SHOW DELETE BUTTON
    todoEl.addEventListener('mouseenter', () => {
        todoButton.classList.toggle('hidden');
    })

    todoEl.addEventListener('mouseleave', () => {
        todoButton.classList.toggle('hidden');
    })

    todoButton.addEventListener('click', () => {
        todoEl.remove();
    })
    input.value = "";
}

// HELPER FUNCTION TO SHOW COMPLETED AND UNCOMPLETED ITEMS
function updateTodoItemDisplay(isTaskCompleted) {
    const todoItems = Array.from(document.getElementsByTagName('li'));

    todoItems.forEach(todoItem => {
        if(todoItem.classList.contains('completed') === isTaskCompleted) {
            todoItem.style.display = 'block';
        } else {
            todoItem.style.display = 'none';
        }
    });

}