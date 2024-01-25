var filenameBlock = {
  type: "filename",
  message0: "%{BKY_FILENAME} %1",
  args0: [
    {
      type: "field_input",
      name: "FILENAME",
      text: "default.txt" // default text for the input
    }
  ],
  output: "filename",
  // colour: 230,
  style : "filename_style",
  nextStatement: "Action",
  tooltip: "%{BKY_FILENAME_TOOLTIP}",
  helpUrl: "%{BKY_FILENAME_HELPURL}" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([filenameBlock]);