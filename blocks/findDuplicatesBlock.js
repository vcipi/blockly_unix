var findDuplicatesBlock = { 
  type: "findDuplicates",
  message0: "Find duplicates in file%1\n",
  category: "Data Processing",
  unix_description: [
    {
      duplicates: "-d" // uniq -d
    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME",
	  check: ["filename" , "filenamesCreate",]
  }],

  // output: "String",
  colour: 240,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "find duplicate lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findDuplicatesBlock]);