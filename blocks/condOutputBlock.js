var condOutputBlock = {
  type: "condOutput",
  category: "File and Directory Operations",
  message0: "Put multiple condition",
  message1: "%1",
  args1: [
    {
      type: "input_statement", 
      name: "DO"
    }
  ],
  output: "String",
  "nextStatement": null,
  "colour": 320
};

Blockly.defineBlocksWithJsonArray([condOutputBlock]);