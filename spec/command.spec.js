const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

});
describe('constructor sets command type', function () {
  it('checks that constructor in the Command class correctly sets the commandType property in the new object. ', function() {
    let obj1 = new Command('MOVE', 12000);
    expect(obj1.commandType).toBe('MOVE');
  });
});
describe('constructor sets a value passed in as the 2nd argument', () => {
  it('checks that the constructor correctly sets the value property in the new object', () => {
    let obj2 = new Command('MODE_CHANGE', 15000)
        expect(obj2.value).toBe(15000);
  });
});