document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("task-list");
  const dailyScore = document.getElementById("daily-score");

  const tasks = [
    "Check business emails",
    "Manage customer orders",
    "Update social media posts",
    "Balance daily finances",
    "Schedule meetings with clients"
  ];

  let score = 0;

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
      if (!li.classList.contains("completed")) {
        li.classList.add("completed");
        score += 10;
        dailyScore.textContent = score;
      }
    });
    taskList.appendChild(li);
  });
});
