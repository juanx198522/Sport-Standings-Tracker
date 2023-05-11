
function runPosition () {
    fetch ("http://ergast.com/api/f1/2023/5/driverStandings.json",{
    }).then(function(response){
        console.log (response)
        return response.json()
    }).then (function(data){
        console.log(data)
        for(var i=0; i<data.MRData.StandingsTable.StandingsLists.length; i++){
            console.log(data.MRData.StandingsTable.StandingsLists[i])
            var target= data.MRData.StandingsTable.StandingsLists[i]
            
            for(var j=0; j<target.DriverStandings.length; j++){
                var driver = target.DriverStandings[j]
                console.log (driver)
                console.log (driver.Driver.familyName)
                
                var row = document.createElement("tr")
                var positions =  document.createElement("th")
                var teams = document.createElement("td")
                teams.textContent = target.season + " - " + driver.Driver.familyName
                positions.textContent = j+1
                row.appendChild(positions)
                row.appendChild(teams)
                document.getElementById("body").appendChild(row)

            }

        }
    })
    }
runPosition()