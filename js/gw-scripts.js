let p = {
	gameContain : document.getElementById('gameBoard'),
	gameBoard : document.getElementById('gameBoard'),
	gameButtons : document.getElementById('gameButtons')
}

let disney = {
	1 : {
		id: 'rapunzel',
		photo : 'images/GuessWho/disney/rapunzel.jpeg'
	},
	2 : {
		id: 'snow',
		photo : 'images/GuessWho/disney/snow.jpeg'
	},
	3 : {
		id: 'cinderella',
		photo : 'images/GuessWho/disney/cinderella.jpeg'
	},
	4 : {
		id: 'kristoff',
		photo : 'images/GuessWho/disney/kristoff.jpeg'
	},
	5 : {
		id: 'tinkerbell',
		photo : 'images/GuessWho/disney/tinkerbell.jpeg'
	},
	6 : {
		id: 'beast',
		photo : 'images/GuessWho/disney/beast.jpeg'
	},
	7 : {
		id: 'elsa',
		photo : 'images/GuessWho/disney/elsa.jpeg'
	},
	8 : {
		id: 'hans',
		photo : 'images/GuessWho/disney/hans.jpeg'
	},
	9 : {
		id: 'triton',
		photo : 'images/GuessWho/disney/triton.jpeg'
	},
	10 : {
		id: 'anna',
		photo : 'images/GuessWho/disney/anna.jpeg'
	},
	11 : {
		id: 'aladdin',
		photo : 'images/GuessWho/disney/aladdin.jpeg'
	},
	12 : {
		id: 'ariel',
		photo : 'images/GuessWho/disney/ariel.jpeg'
	},
	13 : {
		id: 'tiana',
		photo : 'images/GuessWho/disney/tiana.jpeg'
	},
	14 : {
		id: 'flynn',
		photo : 'images/GuessWho/disney/flynn.jpeg'
	},
	15 : {
		id: 'mickey',
		photo : 'images/GuessWho/disney/mickey.jpeg'
	},
	16 : {
		id: 'pinocchio',
		photo : 'images/GuessWho/disney/pinocchio.jpeg'
	},
	17 : {
		id: 'jasmine',
		photo : 'images/GuessWho/disney/jasmine.jpeg'
	},
	18 : {
		id: 'belle',
		photo : 'images/GuessWho/disney/belle.jpeg'
	},
	19 : {
		id: 'mowgli',
		photo : 'images/GuessWho/disney/mowgli.jpeg'
	},
	20 : {
		id: 'minnie',
		photo : 'images/GuessWho/disney/minnie.jpeg'
	},
	notIt : {
		photo : 'images/GuessWho/disney/notIt.jpeg',
	}
}

let hp = {
	1 : {
		id: 'harry',
		photo : 'images/GuessWho/hp/harry.jpeg'
	},
	2 : {
		id: 'tonks',
		photo : 'images/GuessWho/hp/tonks.jpeg'
	},
	3 : {
		id: 'albus',
		photo : 'images/GuessWho/hp/albus.jpeg'
	},
	4 : {
		id: 'hermoine',
		photo : 'images/GuessWho/hp/hermoine.jpeg'
	},
	5 : {
		id: 'snape',
		photo : 'images/GuessWho/hp/snape.jpeg'
	},
	6 : {
		id: 'ron',
		photo : 'images/GuessWho/hp/ron.jpeg'
	},
	7 : {
		id: 'bellatrix',
		photo : 'images/GuessWho/hp/bellatrix.jpeg'
	},
	8 : {
		id: 'hagrid',
		photo : 'images/GuessWho/hp/hagrid.jpeg'
	},
	9 : {
		id: 'luna',
		photo : 'images/GuessWho/hp/luna.jpeg'
	},
	10 : {
		id: 'ginny',
		photo : 'images/GuessWho/hp/ginny.jpeg'
	},
	11 : {
		id: 'dobby',
		photo : 'images/GuessWho/hp/dobby.jpeg'
	},
	12 : {
		id: 'mcgonagall',
		photo : 'images/GuessWho/hp/mcgonagall.jpeg'
	},
	13 : {
		id: 'draco',
		photo : 'images/GuessWho/hp/draco.jpeg'
	},
	14 : {
		id: 'neville',
		photo : 'images/GuessWho/hp/neville.jpeg'
	},
	15 : {
		id: 'molly',
		photo : 'images/GuessWho/hp/molly.jpeg'
	},
	16 : {
		id: 'twins',
		photo : 'images/GuessWho/hp/twins.jpeg'
	},
	17 : {
		id: 'trelawney',
		photo : 'images/GuessWho/hp/trelawney.jpeg'
	},
	18 : {
		id: 'filch',
		photo : 'images/GuessWho/hp/filch.jpeg'
	},
	19 : {
		id: 'myrtle',
		photo : 'images/GuessWho/hp/myrtle.jpeg'
	},
	20 : {
		id: 'voldemort',
		photo : 'images/GuessWho/hp/voldemort.jpeg'
	},
	notIt : {
		photo : 'images/GuessWho/hp/notIt.jpeg',
	}
}

