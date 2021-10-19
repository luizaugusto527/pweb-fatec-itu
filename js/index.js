const select = document.querySelector('.custom-select');
const tasks = document.querySelectorAll('.task');
const extraTasks = document.querySelectorAll('.extra-task');


select.addEventListener('change',filter);

function filter() {
    if (select.value === 'tarefa extra') {
        tasks.forEach(task => {
            task.style.display = "none";
            
        });
        extraTasks.forEach(extratasks => {
            extratasks.style.display = "block";
        });
    } if (select.value === 'tarefa'){
        tasks.forEach(task => {
            task.style.display = "block";
            
        });
        extraTasks.forEach(extratasks => {
            extratasks.style.display = "none";
        });
    }if(select.value === 'todos'){
        tasks.forEach(task => {
            task.style.display = "block";
            
        });
        extraTasks.forEach(extratasks => {
            extratasks.style.display = "block";
        });

    }
    
}