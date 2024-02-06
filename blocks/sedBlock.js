var sedBlock = {
  type: "sed",
  category: "File and Directory Operations",
  unix_description: [
    {
      regPattern: "'s/patt/",
      singleStr: "'s/str/",
      regReplaceText: "str/'",
      regex: '-E',
      globally: "g"
    }
  ],
  message0: "Search and replace in a file\n",
  message1: "is Regex %1\n",
  args1: [{
    type: "field_checkbox",
    name: "regex",
    checked: false // by default it's disabled
    }
  ],
  message2: "search pattern %1\n",
  args2: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
  }
  ],
  message3: "or single string %1\n",
  args3: [{
    type: "field_input",
    name: "singleStr",
  }
  ],
  message4: "text to change %1\n",
  args4: [{
    type: "field_input",
    name: "regReplaceText",
    text: "changeText" // default text for the input
  }],
  message5: "in all occurencies of the pattern %1",
  args5: [{
    type: "field_checkbox",
    name: "globally",
    checked: false // by default it's disabled
  }],
  
  style: "Text Processing",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Stream edit in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([sedBlock]);