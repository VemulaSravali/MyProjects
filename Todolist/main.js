document.getElementById("addTask").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return; 

    let li = document.createElement("li");
    li.innerHTML = taskText + ' <button class="remove">X</button>';
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    li.querySelector(".remove").addEventListener("click", function () {
        li.remove();
    });
});
