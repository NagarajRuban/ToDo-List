const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savsData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savsData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savsData();
    }
},false)

function savsData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

function shoeTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
shoeTask();