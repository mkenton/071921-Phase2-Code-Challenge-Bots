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
    console.log(`set bot ${botToDischarge} to discharged`);

    setAllBots(allBots.filter(bot => bot.id !== botToDischarge));
  }

  return (
    <div>
      <YourBotArmy allBots={allBots} onClickBot={setEnlisted} onDischarge={dischargeBot}/> 
      <BotCollection allBots={allBots} onClickBot={setEnlisted} onDischarge={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
