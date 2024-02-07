let inputbox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");

function addtask() {
    if(inputbox.value===''){
        alert("you must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
       let span=document.createElement("span");
       span.innerHTML="\u00d7"; //multiplaication sign in unicode 
       li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}

listcontainer.addEventListener("click",function(e){
    //e.target ==matlab triggered elemnt and tagName checks if it is equal to li or not
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

  //false indicated event shoulb be handeled during the buble phsing   
},false);

//to store the data in the browser
function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML)
} 

function showtask() {
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();