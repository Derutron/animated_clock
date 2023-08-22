const secondHand = document.querySelector("#seconds"),
	minuteHand = document.querySelector("#minutes"),
	hourHand = document.querySelector("#hours");

(function updateClock() {
	let now = new Date(); // Current time
	let seconds = now.getSeconds(); // Seconds 0-59
	let minutes = now.getMinutes() + seconds / 60; // Minutes 0-59 + seconds elapsed / 60
	// let hours = now.getHours() > 12 ? now.getHours() - 12: now.getHours(); // 12-hour format
	let hours = (now.getHours() % 12) + minutes / 60; // 12-hour format + minutes elapsed / 60

	let secRotationAngle = seconds * 6; // 6 degrees per second
	let minRotationAngle = minutes * 6; // 6 degrees per minute
	let hrsRotationAngle = hours * 30; // 30 degrees per hour

	// Rotate the SVG elements about the centre
	secondHand.setAttribute(
		"transform",
		`rotate(${secRotationAngle}, 244, 251)`
	);
	minuteHand.setAttribute(
		"transform",
		`rotate(${minRotationAngle}, 244, 251)`
	);
	hourHand.setAttribute("transform", `rotate(${hrsRotationAngle}, 244, 251)`);

	// Play tick sound
	let tick = new Audio("./media/tick.mp3");
	// tick.currentTime = 0; // Rewinding the audio to the start
	tick.play(); // Play the audio

	// Update every second
	setTimeout(updateClock, 1000);
})();
