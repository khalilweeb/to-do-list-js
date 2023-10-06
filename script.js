const listcontainer = document.getElementById('listcontainer');
const inputbox = document.getElementById('inputbox');


document.getElementById('add').onclick = () => {
    
    if (inputbox.value === '') {
        alert('You must something bruh');
    } else {
        console.log('hhi')
        const task = document.createElement('li');
        const content = document.createTextNode(inputbox.value);
        task.appendChild(content);
        listcontainer.appendChild(task);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        task.appendChild(span);
        
    }
    inputbox.value = '';
    saveData()
}

listcontainer.addEventListener('click' , function (e) {

    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }



})


function saveData() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showtasks() {
    listcontainer.innerHTML = localStorage.getItem('data')
}
showtasks()



