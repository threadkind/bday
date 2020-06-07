// QUESTIONS FOR WOULD YOU RATHER
let wyr = {
	1 : ['have a magic carpet that flies?', 'have your own personal robot?'],
	2 : ['be the worst player on a team that always wins?', 'be the best player on a team that always loses?'],
	3 : ['have one eye in the middle of your head?', 'have two noses?'],
	4 : ['see a firework display?', 'go to a concert?'],
	5 : ['go water skiing?', 'go snow skiing?'],
	6 : ['eat donuts?', 'eat candy?'],
	7 : ['fly a kite?', 'ride on a scooter?'],
	8 : ['have an extra finger?', 'have an extra toe?'],
	9 : ['only able to crawl on all fours?', 'only be able to walk backwards?'],
	10 : ['able to create a new holiday?', 'able to create a new language?'],
	11 : ['be the funniest person alive?', 'be the smartest person alive?'],
	12 : ['be a famous singer?', 'be a famous actor?'],
	13 : ['be able to fly?', 'be invisible?'],
	14 : ['never have to shower again?', 'never have to clip your toenails?'],
	15 : ['have the chance to design a new toy?', 'be able to direct a movie?'],
	16 : ['be ten years older than you are now?', 'be four years younger than you are now?'],
	17 : ['be able to control the weather?', 'be able to talk to animals?'],
	18 : ['be a master at painting?', 'be an amazing dancer?'],
	19 : ['live on the Moon?', 'live on Mars?'],
	20 : ['meet your favorite celebrity?', 'be in a movie?'],
	21 : ['be only able to whisper?', 'have an incredibly loud voice?'],
	22 : ['eat a raw potato?', 'eat a whole lime?'],
	23 : ['speak every language?', 'play every instrument?'],
	24 : ['live without TV?', 'live without a phone?'],
	25 : ['be a bird?', 'be a horse?'],
	26 : ['live in a desert?', 'live on a deserted island?'],
	27 : ['go on a rollercoaster?', 'go skydiving?'],
	28 : ['live in the sky?', 'live under the sea?'],
	29 : ['have a hand twice as big?', 'have a hand twice as small?'],
	30 : ['have a pet dinosaur?', 'have a pet dragon?'],
	31 : ['always have to enter rooms by announcing your name?', 'always have to cartwheel out of room?'],
	32 : ['have butterfly wings?', 'have a horse tail?'],
	33 : ["have wings, but you can't fly?", "have gills, but you can't swim under water?"],
	34 : ['be the smartest person in the world?', 'be the best athlete in the world?'],
	35 : ['eat a beetle?', 'get stung by a bee?'],
	36 : ['be able to change the color of your hair whenever you want?', 'be able to change the length of your hair whenever you want?'],
	37 : ['live in a mansion in the city?', 'live on a farm with lots of animals?'],
	38 : ['have 5 brothers?', 'have 5 sisters?'],
	39 : ['be a unicorn?', 'be a pegusus?'],
	40 : ['meet a superhero?', 'meet a cartoon character?'],
	41 : ['be an Olympic athlete?', 'be the president?'],
	42 : ['drink sour milk?', 'eat rotten eggs?'],
	43 : ['eat a whole jar of mayonnaise?', 'drink a cup of hot sauce?'],
	44 : ['live without music?', 'live without movies?'],
	45 : ['have a cool new shirt every day?', 'have a new pair of shoes once a week?'],
	46 : ['play in the snow in the mountains?', 'play in the sand at the beach?'],
	47 : ['have a pet panda?', 'have a pet zebra?'],
	48 : ['sweat honey?', 'always smell like a skunk?'],
	49 : ['kiss a frog?', 'hug a snake?'],
	50 : ['shovel snow?', 'rake leaves?']
}

let p = {
	gameContain : document.getElementById('gameContain'),
	gameCard : document.getElementById('gameCard'),
	questionNumber : document.getElementById('questionNumber'),
	optionA : document.getElementById('optionA'),
	optionB : document.getElementById('optionB')
}

function setQuestion(number){
	p.optionA.innerText = wyr[number][0]
	p.optionB.innerText = wyr[number][1]
	p.questionNumber.innerText = number
}

setQuestion(1)

qNumber = 1

p.gameCard.addEventListener('click', ()=>{
	qNumber++

	if(qNumber <= 50){
		setQuestion(qNumber)
	}
	else {
		p.optionA.innerText = "Those are all the questions!"
		p.optionB.innerText = 'Play again?'
	}
})

