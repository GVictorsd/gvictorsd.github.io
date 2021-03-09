function FadeInSection(props) {
		  const [isVisible, setVisible] = React.useState(true);
		  const domRef = React.useRef();
		  React.useEffect(() => {
		    const observer = new IntersectionObserver(entries => {
		      entries.forEach(entry => setVisible(entry.isIntersecting));
		    });
		    observer.observe(domRef.current);
		    return () => observer.unobserve(domRef.current);
		  }, []);
		  return (
		    <div
		      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
		      ref={domRef}
		    >
		      {props.children}
		    </div>
		  );
		}


function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

