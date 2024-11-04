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

document.getElementById('btnISS').addEventListener('click', async () => {
    const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'
    
    const response = await fetch(apiUrl);
    const json = await response.json();
    
    // add row to table
    const x = document.getElementById('tblISS');
    let new_row = x.rows[1].cloneNode(true);
    new_row.cells[0].innerText = json.latitude;
    new_row.cells[1].innerText = json.longitude;
    
    x.prepend( new_row );
})