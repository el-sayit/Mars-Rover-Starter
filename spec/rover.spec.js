const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
it("constructor sets position and default values for mode and generatorWatts", () => {
  let rover = new Rover(2515,'NORMAL',110)
  expect(rover.position).toBe(2515);
  expect(rover.mode).toBe("NORMAL");
  expect(rover.generatorWatts).toBe(110);

});
  // 7 tests here!
it('response returned by receiveMessage contains the name of the message', () => {
  let commands = [new Command('anytype', 555), new Command('anothertype', 666)]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
    expect(response.message).toBe('Any name')
  
 })
 it('response returned by receiveMessage includes two results if two commands are sent in the message', () => {
  let commands = [new Command('anytype', 555), new Command('anothertype', 666)]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toBe(2)
 })
 it ('responds correctly to the status check command', () => {
  let commands = [new Command('STATUS_CHECK'),new Command('MOVE',1542), new Command('MODE_CHANGE', 'NORMAL')]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[0].completed).toBe(true);
  expect(response.results[0].roverStatus.mode).toBe('NORMAL');
  expect(response.results[0].roverStatus.generatorWatts).toBe(110);
  expect(response.results[0].roverStatus.position).toBe(4321);
 })
 it ('responds correctly to the mode change command', () => {
  let commands = [new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK'),new Command('MOVE',1542)]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[0].completed).toBe(true);
  expect(rover.mode).toBe('LOW_POWER');
})
it ('responds with a false completed value when attempting to move in LOW_POWER mode', () => {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('STATUS_CHECK'),new Command('MOVE',98382)]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[2].completed).toBe(false);
  expect(rover.position).toBe(98382) 
});
it ('responds with the position for the move command', () => {
  let commands = [new Command('MOVE', 4321),new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK')]
  let message = new Message('Any name',commands)
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
    expect(rover.position).toBe(98382);
    expect(response.results[0].completed).toBe(true);
  });
});
