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
	    <div id="mainMenu">
          <div class="menu-item" id="zoom">
            <a href="images/Zoom_Virtual_Background.png" target="_blank">
              <p>Zoom Virtual<br>Birthday<br>Background</p>
            </a>
          </div>
          `,
    games : `<h1>Games</h1>
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


          <div class="menu-item" id="skribbl">
            <a href="https://skribbl.io/" target="_blank">
              <p>Skribbl.io</p>
            </a>
          </div>

          <div class="menu-item" id="scattergories">
            <a href="https://swellgarfo.com/scattergories/" target="_blank">
              <p>Scattergories</p>
            </a>
          </div>`,
    partyBox : `<div>Party Box</div>`,
    happyBirthday : `<div>Happy Birthday!</div>
    <div id="youTube">
    	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Qwscb3QIVSg?start=50" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

	}
})



