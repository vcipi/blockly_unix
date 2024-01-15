var cutBlock = {
  type: "cut",
  category: "File and Directory Operations",
  unix_description: [
    {
      delimiter : "-d'str'", 
      columns : "-f'str'",
      charsStart : "-c str",
      charsEnd : "-c-str"
    }
  ],
  message0: "Cut out in file\n",
  message1: "delimiter %1",
  args1: [{
    type: "field_input",
    name: "delimiter", 
    text: "",
  }],
  message2: "define columns %1\n",
  args2: [{
    type: "field_input",
    name: "columns", 
    text: "",
  }],
  message3: "substring start %1 end %2",
  args3: [{
    type: "field_input",
    name: "charsStart", 
    text: "",
  },
  {
    type: "field_input",
    name: "charsEnd", 
    text: "",
  }
  ],
  colour: 320,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Cut out in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cutBlock]);