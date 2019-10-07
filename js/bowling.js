let frames=  [];

var loaded = () => {
    Genscore();
    display();
}

let Genscore = () => {
   var total = 0;
    for (var i=0; i<10; i++)
{ var score = Math.floor(Math.random() * 31);
    frames.push(score);
    total += score;
    
} 
frames.push(total);
}
    


    display = () => {
        for (let i=0; i<11; i++) {
            document.getElementById("F"+ i).innerText = frames[i]
        }
    }






