
const cardDesigns=[
    'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png',
    'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2023/July/MiniaturePoodle_Hero.jpg',
    'https://t3.ftcdn.net/jpg/04/63/33/40/360_F_463334095_xy2TKfpTw3HjM2gbp3mhAAHUx41CnoPc.jpg',
    'https://emojis.wiki/thumbs/emojis/crown.webp',
    'https://purepng.com/public/uploads/large/purepng.com-ipadelectronicstablet-ipad-941524671278vjvlk.png',
    'https://image.petmd.com/files/styles/978x550/public/2024-03/border-collie-2.jpg',
    'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg',
    'https://thumbs.dreamstime.com/b/strawberry-cartoon-emoticon-emoji-mascot-icon-character-220542300.jpg',
    'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2024/03/belgian-waffle-recipe-003.jpg',
    'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/teddy-bear.png',
    'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg',
    'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg',
    'https://e7.pngegg.com/pngimages/486/490/png-clipart-apple-watch-series-3-smartwatch-apple-watch-accessory-apple-watch.png',
    'https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png',
    'https://hips.hearstapps.com/hmg-prod/images/sparkling-heart-love-emoji-royalty-free-illustration-1698694657.jpg?crop=1xw:1xh;center,top&resize=980:*',
    'https://i.pinimg.com/736x/5b/48/3f/5b483f2bce11ef92931595af512103d2.jpg',
    'https://banner2.cleanpng.com/20180812/eci/kisspng-iphone-ios-emojipedia-apple-color-emoji-aguacate-avocado-green-iphonex-ijm-5b6fcdb291efa8.6040742915340538105978.jpg',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/2/0/FN_Bagel_s4x3.jpg.rend.hgtvcom.406.305.suffix/1538492445127.jpeg',
    'https://banner2.cleanpng.com/20180329/hce/kisspng-sushi-t-shirt-asian-cuisine-emoji-sticker-food-5abc9a10e25f61.2295372915223096489272.jpg',
    'https://i.pinimg.com/474x/39/53/48/3953484ceb7acf10c0eda69f09aa3c5b.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRmKDfsNdwKe09DGqJzAyRmbkkoi41mINZaYkLa3dyw&s',
    'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/sacred-lotus-gettyimages-1143403162-646fa5a441f5d.jpg?crop=0.535xw:1.00xh;0.0519xw,0&resize=980:*',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/1200px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg',
    'https://www.cnet.com/a/img/resize/36e8e8fe542ad9af413eb03f3fbd1d0e2322f0b2/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=1200&width=1200',
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Kürtőskalács_2.jpg',
    'https://i.pinimg.com/736x/80/45/99/804599a13256b59f1323a64b3cde73db.jpg',
    'https://img.freepik.com/free-vector/cute-elephant-cartoon-character_1308-146090.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1715904000&semt=ais_user',
    'https://www.thesafaricollection.com/wp-content/uploads/2022/07/The-Safari-Collection-Hey-You-Giraffe-Manor-1.jpg',
    'https://cdn.hswstatic.com/gif/smart-animal.jpg',
];

let cards = [];
let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let flips = 1;
let startTime, endTime,elapsedTime = 0;
let intervalId;
let gameBoard = document.getElementById('game-board');
let result = document.getElementById('result');
let name = "";

function initGame() {
    result.innerHTML = '';
    name = prompt('Please enter your name:');
    let numOfPairs = parseInt(prompt('Please select amount of pairs (up to 30):'));
	if(isNaN(numOfPairs) || numOfPairs < 1 || numOfPairs > 30){
		resetGame();
	}
    let numOfCards = numOfPairs * 2;
    let cardsToUse = cardDesigns.slice(0, numOfPairs); //Create array of card sized by numOfPairs
	//Making the cards array with 2 cards of each pair
    for (let i = 0; i < numOfPairs; i++) {
        cards.push(cardsToUse[i]);
        cards.push(cardsToUse[i]);
    }

	//Building and wiping the board
    shuffleCards(cards);
    gameBoard.innerHTML = '';
    result.innerHTML = '';

    for (let i = 0; i < numOfCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        // card.innerHTML = '<div class="disabled">' + cards[i] + '</div>';
        const img = document.createElement('img');
        img.classList.add('disabled');
        img.src=cards[i];
        card.appendChild(img);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
	console.log('num of pairs: ' + numOfPairs);
	console.log('num of cards: ' + numOfCards);
	console.log('cards: ' + cards);
	console.log('cards to use: ' + cardsToUse);
    intervalId = setInterval(updateStopwatch, 1000);
    startStopwatch();
}

function flipCard() {
    
    if (lockBoard) return; //checks if the board is lock
    if (this === firstCard) return; //validation for not clicking the same card twice
	
	//changing the mode of the card
	this.getElementsByClassName("disabled")[0].className = "front-face";
	
    if (!cardFlipped) { //check if is there any card already
        cardFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatchingImg();
	
    flips++;
}


function checkForMatchingImg() {
    let isMatch = firstCard.innerHTML === secondCard.innerHTML;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	//Disabling the cards and reset the variables
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
	
    resetBoard();
	//Finishing game
    console.log('flipped items' + document.querySelectorAll('.front-face').length);
    if (document.querySelectorAll('.front-face').length === cards.length) {
        stopStopwatch(); // Stop the stopwatch
        clearInterval(intervalId); // Stop the interval for updating the stopwatch
        const timeDiff = elapsedTime; // Get elapsed time from the stopwatch
        const formattedTime = displayTime(timeDiff); // Format the elapsed time using the displayTime function
        result.innerHTML = '<h2>Well Done ' + name + '!</h2><p><br />You finished the game in ' + formattedTime + ' with ' + flips + ' flips.</p>';
        result.innerHTML += '<br /><br /><button class="btn btn-primary" onclick="resetGame()">Play Again</button>';
    }

}

function unflipCards() {
	//blocking the board
    lockBoard = true;

	//Enabling the cards
    setTimeout(() => {
		firstCard.getElementsByClassName("front-face")[0].className = "disabled";
		secondCard.getElementsByClassName("front-face")[0].className = "disabled";
		
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function resetGame() {
	location.reload();
}
function startStopwatch() {
    startTime = new Date().getTime(); // Get current time in milliseconds
   // intervalId = setInterval(updateStopwatch, 1000); // Update stopwatch every second
  }
  
  function stopStopwatch() {
    clearInterval(intervalId); // Stop the interval for updating the stopwatch
    stopTime = new Date().getTime(); // Get current time in milliseconds
  }
  
  function updateStopwatch() {
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    elapsedTime = currentTime - startTime; // Calculate elapsed time
    displayTime(elapsedTime); // Display elapsed time
  }
  
  function displayTime(time) {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const formattedTime = padZero(minutes) + ':' + padZero(seconds);
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.innerHTML = '<p>Elapsed time: ' + formattedTime + '</p>'; // Update result element with current elapsed time
    }
    return formattedTime;
  }
  
  function padZero(num) {
    return (num < 10 ? '0' : '') + num; // Add leading zero if needed
  }


initGame();