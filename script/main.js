

function isInViewport(el) {
	/* returns if an element is visible.. */
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


/* Make floating contact button visible if top contact icon is not visible... */
const box = document.querySelector('#contactMe');
const elem = document.querySelector('#floating-contact');

document.addEventListener('scroll', function () {
    isInViewport(contactMe) ?
		elem.style.visibility = 'hidden':// it is visible...
        elem.style.visibility = 'visible'; //not visible...
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
