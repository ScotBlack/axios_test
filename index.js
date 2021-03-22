
const request = require('request');
const axios = require('axios');

// get all players


async function getPlayers () {
    try {
        const response =  await axios.get('http://localhost:8080/players');
        const playersList = document.getElementById('players')

        for (const player of response.data) {
            console.log("Player:", player)
            const listItem = document.createElement('li');

            listItem.textContent = `${player.name} - ${player.color}`;
            playersList.appendChild(listItem);
        }
    } catch (err) {
        console.log(err);
    }
}
getPlayers();

function aPlayer(id) {
    return {id:id}
}


async function nextColor (id) {
    try {
        const response = await axios.post('http://localhost:8080/next', {"id" : id})
        console.log(response + "got here");
    } catch (err) {
        console.log(err + " lol catched error");
    }
}

nextColor(2);




// get one player
async function getPlayer(p) {
    const response =  await axios.get('http://localhost:8080/player/' + p);

    console.log(response.data)
}
// getPlayer(2);


async function addPlayer(p) {

}

