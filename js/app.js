function wait(){
    document.getElementById('nav-id').style = "height:100vh";
    document.getElementById('navbar-img').style = "display:flex;margin:auto;width:150px;"
    document.getElementById('main-sec').style = "display:none;";
    timeout();
}

function timeout(){
    setTimeout(load, 3000)
}

function load(){

    document.getElementById('nav-id').style = "height:60px";
    document.getElementById('main-sec').style = "display:block;";
    document.getElementById('navbar-img').style = "display:flex;height:100%"
}