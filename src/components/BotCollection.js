import React from "react";
import BotCard from "./BotCard"

function BotCollection({allBots, onClickBot, onDischarge={onDischarge}}) {
  // Your code here



  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClickBot={onClickBot} onDischarge={onDischarge}/> ))}
      </div>
    </div>
  );
}

export default BotCollection;
