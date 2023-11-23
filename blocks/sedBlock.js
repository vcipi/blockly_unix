var sedBlock = {
  type: "sed",
  category: "File and Directory Operations",
  unix_description: [
    {
      sub: "'s/patt/new_text'",
      regex: '-E',
      globally: "g"
    }
  ],
  message0: "Stream edit in a file %1\n",
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "search pattern %1 is Regex %2\n",
  args1: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  },
  {
  type: "field_checkbox",
  name: "regex",
  checked: false // by default it's disabled
  }
  ],
  message2: "text to change %1\n",
  args2: [{
    type: "field_input",
    name: "grepChangeText",
    text: "changeText" // default text for the input
  }],
  message3: "in file %1\n",
  args3: [{
    type: "input_value",
    name: "FILENAME",
  check: "String" 
  }],
  message4: "in all occurencies of the pattern %1",
  args4: [{
    type: "field_checkbox",
    name: "globally",
    checked: false // by default it's disabled
  }],
  colour: 590,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Stream edit in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([sedBlock]);