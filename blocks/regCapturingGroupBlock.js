var regCapturingGroupBlock = {
  type: "regCapturingGroup",
  unix_description: [
    {
      regPattern: "(patt)"
    }
  ],
  category: "Regular Expressions",
  message0: "Group the pattern %1\n",
  args0: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],
  tooltip: "Define a pattern group",
  previousStatement: "Action",
  nextStatement: "Action",
  style: "Regular Expressions",
  helpUrl: "" // URL to further information or documentation.

};

Blockly.defineBlocksWithJsonArray([regCapturingGroupBlock]);