fetch('http://localhost:3000/api/tasks')
  .then(response => response.json())
  .then(data => {
    const taskList = document.getElementById('task-list');
    data.tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching tasks:', error));
