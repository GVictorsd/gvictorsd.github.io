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
