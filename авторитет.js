const loshary = [
	"бля",
	"епта",
	"хуйло",
	"пидор",
	"ебло",
	"сука",
	"пиздец",
	"еблан",
	"долбоеб",
	"мудила",
	"еблище",
	"страдалец",
	"гандон",
	"хуеплет",
	"уебище",
	"манда",
	"пидарас",
	"ебик",
	"мандавошка",
	"пожалуйста"
]
document.addEventListener('mousemove', (e) => {
	[x, y] = [e.clientX, e.clientY]
	
	msgBox = document.getElementById('msg')
	msgBox.innerHTML = "Не двигай мышкой, " + dostanVolynu(loshary)
	msgBox.style.color = '#' + Math.floor(8777215 + Math.random()*8000000).toString(16)
	document.querySelector('body').style.background = '#' + Math.floor(Math.random()*8777215).toString(16)

	width = msgBox.offsetWidth
	msgBox.style.top = y - 70 + 'px'
	msgBox.style.left = x - width / 2 + 'px'
	document.title = dostanVolynu(loshary)
})

function dostanVolynu(ebaly) {
	const amount = ebaly.length
	const index = Math.floor(Math.random() * amount)
	return ebaly[index]
}