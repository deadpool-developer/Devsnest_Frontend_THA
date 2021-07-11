function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "40px";
    x.style.width = "40px";
  }


function myfunction(){
    return document.getElementById('s1').innerHTML= "This is onclick event.";
}

function myfunction2(){
    return document.getElementById('s2').innerText="This is double click event.";
}

function myfunction3(){
    var x= document.getElementById("s3");
    x.value= x.value.toUpperCase();
}

function myInputFunction(){
    var x= document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML= "You write: "+x;
}

var y= 0;
function myScrollfun(){
    document.getElementById("demo1").innerHTML= y+=1;
}