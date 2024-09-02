let openn =document.getElementById("open")
let closee =document.getElementById("close")
let menu =document.querySelector(".menu")

onload=function(){
    menu.classList.add('hide')
    openn.classList.remove('hide')
    closee.classList.add('hide')
}


openn.onclick=function(){
    menu.classList.remove("hide")
    closee.classList.remove("hide")
    openn.classList.add("hide")
}
closee.onclick=function(){
    menu.classList.add("hide")
    closee.classList.add("hide")
    openn.classList.remove("hide")
}

let up=document.getElementById("up")

onscroll=function(){
    if(this.scrollY>400){
        up.style.display="block"
    }
}
up.onclick=function(){
    window.scrollTo({top: 0, behavior:'smooth'})
}

function send_email(){
    Email.send({
        SecureToken : "ded8ba29-ed5c-4635-8256-ae79ad27bb88",
        To : document.getElementById("email").value,
        From :  'mmshsh05@gmail.com',
        Subject : document.getElementById("phone_number").value,
        Body : document.getElementById("user_name").value,
    }).then(
      message => alert(message)
    );
}
