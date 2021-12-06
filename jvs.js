//function on icon



//Function to display the contact form.
var count = 0;
function contactView(){
    const contForm = document.getElementById('contact');
    const tothetop = document.getElementById('tothetop');
    if(count===0){
        contForm.style.visibility = "visible";
        tothetop.style.visibility = "hidden";
        count++;
    }
    else{
        contForm.style.visibility = "hidden";
        tothetop.style.visibility = "visible";
        count--;
    }

}

//This is a function to auto hide navbar on scroll
function navbarHide(){
    const navnar = document.getElementById('nav');
    navnar.style.transition='0.3s';
    navnar.style.visibility = "hidden";
 

}

//This is a function to auto show navbar on mouse move
function navbarShow(){
    const navnar = document.getElementById('nav');
    navnar.style.visibility = "visible";

}

function contactView11(){
    const contForm = document.getElementById('contact');
    const tothetop = document.getElementById('tothetop');
    contForm.style.visibility = "visible";
    tothetop.style.visibility = "hidden";

}

var looper=0;
function login(){
    const loginform = document.getElementById('login');
    if(looper===0){
        loginform.style.visibility = "visible";
        looper++;
    }
    else{
        loginform.style.visibility = "hidden";
        looper--;
    }
}


var looper4=0;
function photo(){
    const ms = document.getElementById('preview');
    const pte = document.getElementById('pt');
    if (looper4===0){
        ms.style.visibility='visible';
        pte.style.borderColor='gold';
        ms.innerHTML=`<h1>Gallery</h1><span>
        <img src='resources/images/krwalas (2).jpg' height='200' style='border-radius:2em'/>
        <img src='resources/images/linto (3).jpg' height='200' style='border-radius:2em'/>
        <img src='resources/images/programming.jpg' height='200' style='border-radius:2em'/>
        </span>`;
        looper4++;
    }
    else{
        ms.style.visibility='hidden';
        pte.style.borderColor='white';
        ms.innerHTML=``;
        looper4--;
    }
}