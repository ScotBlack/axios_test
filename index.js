


function getPlayers() {
    axios
        .get('http://localhost:8080/players', {
            timeout: 5000
        })
        .then(res => console.log(res.data))
        .catch(err=> console.error(err))
}


// getPlayers()

async function getPlayersTwo () {
    const response =  await axios.get('http://localhost:8080/players');

    console.log(response);
}

getPlayersTwo();