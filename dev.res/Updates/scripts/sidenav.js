
var togglerClass = document.getElementById('sidenav')
var toggler = document.getElementById("toggler")

function classToggler(){
    toggler.classList.toggle('change')
    if(sidenav.classList.contains("test-head")){
        sidenav.classList.remove("test-head")
        sidenav.classList.add("sidenav-remove")
    }else{
        sidenav.classList.add("test-head")
        sidenav.classList.remove("sidenav-remove") 
    }
}

toggler.addEventListener('click', function(){
    classToggler()})

// Second Nav switch KeyframeEffect

var btnContainer = document.getElementById("menu")
var buttons = btnContainer.getElementsByClassName("btn")

for(var i=0; buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active")
        if(current.length > 0){
            current[0].className =current[0].className.replace("active", "")
        }
        this.className +=" active";
    })
}