var regAnyOneBlock = {
  type: "regAnyOne",
  unix_description: [
    {
      anyOne: "[]",
      notMatch: "^"
    }
  ],
  category: "Regular Expressions",
  message0: "Match any of %1 characters",
  args0:  [
    {
      type: "field_input",
      name: "FILENAME",
      text: "abc" 
    }
  ],
  message1: "Not %1",
  args1:  [
    {
      type: "field_checkbox",
      name: "notMatch",
      checked: false
    }
  ],
  tooltip: "Match any one of the defined characters",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 340,
  helpUrl: "" // URL to further information or documentation.

};

Blockly.defineBlocksWithJsonArray([regAnyOneBlock]);