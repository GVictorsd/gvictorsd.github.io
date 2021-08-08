
const switcher = document.getElementById('theme')
const doc = document.firstElementChild;


switcher.addEventListener('input', e =>{
 		setTheme(e.target.value);
});

const setTheme = theme => {

	//get stored theme from local storage
	let storedTheme = localStorage.getItem('storedTheme');

	if(storedTheme == null){
		// if theme was not stored previously
		// store and apply
		localStorage.setItem('storedTheme', theme);
		doc.setAttribute('color-scheme', theme);
	}else{
		// else apply the found theme...
		localStorage.setItem('storedTheme', theme);
		doc.setAttribute('color-scheme', theme);
	}
	
}

// get stored theme and apply it
let storedTheme = localStorage.getItem('storedTheme');
doc.setAttribute('color-scheme', storedTheme);
