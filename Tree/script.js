createParent = document.getElementById('createParent')
backend = document.getElementById('backend')

createParent.addEventListener('click', function() {
    backend.innerHTML += ` <li>
    <span class='name caret'>Node</span>
    <span class="click">m</span>
    <span class='createChild'>+</span>
    <span class='closeIt'>x</span>
    <span class='timer'>0</span>
    </li>`
    myfunction()
})

backend.addEventListener('click', function(e) {
    if (e.target.classList == 'closeIt') {
        e.target.parentElement.remove();
    }
    if (e.target.classList == 'createChild') {
        createChildBtn = e.target;
        parentNode = createChildBtn.parentElement;
        if (!parentNode.querySelector(".caret").classList.contains("haveChild")) {
            parentNode.querySelector(".caret").classList.add("haveChild");
        }

        var x = ` <li>
        <span class='name caret'>Node</span>
        <span class="click">m</span>
        <span class='createChild'>+</span>
        <span class='closeIt'>x</span>
        <span class='timer'>0</span>
        </li>`
        if(parentNode.querySelector("ul")){
            parentNode.querySelector("ul").innerHTML += x;
        }
        else{
            parentNode.innerHTML += `<ul class='nested'>${x}</ul>`;
            toggle()
        }
        myfunction()
        
    }
    toggle()
})

function toggle() {
    carets = document.getElementsByClassName('caret');
    for(let i = 0; i < carets.length; i++) {
        carets[i].addEventListener('click', function() {
            parent = this.parentElement;
            parent.querySelector('.nested').classList.toggle('active')
        })
    }
}

function myfunction() {
    for(let i=0;i<document.getElementsByClassName("click").length;i++){
        document.getElementsByClassName("click")[i].onclick=function(){
            var text=document.getElementsByClassName("name")[i];
            var val=text.innerHTML;
            text.innerHTML="<input type='text' id='n' value="+val+" />";
            document.getElementById("n").addEventListener("blur",function(e){
                text.innerHTML=document.getElementById("n").value;
            });
        };
    }
}


var timer = setInterval(count, 1000);
function count() {
    for(let i=0;i<document.getElementsByClassName("timer").length;i++){
        num = parseInt(document.getElementsByClassName("timer")[i].textContent);
        num += 1;
        document.getElementsByClassName("timer")[i].innerHTML = num;
    }
}
