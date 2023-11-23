var regStartBlock = {
  type: "regStart",
  category: "Regular Expressions",
  unix_description: [
    {
      regPattern: "^patt"
    }
  ],
  message0: "Line starts with %1\n",
  args0: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],

  colour: 610,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "start of line",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regStartBlock]);