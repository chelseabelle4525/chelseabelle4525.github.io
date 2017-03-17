console.log('script loaded')
"use strict";
	
    // -------------------------------------------------------------
 
    ////////////questions? 
    //on the 1st click on the <button> which is the deck 
    //possibilities: on click event and then math.random and conect it to the pastImg div 
    //it needs to disperse a random card for past
    //on the second click it needs to disperse a card for present
    //on the third click it needs to disperse a card for future 
    //after three clicks nothing more should happen 
    // and then if they want to redo the reading add a refresh button


		//click cards created a click function- now I need it to randomly pick a card 
		//and send it to the past div.
(function(){


	let cards = [
		['deathCard','lfTarotCards/deathCard.png'],
		['judgementCard','lfTarotCards/judgementCard.png'],
		['justiceCard','lfTarotCards/justiceCard.png'],
		['strengthCard','lfTarotCards/strengthCard.png'],
		['temperanceCard','lfTarotCards/temperanceCard.png'],
		['theChariotCard','lfTarotCards/theChariotCard.png'],
		['theDevilCard','lfTarotCards/theDevilCard.png'],
		['theEmperorCard','lfTarotCards/theEmperorCard.png'],
		['theEmpressCard','lfTarotCards/theEmpressCard.png'],
		['theFoolCard','lfTarotCards/theFoolCard.png'],
		['theHangedManCard','lfTarotCards/theHangedManCard.png'],
		['theHeirophantCard','lfTarotCards/theHeirophantCard.png'],
		['theHighPriestessCard','lfTarotCards/theHighPriestessCard.png'],
		['theHermitCard','lfTarotCards/theHermitCard.png'],
		['theLoversCard','lfTarotCards/theloversCard.png'],
		['theMagicianCard','lfTarotCards/theMagicianCard.png'],
		['theMoonCard','lfTarotCards/theMoonCard.png'],
		['theStarCard','lfTarotCards/theStarCard.png'],
		['theSunCard','lfTarotCards/theSunCard.png'],
		['theTowerCard','lfTarotCards/theTowerCard.png'],
		['theWheelCard','lfTarotCards/theWheelCard.png'],
		['theWorldCard','lfTarotCards/theWorldCard.png'],
	]
// had to look up click events for some help:"http://api.jquery.com/on/"
 	let counter = -1;
 $( ".bOc" ).on("click", function() {
 	counter++
  console.log($( this ).text());

  let randSrc = cards[Math.floor(Math.random() * cards.length)][1];''
  let card = $('.card');

  card[counter].src = randSrc;

  
//Get the info for the index number
// Function that checks if the card slot is empty if it is put that card in there
});


})();
    	
