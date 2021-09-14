
function editName(){
    let profileName1 = document.querySelector('.profileName');
    profileName1.innerHTML = "Bryan Cascante";
    console.log("hola");
}

let editbutton = document.querySelector('.hipertext1');
editbutton.addEventListener("click", editName)

function removeRequest(){
    let userRequest = document.querySelector('.requestofusers');
    userRequest.remove();
}

let acceptDenyButton = document.querySelectorAll('.aceptdeny'); 
for(let i = 0; i < acceptDenyButton.length; i++){
    acceptDenyButton[i].addEventListener("click", removeRequest);
}



