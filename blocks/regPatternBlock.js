var regPatternBlock = {
  type: "regPattern",
  category: "Regular Expressions",
  unix_description: [
    {
    //????????? 
    }
  ],
  message0: "Pattern %1",
  args0: [
    {
      type: "field_input",
      name: "regPattern",
      text: "type your pattern here..."// default text for the input
    }
  ],
  style: "Regular Expressions",
  nextStatement: "Action",
  tooltip: "Define a pattern to search",
  helpUrl: "" // URL to further information or documentation.
};


Blockly.defineBlocksWithJsonArray([regPatternBlock]);