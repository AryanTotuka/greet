//const container = document.querySelector('.container')
//console.log("container is clicked");

document.getElementById("red").onclick=function(){
    document.getElementById("red").style.backgroundColor="red";
}

document.getElementById("blue").onclick=function(){
    document.getElementById("blue").style.backgroundColor="blue";
}

document.getElementById("green").onclick=function(){
    document.getElementById("green").style.backgroundColor="green";
}

document.getElementById("yellow").onclick=function(){
    document.getElementById("yellow").style.backgroundColor="yellow";
}

document.getElementById("b1").addEventListener("click", function () {
    const name = document.getElementById("greetName").value.trim();
    if (name !== "") {
        document.getElementById("name").textContent = `Hello, ${name}`;
    } else {
        alert("Please enter a name.");
    }
});