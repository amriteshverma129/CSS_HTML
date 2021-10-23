function onsubmission(event){
    password=document.getElementById('password').i;
    password2=document.getElementById('con-password').innerHTML;
    if(password===password2)
    {
        document.getElementById('info').innerHTML="password match";
    }
    else 
    {
        document.getElementById('info').innerHTML="password not match";
        event.preventDefault();
    }
    
}