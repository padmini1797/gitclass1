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
        var uk=document.createElement('LI');
        newdiv.appendChild(uk);
        var obj={
            namei:nameInput.value,
            emaili:emailInput.value,
            phonei:mobInput.value
        };
        var t=document.createTextNode(`${obj.namei}-${obj.emaili}-${obj.phonei}`);
        uk.append(t);
        localStorage.setItem(obj.emaili,JSON.stringify(obj));
        
    }
    
    

}