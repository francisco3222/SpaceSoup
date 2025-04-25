const password =document.getElementById('password');
const icon=document.getElementById('icon');

function Mostrar(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('show')
    }
    else if(password.type === 'text'){
        password.setAttribute('type','password')
        icon.classList.remove('show')
    }
}