var condOutputBlock = {
  type: "condOutput",
  category: "awk",
  message0: "Put search condition",
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