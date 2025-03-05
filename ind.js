const decrease = document.getElementById("dec");
const reset = document.getElementById("re");
const increase = document.getElementById("inc");
const countlabel = document.getElementById("mylabel");
let count = 0;

increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}


