const par = document.getElementsByClassName('container1');
const form=document.getElementById('form');
const email=document.getElementById('email');
const pwd=document.getElementById('pass');

var i=1;
function failf(elem,err)
{
    const errormes = elem.parentElement.querySelector('small');
    errormes.innerText= err;
    elem.parentElement.className = 'input fail';
    
    
}
function successf(elem)
{
    elem.parentElement.className = 'input success';
}
function checkmail(){
    const regem= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    const regem2= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    if(regem.test(email.value) || regem2.test(email.value))
    {
        successf(email);
    }
    else{
        failf(email,"Email must be of the form abc@xyz.pqr");
    }
}
function checkpass(){
    const regpwd = /^.{8,}$/;
    if(regpwd.test(pwd.value)){
        successf(pwd);
        
    }
    else {
        failf(pwd,"Password must have minimum eight characters");
    }

}

form.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const regem= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    const regem2= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    if(regem.test(email.value) || regem2.test(email.value))
    {
        successf(email);
        i=1;
    }
    else{
        failf(email,"Email must be of the form abc@xyz.pqr");
        i=0;
    }
    const regpwd = /^.{8,}$/;
    if(regpwd.test(pwd.value)){
        successf(pwd);
        i=1;
        
    }
    else {
        failf(pwd,"Password must have minimum eight characters");
        i=0;
    }
    try{
        const response = await submit();
        display(response);
    }
    catch(errorrr){
        display("FAILURE");
    }
})

function display(errr)
{
    console.log(errr)
    if(errr.ok){
    alert("Successfully logged in");
    form.reset();
    email.parentElement.className = 'input';
    pwd.parentElement.className = 'input';}
    else
    alert("Incorrect email or password");
    
}

async function submit(){
    const fdata = new FormData(form);
    const datasent = Object.fromEntries(fdata);
    if(i===1)
    {
        const res = await fetch('https://reqres.in/api/login',{
            method: 'POST' , 
            headers: {
                'Content-Type': 'application/json'
            } , 
            body: JSON.stringify(datasent)})
            return res;
        }
    }
