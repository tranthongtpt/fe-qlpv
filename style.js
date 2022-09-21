function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShow = 0;
document.getElementById("eye").addEventListener("click", function(){
    if(pwShow == 0){
        pwShow = 1;
        show();
    }else{
        pwShow = 0;
        hide();
    }
},false);