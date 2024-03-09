var uniqBlock = {
  type: "uniq",
  message0: "Remove duplicate lines in file\n",
  category: "Text Processing",
  unix_description: [
    {
	  none: "",
      occurencies: "-c"

    }
  ],

  message1: "count the occurencies of \n duplicates lines removed %1",
  args1: [{
    type: "field_checkbox",
    name: "occurencies",
    checked: false // by default it's disabled
  }],
  
  style: "Text Processing",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "report or filter out repeated lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([uniqBlock]);