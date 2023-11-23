var awkBlock = {
  type: "awk",
  category: "File and Directory Operations",
  unix_description: [
    {

    }
  ],
  message0: "Awk in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "pattern %1",
  args1: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],
  colour: 387,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "awk in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([awkBlock]);