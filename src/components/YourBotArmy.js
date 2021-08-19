import React , {useState} from "react";
import BotCard from "./BotCard"

function YourBotArmy({allBots, onClickBot, onDischarge}) {

const armyBots = allBots.filter((bot) => 
bot.enlisted
)
// console.log(armyBots)



  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        
        {armyBots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClickBot={onClickBot} onDischarge={onDischarge}/> ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
