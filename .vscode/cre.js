const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobInput = document.getElementById('phone');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        var uel=document.createElement("LI");
        var as=document.getElementById('nd');
        var usrOj=document.querySelectorAll('#li');
        var obj={
            namei:nameInput.value,
            emaili:emailInput.value,
            phonei:mobInput.value
        };
        var t=document.createTextNode(`${obj.namei}-${obj.emaili}-${obj.phonei}`);
        uel.appendChild(t);
        as.appendChild(uel);
        localStorage.setItem(obj.emaili,JSON.stringify(obj));
        let delB = document.createElement("button");
        let edB=document.createElement("button");
        delB.addEventListener("click", function() {
        uel.remove();
        localStorage.removeItem(obj.emaili);
        })
        edB.addEventListener("click", function() {
            let eB=[];
            eB=uel.firstChild.textContent.split('-');
            if(eB[1]==obj.emaili){
            localStorage.removeItem(obj.emaili);
            }
            uel.remove();
            let ni=document.getElementById('name');
            let ei=document.getElementById('email');
            let mi=document.getElementById('phone');
            ni.value=eB[0];
            ei.value=eB[1];
            mi.value=eB[2];
            
            }) 
        
        delB.innerHTML = "Delete"
        uel.appendChild(delB); 
        edB.innerHTML = "EDIT"
        uel.appendChild(edB); 
    }
}