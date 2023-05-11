
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
            var h3 = document.createElement("h3")
            h3.textContent = target.season + " - " + target.round;
            document.getElementById("racing-positions").appendChild(h3)
            for(var j=0; j<target.DriverStandings.length; j++){
                var driver = target.DriverStandings[j]
                console.log (driver)
                console.log (driver.Driver.familyName)
                var h5 = document.createElement("h5")
                h5.textContent = target.season + " - " + driver.Driver.familyName
                document.getElementById("racing-positions").appendChild(h5)
            }

        }
    })
    }
runPosition()