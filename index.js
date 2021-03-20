

// getPlayers()

async function getPlayers () {
    const response =  await axios.get('http://localhost:8080/players');

    const playersList = document.getElementById('players')

    console.log(response);
    console.log(playersList)
}

getPlayers();