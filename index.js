

// get all players
async function getPlayers () {
    const response =  await axios.get('http://localhost:8080/players');

    const playersList = document.getElementById('players')

    console.log(response);
    console.log(playersList)
}
getPlayers();


// get one player
async function getPlayer(p) {
    const response =  await axios.get('http://localhost:8080/player/' + p);

    console.log(response.data)
}
getPlayer(2);
