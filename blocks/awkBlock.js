var awkBlock = {
  type: "awk",
  category: "File and Directory Operations",
  unix_description: [
    {
      sort_delimiter : "-F",  // Change to awk_delimiter
      awk_cols : "{print $col}"
    }
  ],
  message0: "Text data processing in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "delimeter in quotes %1\n",
  args1: [
    {
      type: "field_input",
      name: "sort_delimiter", // Change to awk_delimiter
      text: "" 
    }
  ],
  message2: "pattern or condition %1\n",
  args2: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],

  message3: "columns to print %1\n(for multiple separate with space)",
  args3: [
    {
      type: "field_input",
      name: "awk_cols",
      text: "" 
    }
  ],
  colour: 387,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "pattern-directed scanning and processing language",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([awkBlock]);