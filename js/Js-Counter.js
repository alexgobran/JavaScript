let nbr = 0;


var display = () => {


    var nbrCtrl = document.getElementById("nbr");
    nbrCtrl.value = nbr;
    
    {
        nbrCtrl.style.color = (nbr %2==0) ? "red" : "black";
        nbrCtrl.style.fontWeight = (nbr %3==0) ? "bold" : "normal";
        nbrCtrl.style.fontStyle = (nbr %5==0) ? "italic" : "normal";

        if (nbr % 5 == 0) {
            nbrCtrl.style.fontStyle = "italic";
        }else {
            nbrCtrl. style.fontStyle = "normail";
        }
        //code to implement stage 2 requirements

    }
}
var increment = () => {
    nbr++;
    display();
}
var decrement = () => {
    nbr--;
    display();
}

var loaded = () => {
    display();
}


      
    

    





