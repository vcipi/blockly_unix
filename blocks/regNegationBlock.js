var regNegationBlock = {
  type: "regNegation",
  category: "Regular Expressions",
  unix_description: [
    {
        regPattern: "[^patt]"
    }
  ],
  message0: "Negate following pattern %1\n",
  args0: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],

  colour: 870,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Find the negation of the pattern following",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regNegationBlock]);