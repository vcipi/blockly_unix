var appendBlock = {
  type: "append",
  message0: "Append result to %1",
  category: "I/O Redirection",  
  unix_description: [
    {
      append_filename : '>> str'
    }
  ],
  args0: [
    {
      type: "field_input",
      name: "append_filename",
      text: "save.csv" // default file for saving
    }
  ],
  colour: 10,
  previousStatement: "Action",
  tooltip: "Appends the result into an already existing file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([appendBlock]);