let sortDirection = false
let careerData = [
    {player: 'Trent Alexander-Arnold', team: 'Liverpool', season: '2019-2020'},
    {player: 'Trent Alexander-Arnold', team: 'Liverpool', season: '2020-2021'},
    {player: 'Trent Alexander-Arnold', team: 'Liverpool', season: '2021-2022'}
]

function loadTableData(careerData) {
    const tableBody = document.getElementById('playerStatsTable')
    let dataHTML = ''

    for (let data of careerData) {
        dataHTML += `<tr><td>${data.player}</td><td>${data.team}</td><td>${data.season}</td></tr>`
    }

    tableBody.innerHTML = dataHTML
}
loadTableData(careerData)