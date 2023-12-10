var awkBlock = {
  type: "awk",
  category: "awk",
  unix_description: [
    {
      sort_delimiter : "-F'str'",  // Change to awk_delimiter
	  regPattern : "'{patt",
	  awk_cols : "{print $str}}'",
    }
  ],
  message0: "Text data processing in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "delimeter %1\n",
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

  message3: "columns to print %1",
  args3: [
    {
      type: "input_value",
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