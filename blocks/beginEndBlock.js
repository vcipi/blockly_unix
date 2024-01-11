var beginEndBlock = {
  type: "beginEnd",
  category: "awk",
  message0: "Process once",
  message1: "%1",
  args1: [
    {
      type: "input_statement", 
      name: "DO"
    }
  ],
  output: "String",
  "nextStatement": null,
  "colour": 510
};

Blockly.defineBlocksWithJsonArray([beginEndBlock]);