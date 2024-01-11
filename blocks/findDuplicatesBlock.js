var findDuplicatesBlock = { 
  type: "findDuplicates",
  message0: "Find duplicates in file\n",
  category: "Data Processing",
  unix_description: [
    {
      duplicates: "-d" // uniq -d
    }
  ],

  // output: "String",
  colour: 240,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "find duplicate lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findDuplicatesBlock]);