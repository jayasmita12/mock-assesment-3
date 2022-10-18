let currentpage = 0
let postperpage=10
let tottalpage;
let data;

playerslist()
async function playerslist(){
    try{
        let res = await fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&page=0`)
        data = await res.json()
        console.log(data)
        tottalpage=data.meta.total_pages
        console.log(tottalpage)
        showPlayersCard(data.data) 
    }
    catch(err){
        console.log(err)
    }
}
let lastpostindex= currentpage * postperpage
let firstpostindex = lastpostindex - postperpage
var players = document.getElementById("players-list")
function showPlayersCard(data){
    players.innerHTML=null
    data.map((e)=>{
        var div = document.createElement("div")
        let img=document.createElement("img")
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCV0t-XhfYZQt1rkoN-tRYDm8kQQjRtT-kg&usqp=CAU"
        img.style="width:100px;height:100px"
        let fullname = document.createElement("h4")
        fullname.innerHTML=`Name : ${e.first_name} ${e.last_name}`
        let position = document.createElement("h6")
        position.innerHTML=`Position : ${e.position}`
        let detailsbtn = document.createElement("button")
        detailsbtn.innerHTML="Team Details"
        detailsbtn.style="color:white;background-color:blueviolet;border:0;padding:7px 14px;cursor:pointer;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;border-radius:5px" 
        div.style="padding:20px;background-color:rgb(243, 216, 165);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        detailsbtn.onclick=function(){
            var h2 = document.createElement("h2")
            h2.innerHTML="Team Details"
            var team = document.createElement("h4")
            team.innerHTML=`Team : ${e.team.full_name}`
            var abbre = document.createElement("h4")
            abbre.innerHTML=`Abbre : ${e.team.abbreviation}`
            var conference = document.createElement("h4")
            conference.innerHTML=`conference : ${e.team.conference}`
            let division = document.createElement("h4")
            division.innerHTML=`Division : ${e.team.division}`
            let city = document.createElement("h4")
            city.innerHTML=`City : ${e.team.city}`
            div.append(h2,abbre,conference,division,city)
        }
        players.append(div)
        // players.style=""

        div.append(img,fullname,position,detailsbtn)
        players.append(div)  
    })
}   

let playername = document.getElementById("name")
async function searchbyname(){
    let res = await fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&search=${playername.value}`)
    data = await res.json()
    console.log(data.data)
    showPlayersCard(data.data)
}