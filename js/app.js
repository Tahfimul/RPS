

var choice1;

choice1=localStorage.getItem("Choice");
console.log(choice1);

computerChoice();

if (choice1==="Test"){test2();}

function test2(){	   
	   var i;	   
	   var R=0;
	   var P=0;
	   var S=0;
	   var N=0;  
	   var PC;
	   var PC1;
	     for (i=0;i<10000;){	       
	        
	         PC1 = Math.random()*10;
	         console.log("PC1: "+PC1);
	         if(PC1 == 0 || PC1 < 1){
		           PC="None";
		           i--
		           console.log("I0: "+i);
		           N++          
		     }else if ( PC1 >=1 &&  PC1 <= 3 ){
	           PC="Rock";
	           i++
	           console.log("I1: "+i);
	           R++
	         }else if(PC1 >=4 && PC1 <= 6){
	           PC="Paper";
	           i++
	           console.log("I2: "+i);	          
	           P++
	         } else if (PC1 >=7 && PC1 <= 9) {
	           PC="Scissors";
	           i++
	           console.log("I3: "+i);	           
	           S++
	         }  
	         
	     }
	     
	        document.getElementById("RESULT").innerHTML="Rock: "+R + "<br>"+ "Paper: "+P+"<br>"+"Scissors: "+S+"<br>"+"None: "+N;
		    document.getElementById("Stat").innerHTML="Test Result";
		    document.getElementById("vs").innerHTML="Ran: " + i + "x";
		    document.getElementById("restart").innerHTML= "Press F5 or Restart button to restart.";
		    
		    
	       
	     }

	 
var choice2;

var PC;
function computerChoice(){

var PC1 = Math.floor(Math.random()*10);
console.log(PC1);

if (PC1 >=1 &&  PC1 <= 3){
PC= "Rock";
choice2 = PC;

}else if( PC1 >=4 && PC1 <= 6){
PC = "Paper";
choice2 = PC;

} else if (PC1 >=7 && PC1 <= 9) {
PC= "Scissors";
choice2 = PC;
}else if (PC1 == 0 && PC1 < 1){
	computerChoice();
	
}
}

 choice1;
 
 choice2; 
 var score;
 function compare(choice1, choice2){
	
	if (choice1 == choice2){
		score=0;
		console.log("Tie:"+score);		
		return ('It is a tie! I am still better than you &#9757;');
		
		
		
		
	}else if (choice1 == "Rock"){
		
		if(choice2 == "Scissors"){
			score=1;
			
			console.log(score);
			
			return ('You win! I will win another time &#9752;');	
			
			
		}else{
			score=-1;
			
			console.log(score);
			
			return ('Computer Wins¡ Get on my LVL. I am the KING &#9889;');
		}
	}else if (choice1 == "Paper"){
		if (choice2 == "Rock"){
			score=1;
			
			console.log(score);
			
			return ('You win! I will win another time &#9752;');
		}
		else {
			score=-1;
			
			console.log(score);
			return ('Computer Wins¡ Get on my LVL. I am the KING &#9889;');
		}
	}else if (choice1 == "Scissors"){
		if (choice2 == "Rock"){
			score=-1;
		
			console.log(score);
			return ('Computer Wins¡ Get on my LVL. I am the KING &#9889;');
		}
		else {
			score=1;
			
			console.log(score);			
					
			return ('You win! I will win another time &#9752;');
		}
	}
	
	 
} 
 
 window.onload= function(){
	 	countDown=document.getElementById('Score');
	 	console.log("score:"+ score);
	  	document.getElementById("playerChoice").innerHTML="Your Choice: "+ "<br/>" +"<img src= " + "img/characters/"  + choice1 + ".png height=128px/>" +"<br/>" +choice1;
	    document.getElementById("computerChoice").innerHTML="Computer Choice: " + "<br/>" + "<img src= " + "img/characters/"  + PC + ".png height=128px/>" + "<br/>"+ PC;
	    document.getElementById("Result").innerHTML="The result is coming up...";
	   
	    countDown.innerHTML = "3",  
	    
	    setTimeout(function() {
	        countDown.innerHTML = "2"+"<br>"+"Just wait..";
	    }, 2000);    
	   
	     setTimeout(function() {
	        countDown.innerHTML = "1"+"<br>"+"And now.";
	    }, 4000);	
	    
	    document.getElementById("restart").innerHTML= "";
	    document.getElementById("vs").innerHTML= "VS";
	    document.getElementById("Stat").innerHTML="Game Stat"; 
	    setTimeout(function (){		
	        document.getElementById("playerChoice").innerHTML="";	     	
	        document.getElementById("computerChoice").innerHTML="";
	        document.getElementById("Result").innerHTML="Result: " + compare(choice1,choice2);
	        document.getElementById("Score").innerHTML="Your gif:"+"<br/>"+"<img src=img/results/"+ score +".gif width=200px;>"+"<br/>"+"Your Score: " + score;
	     	console.log("score:"+ score);
	        document.getElementById("restart").innerHTML= "Press F5 or Restart button to restart.";
	        document.getElementById("vs").innerHTML= "";    
	    }, 5000); 
	}


 
 if (choice1 === "Test"){ 
	 
	 window.onload=function test() {
	 
	    document.getElementById("playerChoice").innerHTML="";		   
	    document.getElementById("computerChoice").innerHTML="";		 
	    document.getElementById("Score").innerHTML="";
	    
	 }
	
}
 
