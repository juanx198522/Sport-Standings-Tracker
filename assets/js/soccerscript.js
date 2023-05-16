function premiereAPIfetch(callback) {
    fetch('https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/PL/standings', {
        headers: {
            'X-Auth-Token': '6774a95b5de8430fad3931c7de73c2b1'
        },
        method:'GET'
    }).then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (data) {
        console.log(data)
        callback(data)
    })
}
function displayPremierLeagueStandings(data) {
    var standingsData = data.standings[0].table;

    for (var i = 0; i < standingsData.length; i++) {
        var teamPosition = standingsData[i].position + "";
        var teamName = standingsData[i].team.name;
        console.log(teamPosition + teamName);

        const row = document.createElement('tr');
        const p1 = document.createElement('th');
        p1.textContent = teamPosition;
        const p2 = document.createElement('td');
        p2.textContent = teamName;
        row.appendChild(p1);
        row.appendChild(p2);
        document.getElementById("body").appendChild(row);
        console.log(document.getElementById("li"));
    }
}


premiereAPIfetch(displayPremierLeagueStandings);
