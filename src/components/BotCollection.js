import React from "react";
import BotCard from "./BotCard"

function BotCollection({allBots, onClickBot}) {
  // Your code here



  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClickBot={onClickBot} /> ))}
      </div>
    </div>
  );
}

export default BotCollection;
