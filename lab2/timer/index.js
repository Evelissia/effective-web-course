const oneMin = document.getElementById('1min');
const fiveMin = document.getElementById('5min');
const tenMin = document.getElementById('10min');

const minInput = document.getElementById('min-input')
const secInput = document.getElementById('sec-input')

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

const audio = new Audio('./audio/finish.mp3')

let player = 0
let isStopped = true
let sec = 0;
let	min = 0

stopBtn.disabled = true
resetBtn.disabled = false

oneMin.disabled = true
fiveMin.disabled = true
tenMin.disabled = true

minInput.readOnly = true
secInput.readOnly = true


/*--------------------------------------------------------------------*/
if (!localStorage.isStarted) localStorage.setItem('isStarted', false)

if (localStorage.sec) sec = parseInt(localStorage.sec)
else localStorage.setItem('sec', 0)

if (localStorage.min) min = parseInt(localStorage.min)
else localStorage.setItem('min', 0)
/*--------------------------------------------------------------------*/

const onFinish = () => {
	if (localStorage.isStarted === 'true') {
		document.body.classList.add('audio')
		audio.play()
		isStopped = true
		stopBtn.disabled = true
		resetBtn.disabled = false
		minInput.readOnly = false
		secInput.readOnly = false
	}
}
/*--------------------------------------------------------------------*/

const passageOfTime = (minutes, secondes) => {
	const min = parseInt(minutes)
	const sec = parseInt(secondes)

	minInput.value = min < 10 ? '0' + min : min
	secInput.value = sec < 10 ? '0' + sec : sec

	localStorage.setItem('min', min)
	localStorage.setItem('sec', sec)
}
/*--------------------------------------------------------------------*/

const timer = setInterval(() => {
	if (player >= 0 && !isStopped) {
		passageOfTime(player / 60, player % 60)
		player -= 1
	} else if (
		parseInt(localStorage.min) === 0 &&
		parseInt(localStorage.sec) === 0
	) {
		onFinish()
	}
}, 1000)
/*--------------------------------------------------------------------*/

const startTime = () => {
	player = parseInt(secInput.value) + parseInt(minInput.value) * 60

	if (player != 0) {
		localStorage.isStarted = 'true'
		isStopped = false
		oneMin.disabled = true
		fiveMin.disabled = true
		tenMin.disabled = true
		resetBtn.disabled = true
		stopBtn.disabled = false
		minInput.readOnly = true
		secInput.readOnly = true
	}
}
/*--------------------------------------------------------------------*/

const stopTime = () => {
	localStorage.isStarted = 'false'
	isStopped = true
	stopBtn.disabled = true
	resetBtn.disabled = false
}
/*--------------------------------------------------------------------*/

const resetTime = () => {
	localStorage.isStarted = 'false'
	isStopped = true
	stopBtn.disabled = true
	minInput.readOnly = false
	secInput.readOnly = false
	oneMin.disabled = false
	fiveMin.disabled = false
	tenMin.disabled = false
	localStorage.min = 0
	localStorage.sec = 0
	passageOfTime(localStorage.min, localStorage.sec)
	document.body.classList.remove('audio')
}
/*--------------------------------------------------------------------*/

const addMin = (minutes) => {
	passageOfTime(parseInt(localStorage.min) + minutes, localStorage.sec)
}
/*--------------------------------------------------------------------*/

const inputChange = () => {
	passageOfTime(minInput.value, secInput.value)
}
/*--------------------------------------------------------------------*/

passageOfTime(min, sec)

if (localStorage.isStarted === 'true') {
	startTime()
}
/*--------------------------------------------------------------------*/

oneMin.addEventListener('click', () => addMin(1))
fiveMin.addEventListener('click', () => addMin(5))
tenMin.addEventListener('click', () => addMin(10))

startBtn.addEventListener('click', startTime)
stopBtn.addEventListener('click', stopTime)
resetBtn.addEventListener('click', resetTime)

