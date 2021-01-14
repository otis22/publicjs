function TrackedElement(el) {
	let event_name = function () {
		event = el.getAttribute('data-event');
		if (!event) {
			throw new Error('Carrot event not defined for ' + el.outerHTML)
		}
		return event;
	}
	let event_data = () => JSON.parse(el.getAttribute('data-event-json')) || {}
	let onClick = function () {
		if (window.carrotquest)	{
			carrotquest.track(
				event_name(),
				event_data()
			);
		} else {
			throw "carrotquest undefined on this page";
		}	
	}
	return {
		watch: function () {
			el.addEventListener('click', onClick);
		}
	}
}

document.addEventListener("DOMContentLoaded", function() {	
	let elements = document.getElementsByClassName("carrotquest-click-event");
	[...elements].forEach((el) => (new TrackedElement(el)).watch());
});