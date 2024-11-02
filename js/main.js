document.getElementById('dialog-trigger').addEventListener('click', () => {
    document.getElementById('dialog-result').innerText = ''
    document.getElementById('dialog').showModal()
})

document.getElementById('dialog-trigger').addEventListener('click', () => {
    document.getElementById('dialog-result').innerText = ''
    document.getElementById('dialog').showModal()
})

document.getElementById('btnConvert').addEventListener('click', () => {
    const fTemp = document.getElementById('fTemp').value
    const cTemp = Number(fTemp) + 1
    document.getElementById('cTemp').value = cTemp
})