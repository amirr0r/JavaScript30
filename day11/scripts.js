// get elements
const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')

// functions associate

const togglePlay = () => video.paused ? video.play() : video.pause()
const updateButton = () => video.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚'

function skip(){
	video.currentTime += parseFloat(this.dataset.skip)	
}

function handleRangeUpdate() {
	video[this.name] = this.value
}

const handleProgress = () => progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
const moveOn = (e) => video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
// hook up events listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
document.body.onkeyup = (e) => e.keyCode === 32 ? togglePlay() : null

skipButtons.forEach(btn => btn.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
let mousedown = false
progress.addEventListener('click', (e) => mousedown && moveOn(e))
progress.addEventListener('mouseup', mousedown = false)
progress.addEventListener('mousedown', mousedown = true)
