var filenameBlock = {
  type: "filename",
  message0: "Filename %1",
  args0: [
    {
      type: "field_input",
      name: "FILENAME",
      text: "default.txt" // default text for the input
    }
  ],
  output: "filename",
  colour: 230,
  nextStatement: "Action",
  tooltip: "Represents a filename.",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([filenameBlock]);