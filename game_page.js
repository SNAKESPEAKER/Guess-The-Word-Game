var p1_name= localStorage.getItem("user1");
var p2_name= localStorage.getItem("user2");
document.getElementById("player1_name").innerHTML= p1_name;
document.getElementById("player2_name").innerHTML= p2_name;


var p1_score=0;
var p2_score=0;
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;


document.getElementById("player_question").innerHTML= "Question Turn:"+p1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn:"+p2_name;

function Send() {
  get_word= document.getElementById("word").value;
  word= get_word.toLowerCase();    
    console.log("Word in lowercase is "+ word);

    L1= word.charAt(1);
    console.log(L1);

    divide= Math.floor(word.length/2);
    L2= word.charAt(divide);
    console.log(L2);

    Minus= word.length-1;
    L3= word.charAt(Minus);
    console.log(L3);

    remove_1= word.replace(L1,"_"); console.log(remove_1);
    remove_2= remove_1.replace(L2,"_"); console.log(remove_2);
    remove_3= remove_2.replace(L3,"_"); console.log(remove_3);

    question_word="<h4 id= 'word_display'>Q. "+remove_3+"</h4>";
    input= "<br>Answer: <input type='text' id= 'Answer_input'>";
    check= "<br><br> <button class= 'btn btn-info' onclick= 'Check()'>Check</button>";

    row= question_word+input+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
document.getElementById("checking-label").innerHTML="";

    
}

var Question="player1";
var Answer="player2";

function Check() {
  given_answer= document.getElementById("Answer_input").value;
  answer_word= given_answer.toLowerCase();
  console.log("Answer in lowercase is "+answer_word);

  if (word==answer_word) {
    document.getElementById("checking-label").innerHTML="Correct!";
   if (Answer=="player1") {
    p1_score= p1_score+1;
    document.getElementById("player1_score").innerHTML= p1_score;
   } else {
    p2_score= p2_score+1;
    document.getElementById("player2_score").innerHTML= p2_score;
   } 

    
  }

  if (Question=="player1") {
    Question="player2";
    document.getElementById("player_question").innerHTML="Question turn: "+p2_name;
  }else{
Question="player1";
document.getElementById("player_question").innerHTML="Question turn: "+p1_name;
 }
  
 if (Answer=="player1") {
  Answer="player2";
  document.getElementById("player_answer").innerHTML="Answer turn: "+p2_name;
}else{
Answer="player1";
document.getElementById("player_answer").innerHTML="Answer turn: "+p1_name;
} 
document.getElementById("output").innerHTML="";
}