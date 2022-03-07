const windowBrowserElement = document.getElementById('windowBrowser')

function openWindow() {

    windowBrowserElement.classList.toggle ('window-opened')
    // if(!windowBrowserElement.classList.contains('window-opened')){

    
    // windowBrowserElement.classList.add ('closeWindow')

    // setTimeout( () => windowBrowserElement.classList.remove('closeWindow'), 500)
    // }
}

const windowBrowserElement2 = document.getElementById('windowBar')

function starter() {

    windowBrowserElement2.classList.toggle ('window-bar-opened')

}

const windowBrowserElement3 = document.getElementById('relogio')

function clock() {

    windowBrowserElement3.classList.toggle ('relogio-config')

}

const windowBrowserElement4 = document.getElementById('browser')

function browser() {

    windowBrowserElement4.classList.toggle ('browser-opened')

}

//movimentar a div

// Make the DIV element draggable:
dragElement(windowBrowserElement);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement( windowBrowserElement3);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//relogio

function relogio(){
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();
  
  if(hor < 10){
    hor="0"+hor;
  }
  if(min < 10){
    min="0"+min;
  }
  if(seg < 10){
    seg="0"+seg;
  }
  
  var horas=hor + ":" + min + ":" + seg;
  
  document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);

//carregamento de pagina de pre-loader do easy-tutorials

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){

    loader.style.display = "none"; 
})