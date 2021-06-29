function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('#contactMe');
//const message = document.querySelector('#message');
const elem = document.querySelector('#floating-contact');

document.addEventListener('scroll', function () {
    isInViewport(contactMe) ?
		elem.style.visibility = 'hidden':// it is visible...
        elem.style.visibility = 'visible'; //not visible...

//    message.textContent = messageText;

},{
    passive: true
});


/*
document.addEventListener('scroll', function () {
    const messageText = isInViewport(contactMe) ?
        '' :// it is visible...
        ''; //not visible...

    message.textContent = messageText;

}, {
    passive: true
});
*/


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
		localStorage.setItem('storedTheme', 'auto');
		doc.setAttribute('color-scheme', 'auto');
	}else{
		// else apply the found theme...
		localStorage.setItem('storedTheme', theme);
		doc.setAttribute('color-scheme', theme);
	}
	
}

// get stored theme and apply it
let storedTheme = localStorage.getItem('storedTheme');
doc.setAttribute('color-scheme', storedTheme);
