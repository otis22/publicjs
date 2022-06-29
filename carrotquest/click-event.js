function TrackedElement(el) {
	let event_name = function () {
		let event = el.getAttribute('data-event');
		if (!event) {
			throw new Error('Carrot event not defined for ' + el.outerHTML)
		}
		return event;
	}
	let event_data = () => JSON.parse(el.getAttribute('data-event-json')) || {}
	let onClick = function () {
		let trackSystem = window.dashly ?? window.carrotquest;
		if (trackSystem) {
			trackSystem.track(
				event_name(),
				event_data()
			);
		} else {
			throw "carrotquest or dashly undefined on this page";
		}	
	}
	return {
		watch: function () {
			el.addEventListener('click', onClick);
		}
	}
}

document.addEventListener("DOMContentLoaded", function() {	
	let carrotElements = document.getElementsByClassName("carrotquest-click-event");
	let dashlyElements = document.getElementsByClassName("dashly-click-event");
	[...carrotElements, ...dashlyElements].forEach(
		(el) => (new TrackedElement(el)).watch()
	);
});