
var btn = document.getElementById("generator");

var quoteContent = document.getElementById("quoting");
var quoteAuthor = document.getElementById("author");

var Quotesarr =[

    { quotetxt :" “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” " , author: "-- Maya Angelou" },
    { quotetxt :" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , author: "-- Mahatma Gandhi" },
    { quotetxt :" “You only live once, but if you do it right, once is enough.” " , author: "-- Mae West" },
    { quotetxt :" “Be the change that you wish to see in the world.” " , author: "-- Bernar Barch" },
    { quotetxt :" “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment that you can try to achieve.”" , author: "-- Ralph Emerson" },
    { quotetxt :" “In three words I can sum up everything I've learned about life: it goes on.” " , author: "-- Robert Frost" },
    { quotetxt :" “I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.” " , author: "-- Albert Einstein" },


] ;

var random;
var lastRandom = null;

quoteContent.innerHTML = " “Be the change that you wish to see in the world.” "
quoteAuthor.innerHTML = "-- Bernar Barch" 
function displayQuotes (){

    do{
        random = Math.floor( Math.random() * Quotesarr.length );
    }while( random == lastRandom );

    lastRandom = random;


    console.log(random);

 quoteContent.innerHTML = Quotesarr[random].quotetxt ;
 quoteAuthor.innerHTML = Quotesarr[random].author;


}


btn.onclick = displayQuotes;

var soundBtn = document.getElementById("heartxt");
console.log(soundBtn)

soundBtn.addEventListener('click', function() {
   
      
    let saying = new SpeechSynthesisUtterance(`${quoteContent.innerText} by ${quoteAuthor.innerText}` );
    speechSynthesis.speak(saying);
  
  });


  var copy = document.getElementById("copytxt")

  copy.addEventListener('click', function() {
   
    navigator.clipboard.writeText(quoteContent.innerText);
    
});


var twitterBtn = document.getElementById("twit");

twitterBtn.addEventListener('click', function() {

    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteContent.innerText}`;
    window.open(tweetUrl, "_blank");
 });








