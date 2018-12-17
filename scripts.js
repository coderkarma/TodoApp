const input = document.getElementById('input');
const ul = document.querySelector('ul');
let addTask = document.querySelector("#task");
let altPressed = false;
let createdLi;

//add eventlistener when user keypress
input.addEventListener('keypress', (e) => {
    addTask.innerText = input.value
    addTask.innerText = '';

    if (e.keyCode === 13) {
        const li = document.createElement('li');
        let liText = document.createTextNode(input.value);
        li.appendChild(liText);
        ul.appendChild(li);
        input.value = '';
        console.log(e.keyCode);

        // looping through li's  and if 
        createdLi = document.querySelectorAll('li');
        createdLi.forEach(ele => {
            ele.addEventListener('click', (e) => {
                if (altPressed) {
                    e.target.remove()
                }
                if (e.target.style.textDecoration === "line-through") {
                    e.target.style.textDecoration = "";
                } else if (e.target.style.textDecoration !== "line-through") {
                    e.target.style.textDecoration = "line-through";
                    e.target.style.color = "yellow";
                }
            })
        });

        // edit on double click 
        createdLi.forEach(ele => {
            ele.addEventListener('dblclick', (e) => {
                e.target.setAttribute("contenteditable", "true")
               
            })
        });

        createdLi.forEach(ele => {
            ele.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) {
                    e.target.setAttribute("contenteditable", "false")
                }
            });
        });
    }

});

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 18) {
        altPressed = true;
    } else {
        altPressed = false;
    }

});

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 18) {
        altPressed = false;

    }
});