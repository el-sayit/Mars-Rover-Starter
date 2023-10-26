const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
it("throws error if a name is NOT passed into the constructor as the first parameter", () => {
    expect( function() { new Message() }).toThrow(new Error('name required'));
});
});
describe('constructor sets name', () => {
    it('confirms that the constructor in the Message class correctly sets the name property in a new message object', () => {
        let commands = [new Command('STATUS_CHECK', 12000), new Command('MODE_CHANGE',15000), new Command('MODE_CHANGE', 16000)]
        let obj3 = new Message('Test message', commands)
        expect(obj3.name).toBe('Test message');
    });
});
describe('contains a commands array passed into the constructor as the 2nd argument', () => {
    it('confirms that the commands property of a new message object contains the data passed in from the Message(name, commands) call', () => {
        let commands = [new Message('TestMSG',1500), new Message('TestMSG', 1600)]
        let obj4 = new Message('Testing',commands )
        expect(obj4.commands).toBe(commands);
    });
})
