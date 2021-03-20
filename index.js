

// get all players
async function getPlayers () {
    const response =  await axios.get('http://localhost:8080/players');

    const playersList = document.getElementById('players')

    for (const player of response.data) {
        console.log("Player:", player)
        const listItem = document.createElement('li');

        listItem.textContent = `${player.name} - ${player.color}`;
        playersList.appendChild(listItem);
    }
}
getPlayers();


// get one player
async function getPlayer(p) {
    const response =  await axios.get('http://localhost:8080/player/' + p);

    console.log(response.data)
}
// getPlayer(2);
