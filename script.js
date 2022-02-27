let addTaskBtn = document.getElementById('addTaskBtn');

let tasksCollection = [{
    title: 'do homework',
    description: 'learn js'
  },
  {
    title: 'do sports',
    description: 'go to gym'
  }
];


// создает объект, добавляет его в массив, очищает поле
function addTask() {
  let title = document.querySelector('#title'),
    description = document.querySelector('#description');

  let taskObj = {
    title: title.value,
    description: description.value,
  };

  tasksCollection.push(taskObj);

  createTask(title.value, description.value);
  renderTasks();

  title.value = '';
  description.value = '';

  console.log(tasksCollection);
}

// выводит title и description из начального массива
function outputTasks() {
  tasksCollection.map((task) => {
    createTask(task.title, task.description);
  });
}

// формирует див и
function createTask(title, description) {
  const tasksWrapper = document.querySelector('#tasks');
  let taskItem = document.createElement('div');
  taskItem.classList.add('tasks__item');
  taskItem.innerHTML = `<div class="tasks__info">
    <p class="tasks__title">${title}</p>
    <p class="tasks__descr">${description}</p>
  </div>
  <div class="tasks__btns">
    <label class="tasks__checkbox custom-checkbox">
      <input class="hidden-checkbox" type="checkbox">
      <div class="checkbox">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#ffffff" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      </div>
    </label>
    <button class="tasks__delete">
      <svg enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
          <path
            d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z" />
        </g>
        <g>
          <path
            d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z" />
        </g>
        <g>
          <path
            d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z" />
        </g>
        <g>
          <path
            d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z" />
        </g>
        <g>
          <path
            d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z" />
        </g>
      </svg>
    </button>
  </div>`;
  tasksWrapper.append(taskItem);
}

// обновляет количество заданий
function renderTasks() {
  let tasksCount = document.querySelector('#count');
  tasksCount.innerHTML = tasksCollection.length;
}




outputTasks();
renderTasks();

addTaskBtn.addEventListener('click', () => {
  addTask();
  renderTasks();
});

//добавить делегирование

// при нажатии кнопки удаления удаляем элемент с html и из массива

const deleteBtns = document.querySelectorAll('.tasks__delete');
deleteBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    let taskItem = e.target.closest('#tasks .tasks__item');

    let delTitle = taskItem.querySelector('.tasks__title').textContent;
    // let delDescr = taskItem.querySelector('.tasks__descr').textContent;
    let delItem = tasksCollection.find(taskIitem => taskIitem.title === delTitle);
    console.log(delItem);
    tasksCollection = tasksCollection.filter(item => item !== delItem);
    console.log(tasksCollection);
    // console.log(taskItem.querySelector('.tasks__descr').value);

    if (taskItem) {
      taskItem.remove();
      renderTasks();
    }
  });
});