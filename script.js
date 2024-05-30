let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes_container = document.getElementById("notes-container");
let message = document.getElementById("message");

function addNotes(){
    if(text.value === ""){
        alert("Please enter text!!!");
        return;
    }
    message.innerText="";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    notes_container.appendChild(div);

    text.value = "";

    cross_btn.addEventListener("click", function(){
        div.style.display = "None";
    })
}
 btn.addEventListener("click", addNotes);