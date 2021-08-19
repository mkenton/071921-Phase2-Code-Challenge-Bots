import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
const API = 'http://localhost:8002/bots'

function BotsPage() {

  const [allBots, setAllBots] = useState([])
  
  

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAllBots(data))


},[]);

  function setEnlisted(armyBot) {
    // console.log(`set bot ${armyBot} to enlisted`)
    
    if (armyBot.enlisted){
      setAllBots(allBots.map((bot) => 
    bot.id === armyBot.id ? {...bot, enlisted: false} : bot
    ))
    }
    else {
    setAllBots(allBots.map((bot) => 
    bot.id === armyBot.id ? {...bot, enlisted: true} : bot
    ))}
  }

  function dischargeBot(botToDischarge){
    console.log(`set bot ${botToDischarge.id} to discharged`)
    setAllBots(allBots.map((bot) => 
    bot.id === botToDischarge.id ? {...bot, dicharged: true} : bot
    ).filter( bot => !bot.discharged));
  }

  return (
    <div>
      <YourBotArmy allBots={allBots} onClickBot={setEnlisted} onDischarge={dischargeBot}/> 
      <BotCollection allBots={allBots} onClickBot={setEnlisted} />
    </div>
  )
}

export default BotsPage;
