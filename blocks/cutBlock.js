var cutBlock = {
  type: "cut",
  category: "File and Directory Operations",
  unix_description: [
    {

    }
  ],
  message0: "Cut out in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: ["filename" , "filenamesCreate",]
  }],
  message1: "pattern %1",
  args1: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],
  colour: 611,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Cut out in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cutBlock]);