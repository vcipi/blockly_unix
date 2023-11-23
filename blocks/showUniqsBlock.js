var showUniqsBlock = {
  type: "showUniqs",
  message0: "Show only the unique lines in file %1\n",
  category: "Data Processing",
  unix_description: [
    {
      uniq : '-u' // uniq -u
    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],

  // output: "String",
  colour: 240,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "find and show only unique lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([showUniqsBlock]);