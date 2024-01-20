var grepBlock = {
  type: "grep",
  category: "File and Directory Operations",
  unix_description: [
    {
      regex: "-E",
      case_ins: "-i",
      whole_word: "-w",
      count_lines: "-c",
      inverted : "-v",
      recursive : "-r",
      show_line_nums : "-n",
      multiple_patterns : "-e",
	    regPattern: 'patt'
    }
  ],
  message0: "Search in file",

  message1: "the pattern %1",
  args1:   [{

	  type: "input_value",
      name: "regPattern",
	  check: "String" 
  }],
  // [
  //   {
  //     type: "field_input",
  //     name: "pattern",
  //     text: "'pattern'" // default text for the input
  //   }
  // ],
  message2: "regular expression %1",
  args2: [
    {
      type: "field_checkbox",
      name: "regex",
      checked: false // by default it's disabled
    }
  ],
  message3: "case insensitive %1",
  args3: [
    {
      type: "field_checkbox",
      name: "case_ins",
      checked: false // by default it's disabled
    }
  ],
  message4: "whole word search %1",
  args4: [
    {
      type: "field_checkbox",
      name: "whole_word",
      checked: false // by default it's disabled
    }
  ],
  message5: "count the matches %1",
  args5: [
    {
      type: "field_checkbox",
      name: "count_lines",
      checked: false // by default it's disabled
    }
  ],
  message6: "show lines that don't match pattern %1",
  args6: [
    {
      type: "field_checkbox",
      name: "inverted",
      checked: false // by default it's disabled
    }
  ],
  message7: "Recursively in all subdirectories %1",
  args7: [
    {
      type: "field_checkbox",
      name: "recursive",
      checked: false // by default it's disabled
    }
  ],
  message8: "Display line numbers for matching lines %1",
  args8: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],

  message9: "Search with multiple patterns%1",
  args9: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],
  
  colour: 646,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "search in a file with a pattern",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([grepBlock]);