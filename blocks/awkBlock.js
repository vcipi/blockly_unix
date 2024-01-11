var awkBlock = {
  type: "awk",
  category: "awk",
  unix_description: [
    {
    awkInput_delimiter : "-F'str' '",  // Change to awk_delimiter
    awkOutput_delimiter : 'OFS"str"',  // Change to awk_delimiter
    input_variable : '-v"', 
	  regPattern : "{patt",
	  awk_cols : "{print str}}'",
    begin : "BEGIN",
    end : "END"
    }
    
  ],
  message0: "Text data processing in file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: ["filename" , "filenamesCreate",]
  }],
  message1: "delimeter %1",
  args1: [
    {
      type: "field_input",
      name: "awkInput_delimiter", // Change to awk_delimiter 
      text: "" 
    }
  ],
  message2: "output delimeter %1\n",
  args2: [
    {
      type: "field_input",
      name: "awkOutput_delimiter", // Change to output awk_delimiter
      text: "",
      align: "RIGHT"
    }
  ],
  message3: "variable input%1\n",
  args3: [
    {
      type: "field_checkbox",
      name: "input_variable",
      checked: false // by default it's disabled
    }
  ],
  message3: "Do before lines process %1\n",
  args3: [{
    type: "input_value",
    name: "begin",
    check: "String" 
  }],
  message4: "action %1\n",
  args4: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }],
  message5: "Do after lines process %1\n",
  args5: [{
    type: "input_value",
    name: "end",
    check: "String" 
  }],
  message6: "columns to print %1",
  args6: [
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