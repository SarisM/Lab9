const display = document.querySelector('.display')
const inputUser1 = document.querySelector('.input-user1')
const btnUser1 = document.querySelector('.btn-user1')
const inputUser2 = document.querySelector('.input-user2')
const btnUser2 = document.querySelector('.btn-user2')

btnUser1.addEventListener('click', () => {
	const message = inputUser1.value
	if (message !== '') {
		const bubble = document.createElement('div')
		bubble.className = 'bubble'
		bubble.textContent = message
		display.appendChild(bubble)
		inputUser1.value = ''
	}
})
btnUser2.addEventListener('click', () => {
	const message = inputUser2.value
	if (message !== '') {
		const bubble = document.createElement('div')
		bubble.className = 'bubble2'
		bubble.textContent = message
		display.appendChild(bubble)
		inputUser2.value = ''
	}
})
