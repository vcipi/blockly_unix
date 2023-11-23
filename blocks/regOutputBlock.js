var regOutputBlock = {
  type: "regOutput",
  category: "Regular Expressions",
  message0: "Put Regex",
  message1: "%1",
  args1: [
    {
      type: "input_statement", 
      name: "DO"
    }
  ],
  output: "String",
  "nextStatement": null,
  "colour": 120
};

Blockly.defineBlocksWithJsonArray([regOutputBlock]);