let nintendo = {
	1 : {
		id: 'kirby',
		photo : 'images/GuessWho/nintendo/kirby.jpeg'
	},
	2 : {
		id: 'peach',
		photo : 'images/GuessWho/nintendo/peach.jpeg'
	},
	3 : {
		id: 'dedede',
		photo : 'images/GuessWho/nintendo/dedede.jpeg'
	},
	4 : {
		id: 'bowser',
		photo : 'images/GuessWho/nintendo/bowser.jpeg'
	},
	5 : {
		id: 'link',
		photo : 'images/GuessWho/nintendo/link.jpeg'
	},
	6 : {
		id: 'mario',
		photo : 'images/GuessWho/nintendo/mario.jpeg'
	},
	7 : {
		id: 'toadette',
		photo : 'images/GuessWho/nintendo/toadette.jpeg'
	},
	8 : {
		id: 'daisy',
		photo : 'images/GuessWho/nintendo/daisy.jpeg'
	},
	9 : {
		id: 'zelda',
		photo : 'images/GuessWho/nintendo/zelda.jpeg'
	},
	10 : {
		id: 'jr',
		photo : 'images/GuessWho/nintendo/jr.jpeg'
	},
	11 : {
		id: 'luigi',
		photo : 'images/GuessWho/nintendo/luigi.jpeg'
	},
	12 : {
		id: 'toad',
		photo : 'images/GuessWho/nintendo/toad.jpeg'
	},
	13 : {
		id: 'waddledee',
		photo : 'images/GuessWho/nintendo/waddledee.jpeg'
	},
	14 : {
		id: 'diddy',
		photo : 'images/GuessWho/nintendo/diddy.jpeg'
	},
	15 : {
		id: 'rosalina',
		photo : 'images/GuessWho/nintendo/rosalina.jpeg'
	},
	16 : {
		id: 'waluigi',
		photo : 'images/GuessWho/nintendo/waluigi.jpeg'
	},
	17 : {
		id: 'yoshi',
		photo : 'images/GuessWho/nintendo/yoshi.jpeg'
	},
	18 : {
		id: 'dk',
		photo : 'images/GuessWho/nintendo/dk.jpeg'
	},
	19 : {
		id: 'isabelle',
		photo : 'images/GuessWho/nintendo/isabelle.jpeg'
	},
	20 : {
		id: 'wario',
		photo : 'images/GuessWho/nintendo/wario.jpeg'
	},
	notIt : {
		photo : 'images/GuessWho/nintendo/notIt.jpeg',
	}
}

let pack = 'nintendo'


function setupBoard(){

let board = ``

for (let i = 1; i <= 20; i++){
	let id = eval(pack)[i].id
	let img = eval(pack)[i].photo

	board += `
          <div id="${id}" class="gwTile">
            <img src="${img}">
          </div>`
}
	p.gameContain.innerHTML = board
}

p.gameButtons.addEventListener('click', (event) => {

	if(event.target.tagName == 'BUTTON'){
		console.log(event.target.id)
		if(event.target.id == "reset"){
			setupBoard()
		}
		else {
			pack = event.target.id.split('-')[0]
			setupBoard()
		}
	}
})

p.gameBoard.addEventListener('click', (event) => {
	if(event.target.tagName == 'IMG')
		if(event.target.src.substr(-10) == 'notIt.jpeg'){
			let current = `images/GuessWho/${pack}/${event.path[1].id}.jpeg`
			event.target.src = current
		}
		else {
			event.target.src = `images/GuessWho/${pack}/notIt.jpeg`
		}
})