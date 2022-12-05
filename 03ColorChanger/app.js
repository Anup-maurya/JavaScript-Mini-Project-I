const canvas = document.getElementById("canvas");
const clickBtn = document.getElementById("button");

clickBtn.addEventListener("click", randomColour);


function randomColour(){
   canvas.style.backgroundColor=randomhex();
};


function randomhex(){
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
         cons=cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}

