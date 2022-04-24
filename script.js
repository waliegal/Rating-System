let main = document.querySelector('.main')
let page1 = document.querySelector('.rating1')
let page2 = document.querySelector('.rating2')
let page3 = document.querySelector('.rating3')
let page4 = document.querySelector('.rating4')
let page5 = document.querySelector('.rating5')


document.querySelector('.one').addEventListener('click', color1)
document.querySelector('.two').addEventListener('click', color2)
document.querySelector('.three').addEventListener('click', color3)
document.querySelector('.four').addEventListener('click', color4)
document.querySelector('.five').addEventListener('click', color5)


function color1() {
    document.querySelector('.submit').addEventListener('click', submit1)
    document.querySelector(".one").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.querySelector(".one").style.color = "white";
    function submit1 (){
        main.style.display = "none"
        page2.style.display = "none"
        page3.style.display = "none"
        page4.style.display = "none"
        page5.style.display = "none"
    }
}

function color2() {
    document.querySelector('.submit').addEventListener('click', submit1)
    document.querySelector(".two").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.querySelector(".two").style.color = "white";
    function submit1 (){
        main.style.display = "none"
        page1.style.display = "none"
        page3.style.display = "none"
        page4.style.display = "none"
        page5.style.display = "none"
    }
}

function color3() {
    document.querySelector('.submit').addEventListener('click', submit1)
    document.querySelector(".three").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.querySelector(".three").style.color = "white";
    function submit1 (){
        main.style.display = "none"
        page1.style.display = "none"
        page2.style.display = "none"
        page4.style.display = "none"
        page5.style.display = "none"
    }
}

function color4() {
    document.querySelector('.submit').addEventListener('click', submit1)
    document.querySelector(".four").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.querySelector(".four").style.color = "white";
    function submit1 (){
        main.style.display = "none"
        page1.style.display = "none"
        page2.style.display = "none"
        page3.style.display = "none"
        page5.style.display = "none"
    }
}

function color5() {
    document.querySelector('.submit').addEventListener('click', submit1)
    document.querySelector(".five").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.querySelector(".five").style.color = "white";
    function submit1 (){
        main.style.display = "none"
        page1.style.display = "none"
        page2.style.display = "none"
        page3.style.display = "none"
        page4.style.display = "none"
    }
}