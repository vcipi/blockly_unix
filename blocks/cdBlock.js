var cdBlock = {
  type: "cd",
  message0: "Change directory to %1",
  category: "File and Directory Operations",
  args0: [
    {
      type: "field_input",
      name: "change_dir",
      text: "............" // empty text for user to define path
    }
  ],
  colour: 400,
  // nextStatement: "Action",
  tooltip: "change your directory",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cdBlock]);