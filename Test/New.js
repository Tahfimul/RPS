var score=0;

var choice1;

var UC="";
function play(){
	 UC = Math.random()*10;
     console.log("UC1: "+UC);
     if(UC < 1){
         UC="None";
                  
   }else if ( UC >=1 &&  UC <= 3 ){
     UC="Rock";
     
   }else if(UC >=4 && UC <= 6){
     UC="Paper";
     
   } else if (UC >=7 && UC <= 9) {
     UC="Scissors";
     
   }  
//User picks their choice

//Check for character spelling
   if (UC === "Rock" || UC === "Paper" || UC === "Scissors" ){
	  window.alert('You can type " Test " to view the fairness of computer choices.');
	  choice1=UC;	 
	  computerChoice();
 }else if (UC === "Test"){
	 test2();
	 
 } else if (UC === ""){
	 window.alert('You did not input anything.');
	 play();
	
 } else if (UC !== "Rock" || UC !== "Paper" || UC !== "Scissors" || UC !=="Test") {
		 window.alert('You misplled the character name.');
		 play();	
		 
		} 
   
};

play();

function test2(){	   
	   var i;	   
	   var R=0;
	   var P=0;
	   var S=0;
	   var N=0;  
	   var PC;
	   var PC1;
	     for (i=0;i<100000;){	       
	        
	         PC1 = Math.random()*10;
	         console.log("PC1: "+PC1);
	         if(PC1 < 1){
		           PC="None";
		           i--
		           console.log("I0: "+i);
		           N++;          
		     }else if ( PC1 >=1 &&  PC1 <= 3 ){
	           PC="Rock";
	           i++
	           console.log("I1: "+i);
	           R++;
	         }else if(PC1 >=4 && PC1 <= 6){
	           PC="Paper";
	           i++
	           console.log("I2: "+i);
	          
	           P++;
	         } else if (PC1 >=7 && PC1 <= 9) {
	           PC="Scissors";
	           i++
	           console.log("I3: "+i);
	           
	           S++;
	         }  
	         
	     }
	   
	   document.getElementById("RESULT").innerHTML="Rock: "+R + "<br>"+ "Paper: "+P+"<br>"+"Scissors: "+S+"<br>"+"None: "+N;
	   document.getElementById("Stat").innerHTML="Test Result";
	   document.getElementById("vs").innerHTML="Ran: " + i + "x";
	
	   test();
	  

	 }
	 
var choice2;

var PC;
function computerChoice(){

var PC1 = Math.floor(Math.random()*10);

if (PC1 >=1 &&  PC1 <= 3){
PC= "Rock";
choice2 = PC;

}else if( PC1 >=4 && PC1 <= 6){
PC = "Paper";
choice2 = PC;

} else if (PC1 >=7 && PC1 <= 9) {
PC= "Scissors";
choice2 = PC;
}else if (PC1 == 0){
	computerChoice();
	
}
}

 choice1;
 
 choice2; 

 function compare(choice1, choice2){
	
	if (choice1 === choice2){
		
		
		return ('It is a tie!');
		
		
	}else if (choice1 == "Rock"){
		
		if(choice2 == "Scissors"){
			score++;
			
			console.log(score);
			
			return ('You win!');
			
		}else{
			score--;
			
			console.log(score);
			
			return ('Computer Wins¡');
		}
	}else if (choice1 == "Paper"){
		if (choice2 == "Rock"){
			score++;
			
			console.log(score);
			
			return ('You win!');
		}
		else {
			score--;
			
			console.log(score);
			return ('Computer Wins¡');
		}
	}else if (choice1 == "Scissors"){
		if (choice2 == "Rock"){
			score--;
		
			console.log(score);
			return ('Computer Wins¡');
		}
		else {
			score++;
			
			console.log(score);			
					
			return ('You win!');
		}
	} 
	 
} 

 window.onload= function (){
    document.getElementById("playerChoice").innerHTML="Your Choice: "+ "<br/>" +"<img src= " + "C:/Users/Home/Desktop/Eclipse/Rock paper scissors 2/WebContent/img/characters/"  + choice1 + ".png height=128px/>" +"<br/>" +choice1;
    document.getElementById("computerChoice").innerHTML="Computer Choice: " + "<br/>" + "<img src= " + "C:/Users/Home/Desktop/Eclipse/Rock paper scissors 2/WebContent/img/characters/"  + PC + ".png height=128px/>" + "<br/>"+ PC;
    document.getElementById("Result").innerHTML="Result: " + compare(choice1,choice2);
    document.getElementById("Score").innerHTML="Your Score: " + score;
    document.getElementById("restart").innerHTML= "Press F5 or Restart button to restart.";
    document.getElementById("vs").innerHTML= "VS";
    document.getElementById("Stat").innerHTML="Game Stat";  	  
    
} 
 
 if (UC == "Test"){
 
	window.onload = function test(){		
		    document.getElementById("playerChoice").innerHTML="";		   
		    document.getElementById("computerChoice").innerHTML="";		 
		    document.getElementById("Score").innerHTML="";	    
	
}
	
}




		

