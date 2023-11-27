var orBlock = {
  type: "or",
  category: "File and Directory Operations",
  unix_description: [
    {
      or: "||"
    }
  ],
  message0: "OR",

  colour: 150,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "OR condition",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([orBlock]);