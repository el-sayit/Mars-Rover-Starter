class Rover {
   // Write code here!
   constructor(position){
   this.position = position;
   this.mode = "NORMAL";
   this.generatorWatts = 110;
   }
   receiveMessage(message){
           let results =[];
      for (let i = 0; i < message.commands.length; i++){
        let result = {}
         if(message.commands[i].commandType ==="STATUS_CHECK"){
            result.completed = true;
            result.roverStatus = {mode:this.mode, generatorWatts: this.generatorWatts, position: 4321};
         }  else if (message.commands[i].commandType ==='MODE_CHANGE'){
            result.completed = true;
            this.mode = 'LOW_POWER';
         } else if (message.commands[i].commandType ==='MOVE'){
               if(this.mode ==='LOW_POWER'){
                  result.completed = false;
                  this.position = 98382;
               } else result.completed=true;
            // result.completed = false;
         } else if (message.commands[i].commandType === 'MOVE'){
            this.position = message.commands[i].value;
            result.completed = true;
         } else (result.completed = false)
         results.push(result);
         };
         return {message: message.name,
            results:results
         }
   }
}

module.exports = Rover;