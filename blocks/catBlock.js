var catBlock = {
  type: "cat",
  category: "File and Directory Operations",
  unix_description: [
    {

    }
  ],
  message0: "Concatenate in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],

  colour: 876,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Cut out in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);