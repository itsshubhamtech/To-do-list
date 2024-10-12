let inp = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");

let run = function () {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = "";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    li.appendChild(delBtn);
}

addBtn.addEventListener("click", () => {
    run();
})

inp.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        run();
    }
})




ul.addEventListener("click", (eve) => {
    if (eve.target.nodeName == "BUTTON") {
        let listIteam = eve.target.parentElement;
        listIteam.remove();
    }
})