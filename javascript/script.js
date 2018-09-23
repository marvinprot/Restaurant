function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


// modal
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var modal4 = document.getElementById('myModal4');
var btn4 = document.getElementById("myBtn4");
var modal5 = document.getElementById('myModal5');
var btn5 = document.getElementById("myBtn5");


// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}

// When the user clicks on close1-5 id (x), close the modal
close1.onclick = function() {
    modal.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}
close4.onclick = function() {
    modal4.style.display = "none";
}
close5.onclick = function() {
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
    if (event.target === modal5) {
        modal5.style.display = "none";
    }
}
