var awkBlock = {
  type: "awk",
  category: "awk",
  unix_description: [
    {
    awkInput_delimiter : "-F'str'",  // Change to awk_delimiter
    awkOutput_delimiter : "-OFS'str'",  // Change to awk_delimiter
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
  message1: "delimeter %1",
  args1: [
    {
      type: "field_input",
      name: "awkInput_delimiter", // Change to awk_delimiter || Discuss with VAG
      text: "" 
    }
  ],
  message2: "output delimeter %1\n",
  args2: [
    {
      type: "field_input",
      name: "awkOutput_delimiter", // Change to output awk_delimiter || Discuss with VAG
      text: "",
      align: "RIGHT"
    }
  ],
  message3: "pattern or condition %1\n",
  args3: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],

  message4: "columns to print %1",
  args4: [
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