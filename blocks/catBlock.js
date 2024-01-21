var catBlock = {
  type: "cat",
  category: "File and Directory Operations",
  unix_description: [
    {
      lineNumbers: "-n"
    }
  ],
  message0: "Show file\n",
  message1: "with line numbers %1",
  args1: [
    {
      type: "field_checkbox",
      name: "lineNumbers",
      checked: false
    }

  ],
  colour: 876,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Show a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);