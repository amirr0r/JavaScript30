let countdown

const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
const form = document.querySelector('#custom')

const displayTimeLeft = (seconds) => {
	const minutes = Math.floor(seconds / 60)
	const remainderSeconds = seconds % 60
	timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
	document.title = timerDisplay.textContent
}

const timer = (seconds) => {
	clearInterval(countdown)

	const now = Date.now()
	const then = now + seconds * 1000
	
	displayEndTime(then)
	displayTimeLeft(seconds)
	
	countdown = setInterval(() => {
		const  secondsLeft = Math.round((then - Date.now()) / 1000)
		if (secondsLeft < 0) {
			clearInterval(countdown)
			return
		}
		displayTimeLeft(secondsLeft)
	}, 1000)
}

const displayEndTime = (timestamp) => {
	const end = new Date(timestamp)
	const hours = end.getHours()
	const minutes = end.getMinutes()
	endTime.textContent = `Revenez à ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const setMinutes = (e) => {
	e.preventDefault()
	const customMinutes = Number(form.minutes.value)
	customMinutes === NaN ? '' : timer(customMinutes * 60)
	form.reset()
}

buttons.forEach(btn => btn.addEventListener('click', () => timer(btn.dataset.time)))
form.addEventListener('submit', setMinutes)