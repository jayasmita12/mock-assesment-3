
let startdate = document.getElementById("start")
let enddate = document.getElementById("end")


async function showmatch(){
    let res = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${startdate.value}&end_date=${enddate.value}`)
    data = await res.json()
    console.log(data.data)
    appendMatchdata(data.data)
}

function appendMatchdata(data){
    var showmatch = document.getElementById("showmatch")
    var twomatch = document.getElementById("twomatch")
    data.map((e)=>{
        var div = document.createElement("div")
        let img = document.createElement("img")
        img.src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930__480.png"
        img.style="width:100px;height:100px"
        let Date = document.createElement("h5")
        Date.innerHTML=`Date : ${e.date}`
        let Season = document.createElement("h5")
        Season.innerHTML=`Date : ${e.season}`
        let status= document.createElement("h5")
        status.innerHTML=`Status : ${e.status}`
        let Score= document.createElement("h5")
        Score.innerHTML=`Home_team_score : ${e.home_team_score}`
        let division= document.createElement("h5")
        // division.innerHTML=`Division : ${e.team.home_team}`
        div.append(img,Date,Season,status,Score)
        var div1 = document.createElement("div")
        var div2 = document.createElement("div")

        

        twomatch.append(div,div1,div2)
        showmatch.append(twomatch)
    })
}