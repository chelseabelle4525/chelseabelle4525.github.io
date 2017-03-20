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
	];
// had to look up click events for some help:"http://api.jquery.com/on/"
//I chose a counter because it would help log how many times the card deck was clicked 
 let counter = -1;
//This was incredibly frusterating because I set it at zero because as we know arrays
//go 0,1,2... but for some reason It kept breaking, but i called taj over and 
//we were fiddingling around with it and i randomly tried -1 as a joke and it happened to 
//work and I have no idea why ive been googling my brains out the closest theory 
//i came to which i pushed earlier is
//because maybe it counts -1 before getting to 0 which would be the 1st item. 
//so maybe it goes -1 ...and prints 0, 1, 2 
 $( ".bOc" ).on("click", function() {
 	counter++
 //here we are refrensing the deck of the back of cards which is what I want people to click 
//I am doing an on click which i have refrenced above to tell the page to listen for 
//when it is clicked. The counter++ adds a 1 to the counter each time it is clicked.
//without this counter my cards would A. not show up at all and B. bellow you will see
//how the counter takes my randomly sourced card and places it with in the divs

 let randomSrc = cards[Math.floor(Math.random() * cards.length)][1];
//here we have set the variable randomSrc to = the array plus the method of
//randomization floor rounds the number down to the nearest integer which 
//we then times that by the random method times the length of the array 
//i got really really confused as to why this orginally wasnt working without the 1 
//added at the end but i did some research and found this resource 
//https://blog.kevinchisholm.com/javascript/javascript-array-length-always-one-higher/
//essentially saying when you use the length attribute it starts at 1 not 0 
// this still confuses me with the negative 1 above. 


let card = $('.card');
//Here we define card 
//(which is in the html as a class for the divs containing cards)
// in jquery so we can refrence it more simply in the next line of code


 card[counter].src = randomSrc;
 //here we put it in to action!!! we do card plus the counter so each time the 
 //counter goes up it fills the empty src from the html we are refrencing with 
 //our randomSrc that we create above refrencing our arry and filling the div 
 //card slots with tarot cards!!! 

 
});


})();
    	
