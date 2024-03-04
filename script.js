const inputBox = document.getElementById("input-box");
const listTask = document.getElementById("list-task");

function addList()
{
    if(inputBox.value === '')
    {
        alert("You must write something!!!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    storeData();
}

listTask.addEventListener("click", function(check)
{
    if(check.target.tagName === "LI")
    {
       check.target.classList.toggle("checked");
       storeData();
    }
    else
    if(check.target.tagName === "SPAN")
    {
        check.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData()
{
    localStorage.setItem("data", listTask.innerHTML);
}

function showData()
{
    listTask.innerHTML = localStorage.getItem("data");
}

showData();