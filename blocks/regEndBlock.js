var regEndBlock = {
  type: "regEnd",
  category: "Regular Expressions",
  unix_description: [
    {
      regPattern: "patt$"
    }
  ],
  message0: "Lines ends with %1\n",
  args0: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],
  style: "Regular Expressions",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "end of line",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regEndBlock]);