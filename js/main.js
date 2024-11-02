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
    const apiUrl = 'http://api.open-notify.org/iss-now.json'
    
    const response = await fetch(apiUrl);
    const json = await response.json();
    
    // add row to table
    const x = document.getElementById('tblISS');
    let new_row = x.rows[1].cloneNode(true);
    new_row.cells[0].innerText = json.iss_position.latitude;
    new_row.cells[1].innerText = json.iss_position.longitude;
    //console.log(new_row);
    x.prepend( new_row );
})