const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


function addtask(){
    if(inputBox.value === ''){
        alert("Enter Some Data");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = "";
    savetask();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savetask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetask();   
    }
});

function savetask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();

