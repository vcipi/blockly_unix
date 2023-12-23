var catBlock = {
  type: "cat",
  category: "File and Directory Operations",
  unix_description: [
    {

    }
  ],
  message0: "Show file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: ["filename" , "filenamesCreate",]
  }],

  colour: 876,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Show a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);