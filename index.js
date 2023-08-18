var randomvariable1=Math.random()*6+1;
randomvariable1=Math.floor(randomvariable1);

var randomvariable2=Math.random()*6+1;
randomvariable2=Math.floor(randomvariable2);

var file1="./dice"+randomvariable1+".png";
var file2="./dice"+randomvariable2+".png";
document.querySelector(".img1").setAttribute("src",file1);
document.querySelector(".img2").setAttribute("src",file2);

    
             if(randomvariable1>randomvariable2){
                document.querySelector(".container h1" ).innerHTML="Player1 won!";
             }      
    else if(randomvariable1<randomvariable2) {
        document.querySelector(".container h1" ).innerHTML="Player2 won!";
    }                        
    else{
        document.querySelector(".container h1" ).innerHTML="Draw!";
    }
                                        
