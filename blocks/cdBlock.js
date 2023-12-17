var cdBlock = {
  type: "cd",
  category: "File and Directory Operations",
  unix_description: [
    {

    }
  ],
  message0: "Change directory to %1",
  args0: [
    {
      type: "field_input",
      name: "directory",
	  text: "............" // empty text for user to define path
    }
  ],
  colour: 400,
  // nextStatement: "Action",
  tooltip: "change your directory",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cdBlock]);