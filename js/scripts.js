// PAGE ELEMENTS
let e = {
	nav : document.querySelector('nav'),
	party : document.getElementById('party'),
	checklist : document.getElementById('checklist'),
	checklistToggle : document.getElementById('checklistToggle'),
	list : document.getElementById('list'),
	partyFrame : document.getElementById('partyFrame')
}

// PAGES IN APP
let pages = {
	home : `  <h1>Happy Birthday Beatrice!!</h1>
		<p class="intro">Yay! It's Party Time!<br>Load up your virtual background and let's get started!<br><br>Click on the virtual background below. It will open up in a new tab, so you can save it and then use it as your background<br><br>Once you have your background loaded up, check it off on the checklist on the left. Use this checklist and the menu across the top of the page to work your way through the party activities<br><br></p>
	    <div id="mainMenu">
          <div class="menu-item" id="zoom">
            <a href="images/Zoom_Virtual_Background.png" target="_blank">
              <p>Zoom Virtual<br>Birthday<br>Background</p>
            </a>
          </div>
          `,
    games : `<h1>Games</h1>
    	<p class="intro">Here are some fun games for you to play!<br>For 'Would You Rather?' and 'Scattergories' you can just pull up the game on one screen. For 'Guess Who' and 'Skribbl.io', you will each need to pull up the game on your own device to be able to play.</p>
        <div id="menu">
          <div class="menu-item" id="wouldYouRather">
            <a href="would_you_rather.html" target="_blank">
              <p>Would You Rather?</p>
            </a>
          </div>

          <div class="menu-item" id="guessWho">
              <a href="guess_who.html" target="_blank">
              <p>Guess Who?</p>
            </a>
          </div>

          <div class="menu-item" id="justDance">
            <a href="https://www.youtube.com/playlist?list=PLPBDbZkbYN8WmnbPesuN1YvsAxLNKAZJw" target="_blank">
              <p>Just Dance</p>
            </a>
          </div>

          <div class="menu-item" id="scattergories">
            <a href="https://swellgarfo.com/scattergories/" target="_blank">
              <p>Scattergories</p>
            </a>
          </div>`,
    partyBox : `<h1>Party Box</h1>
    <p class="intro">It's time to open up your party box!!!<br><br>Inside the box you will find lots of fun party treats and some craft kits.<br>Don't forget to share! There are plenty of goodies inside!<br><br>Enjoy your treats and when you are ready, grab your first craft kit and click the corresponding box to reveal the instructions for each craft!<br><br>For Craft 3, you will need some markers for decoration, scissors and a glue stick if you have one.<br></p>
    <div id="craftContain">
    	<div id="craft1" class="crafts">
    		<div id="craft1Hide" class="craftHide"><br>Craft 1<br><br><br>Click to Reveal</div>
			<iframe src="https://www.youtube.com/embed/BUn64I_1Ibw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	</div>
		<div id="craft2" class="crafts">
			<div id="craft2Hide" class="craftHide"><br>Craft 2<br><br><br>Click to Reveal</div>
			<iframe src="https://www.youtube.com/embed/J0vKdmR0xDc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	</div>
    	<div id="craft3" class="crafts">
    		<div id="craft3Hide" class="craftHide"><br>Craft 3<br><br><br>Click to Reveal</div>
			<iframe src="https://www.youtube.com/embed/U21FQ9gRz2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	</div>
	</div>

    	`,
    happyBirthday : `<h1>Happy Birthday!</h1>
    <p class="intro">Yay! Time to open up presents!!<br><br>Here are some party tunes for you to listen to while you open up your gifts!<br><br>Happy Birthday!<br><br>Hope you enjoyed the party! :) <br><br></p>
    <div id="youTube">
    	<iframe src="https://www.youtube-nocookie.com/embed/Qwscb3QIVSg?start=50" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	<iframe src="https://www.youtube.com/embed/7KPfOVw3JwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	<iframe src="https://www.youtube.com/embed/nfWlot6h_JM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`
}

// TASKS IN PARTY CHECKLIST
let tasks = {
	1 : {
		name : 'check1',
		task : 'Set up Zoom virtual background'
	},
	2 : {
		name : 'check2',
		task : 'Play a game'
	},
	3 : {
		name : 'check3',
		task : 'Open up your party box!'
	},
	4 : {
		name : 'check4',
		task : 'Play more games'
	},
	5 : {
		name : 'check5',
		task : 'Happy Birthday!'
	},
}



// SET UP TASKS IN PARTY CHECKLIST AND ADD TO PAGE
let cl = ``

for (let i = 1; i <= 5; i++){
	cl += `         <input type="checkbox" id="${tasks[i].name}" name="${tasks[i].name}">
          <label for="${tasks[i].name}" class="strikethrough">${tasks[i].task}</label><br><br>`
}

e.list.innerHTML = cl

// ADD MENU PAGE ON PAGE LOAD
e.partyFrame.innerHTML = pages.home

// TOGGLE VIEW OF PARTY CHECKLIST
e.checklistToggle.addEventListener('click', () => {
	e.list.classList.toggle('hide')

	if(e.checklistToggle.innerText == 'Hide'){
		e.checklistToggle.innerText = 'Show'
	}
	else {
		e.checklistToggle.innerText = 'Hide'
	}
})

// CHANGE PAGE WITH NAV
e.nav.addEventListener('click', (event) => {

	if(event.target.tagName == 'LI'){
		let x = event.target.innerHTML.split(' ')
		x[0] = x[0].toLowerCase()
		x = x.join('')

		e.partyFrame.innerHTML = pages[x]
		console.log(event)

		if(event.target.innerHTML == 'Party Box'){
			document.getElementById('craft1Hide').addEventListener('click', () => {
				document.getElementById('craft1Hide').classList.add('hide')
			})
			document.getElementById('craft2Hide').addEventListener('click', () => {
				document.getElementById('craft2Hide').classList.add('hide')
			})
			document.getElementById('craft3Hide').addEventListener('click', () => {
				document.getElementById('craft3Hide').classList.add('hide')
			})
		}
	}
})


// REVEAL CRAFTS



